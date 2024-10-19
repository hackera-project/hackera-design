import { useUserStore } from './me'
import type { Response } from '@/types'
import { router } from '@/plugins/1.router'

const emptyForm = () => ({
  email: '',
  password: '',
})

export const useLoginStore = defineStore('login-store', () => {
  const form = ref(emptyForm())
  const loading = reactive({ submit: false })

  const submit = async () => {
    loading.submit = true

    const res = await useApi<Response<{ token: string; role: string }>>('v1/auth/login').post(form.value)

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
