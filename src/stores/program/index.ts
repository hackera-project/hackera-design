import { usePaginationStore } from '../pagination'
import { getI18n } from '@/plugins/i18n'
import type { PaginationResponse } from '@/types'

type ProgramStatus = 'active' | 'deactive' | 'review'

export interface Program {
  id: number
  title: string
  status: ProgramStatus

  company: { title: string; logo: string }
  assets: Record<string, number>
  payments: { min: number, max: string }
}

export const useProgramsStore = defineStore('programs-store', () => {
  const pagination = usePaginationStore('programs')
  const { page, perPage, meta, paginationDesc } = storeToRefs(pagination)

  const programs = ref([] as Array<Program>)
  const loading = reactive({ fetch: false })

  const fetch = async () => {
    loading.fetch = true

    const res = await useApi<PaginationResponse<Array<Program>>>(
      url('v1/programs', { page: page.value }),
    ).get()

    const data = res.data.value

    if (res.statusCode.value === 200 && data) {
      programs.value = data.result.data
      pagination.update(data.result.meta)
    }

    loading.fetch = false
  }

  const getColor = (status: ProgramStatus) => {
    if (status === 'active')
      return 'success'

    if (status === 'deactive')
      return 'error'

    if (status === 'review')
      return 'warning'
  }

  watch(page, fetch)

  return {
    programs,
    loading,
    fetch,
    getColor,

    page,
    perPage,
    meta,
    paginationDesc,
  }
})

const { t } = getI18n().global

export const headers = [
  { title: t('title'), key: 'title', sortable: false },
  { title: t('assets'), key: 'assets_count', sortable: false },
  { title: t('paid'), key: 'paid', sortable: false },
  { title: t('reports'), key: 'reports', sortable: false },
  { title: t('status'), key: 'status', sortable: false },
  { title: t('actions'), key: 'actions', sortable: false },
]
