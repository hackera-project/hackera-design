import { useProgramUpdateStore } from '..'
import { useProgramAssetsStore } from '.'
import { getI18n } from '@/plugins/i18n'
import { useDrawerStore } from '@/stores/drawer'

const emptyForm = () => ({
  type: null as null | string,
  asset_value: '',
  max_severity: 1,
})

const { t } = getI18n().global

export const useProgramAssetsForm = defineStore('program-assets-form', () => {
  const form = ref(emptyForm())
  const loading = reactive({ submit: false })
  const currentId = ref(0)

  const openForm = (id = 0) => {
    currentId.value = id

    if (id === 0)
      form.value = emptyForm()
    else
      form.value = { ...useProgramAssetsStore().getAsset(id) }

    useDrawerStore().openDrawer('asset-store', id === 0 ? t('create-asset') : t('edit-asset'))
  }

  const submit = async () => {
    loading.submit = true

    const programId = useProgramUpdateStore().getId()

    const res = currentId.value === 0
      ? await useApi(`v1/programs/${programId}/assets`).post(form.value)
      : await useApi(`v1/programs/${programId}/assets/${currentId.value}`).put(form.value)

    if (res.statusCode.value === 200) {
      useDrawerStore().closeDrawer()
      useProgramAssetsStore().fetch()
    }

    loading.submit = false
  }

  return {
    form,
    loading,
    openForm,
    submit,
  }
})

export const typeOptions = [
  { title: t('url'), value: 'url' },
  { title: t('wildcard'), value: 'wildcard' },
  { title: t('google-play-id'), value: 'google-play-id' },
  { title: t('app-store-id'), value: 'app-store-id' },
  { title: t('source-code'), value: 'source-code' },
]

export const maxSeverityOptions = [
  { title: t('critical-severity'), value: 4 },
  { title: t('high-severity'), value: 3 },
  { title: t('medium-severity'), value: 2 },
  { title: t('low-severity'), value: 1 },
]
