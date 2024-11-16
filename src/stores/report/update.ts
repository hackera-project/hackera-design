import { useDialogStore } from '../dialog'
import { useReportStore } from './show'

const emptyForm = () => ({
  status: null,
  severity: null,
  payment: null,
  description: '',
})

export const useReportUpdateStore = defineStore('report-update', () => {
  const form = ref(emptyForm())
  const loading = reactive({ fetch: false, submit: false })

  const submit = async () => {
    loading.submit = true

    const id = useReportStore().getId()
    const res = await useApi(`v1/reports/${id}`).put(form.value)

    if (res.statusCode.value === 200) {
      useDialogStore().closeDialog()
      useReportStore().fetch()
    }

    loading.submit = false
  }

  return {
    form,
    loading,
    submit,
  }
})
