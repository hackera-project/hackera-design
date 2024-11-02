import { usePaginationStore } from '../pagination'
import { getI18n } from '@/plugins/i18n'
import type { PaginationResponse } from '@/types'

interface Report {
  id: number
  title: string
  status: string
  hacker: { id: number; name: string }
  program: { id: number; title: string }
  asset: { id: number; asset_value: string }
}

export const useReportsStore = defineStore('reports-store', () => {
  const pagination = usePaginationStore('reports-store')
  const { page, meta } = storeToRefs(pagination)

  const reports = ref([] as Report[])
  const loading = reactive({ fetch: false })

  const fetch = async () => {
    loading.fetch = true

    const res = await useApi<PaginationResponse<Array<Report>>>(url('v1/reports', { page: page.value }))

    const data = res.data.value
    if (res.statusCode.value === 200 && data) {
      reports.value = data.result.data
      pagination.update(data.result.meta)
    }

    loading.fetch = false
  }

  watch(page, fetch)

  return {
    reports,
    loading,
    fetch,

    page,
    meta,
  }
})

const { t } = getI18n().global

export const headers = [
  { title: t('company'), key: 'company.title', sortable: false },
  { title: t('program'), key: 'program.title', sortable: false },
  { title: t('asset'), key: 'asset.asset_value', sortable: false },
  { title: t('reported-at'), key: 'created_at', sortable: false },
  { title: t('status'), key: 'status', sortable: false },
  { title: t('payment'), key: 'payment', sortable: false },
  { title: '', key: 'action', sortable: false },
]
