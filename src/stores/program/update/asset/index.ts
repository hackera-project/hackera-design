import { useProgramUpdateStore } from '..'
import type { Response } from '@/types'
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
  const assets = ref([] as Array<Asset>)
  const loading = reactive({ fetch: false })

  const assetsOption = computed(() => {
    return assets.value.map(a => ({
      id: a.id,
      title: `${t(a.type)} (${a.asset_value})`,
    }))
  })

  const fetch = async () => {
    loading.fetch = true

    const programId = useProgramUpdateStore().getId()

    const res = await useApi<Response<Array<Asset>>>(`v1/programs/${programId}/assets`).get()

    const data = res.data.value

    if (res.statusCode.value === 200 && data)
      assets.value = data.result

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

  return {
    assets,
    assetsOption,
    loading,
    getAsset,
    fetch,
    destroy,
  }
})

export const headers = [
  { title: t('type'), key: 'type', sortable: false },
  { title: t('value'), key: 'asset_value', sortable: false },
  { title: t('max-severity'), key: 'max_severity', sortable: false },
  { title: t('actions'), key: 'actions', sortable: false },
]
