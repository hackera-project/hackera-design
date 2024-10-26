import { useProgramUpdateStore } from '..'
import type { PaginationResponse } from '@/types'
import { usePaginationStore } from '@/stores/pagination'
import { getI18n } from '@/plugins/i18n'

export const severityMap = {
  1: 'low-severity',
  2: 'medium-severity',
  3: 'high-severity',
  4: 'critical-severity',
}

interface Asset {
  id: number
  type: string
  asset_value: string
  max_severity: keyof typeof severityMap
}

const { t } = getI18n().global

export const useProgramAssetsStore = defineStore('program-assets', () => {
  const pagination = usePaginationStore('program-assets')
  const { page, perPage, meta } = storeToRefs(pagination)

  const assets = ref([] as Array<Asset>)
  const loading = reactive({ fetch: false })

  const fetch = async () => {
    loading.fetch = true

    const programId = useProgramUpdateStore().getId()

    const res = await useApi<PaginationResponse<Array<Asset>>>(
      url(`v1/programs/${programId}/assets`, { page: page.value }),
    ).get()

    const data = res.data.value

    if (res.statusCode.value === 200 && data) {
      assets.value = data.result.data
      pagination.update(data.result.meta)
    }

    loading.fetch = false
  }

  const getAsset = (id: number) => assets.value.find(a => a.id === id) ?? {} as Asset

  const destroy = (id: number) => {
    return async () => {
      const programId = useProgramUpdateStore().getId()

      await useApi(`v1/programs/${programId}/assets/${id}`).delete()

      fetch()
    }
  }

  watch(page, fetch)

  return {
    assets,
    loading,
    getAsset,
    fetch,
    destroy,

    page,
    perPage,
    meta,
  }
})

export const headers = [
  { title: t('type'), key: 'type', sortable: false },
  { title: t('value'), key: 'asset_value', sortable: false },
  { title: t('max-severity'), key: 'max_severity', sortable: false },
  { title: t('actions'), key: 'actions', sortable: false },
]
