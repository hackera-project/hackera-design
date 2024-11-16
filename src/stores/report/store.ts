import { useProgramUpdateStore } from '../program/update'

const emptyForm = () => ({
  program_id: null as number | null,
  asset_id: null as number | null,
  title: '',
  description: '',
  reproduce_steps: '',
  cve: null,
  cwe: null,
  severity: null,
})

export const useReportForm = defineStore('report-form', () => {
  const form = ref(emptyForm())
  const loading = reactive({ submit: false })

  const submit = async () => {
    loading.submit = true

    form.value.program_id = useProgramUpdateStore().getId()

    const res = useApi('v1/reports').post(form.value)

    loading.submit = false
  }

  return {
    form,
    loading,
    submit,
  }
})
