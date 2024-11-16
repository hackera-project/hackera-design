import { useUserStore } from './me'
import { router } from '@/plugins/1.router'
import type { Response } from '@/types'

export const useRegisterStore = defineStore('register-store', () => {
  const loading = reactive({ submit: false })

  const form = ref({
    role: 'hacker',

    name: '',
    username: '',
    email: '',
    password: '',

    company_title: '',
    company_id: null as number | null,
  })

  const submit = async () => {
    loading.submit = true

    if (form.value.role === 'company-admin') {
      const res = await useApi<Response<{ id: number }>>('v1/companies').post({ title: form.value.company_title })
      if (res.statusCode.value === 200)
        form.value.company_id = res.data.value?.result.id ?? null
    }

    const res = await useApi<Response<{ token: string; role: string }>>('v1/auth/register').post(form.value)

    const data = res.data.value

    if (res.statusCode.value === 200 && data) {
      useUserStore().setUser(data.result.token)
      router.push(data.result.role === 'hacker' ? '/hacker' : '/company')
    }

    loading.submit = false
  }

  return {
    form,
    loading,
    submit,
  }
})
