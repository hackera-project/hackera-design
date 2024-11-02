import type { Response } from '@/types'

interface Report {
  id: number
  title: string
  description: string
  reproduce_steps: string
  payment: number
  hacker: { id: number; name: string }
  status: string
  created_at: string
  cve: string
  cwe: string
  severity: string
}

export const useReportStore = defineStore('report-store', () => {
  const report = ref({} as Report)
  const loading = reactive({ fetch: false })
  const currentId = ref(0)

  const setId = (id: number) => currentId.value = id
  const getId = () => currentId.value

  const fetch = async () => {
    loading.fetch = true

    const res = await useApi<Response<Report>>(`v1/reports/${currentId.value}`).get()

    const data = res.data.value

    if (res.statusCode.value === 200 && data)
      report.value = data.result

    loading.fetch = false
  }

  return {
    report,
    loading,
    fetch,
    setId,
    getId,
  }
})
