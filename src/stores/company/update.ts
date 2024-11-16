import { router } from '@/plugins/1.router'
import type { Response } from '@/types'

interface Company {
  id: number
  title: string
  description: string
  website: string
  logo: string
}

export const useCompanyUpdateStore = defineStore('company-update-store', () => {
  const company = ref({} as Company)
  const loading = reactive({ fetch: false, submit: false })

  const fetch = async () => {
    loading.fetch = true

    const companyId = Number(router.currentRoute.value.params.id)
    const res = useApi<Response<Company>>(`v1/companies/${companyId}`).get()

    const data = res.data.value
    if (res.statusCode.value === 200 && data)
      company.value = data.result

      loading.fetch = false
  }

  const submit = async () => {
    loading.submit = true

    loading.submit = false
  }

  return {
    company,
    loading,
    fetch,
    submit,
  }
})
