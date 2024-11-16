import { type Program, useProgramUpdateStore } from '.'

const emptyForm = () => ({
  enable: false,
  low_severity: { min: 0, max: 0 },
  medium_severity: { min: 0, max: 0 },
  high_severity: { min: 0, max: 0 },
  critical_severity: { min: 0, max: 0 },
})

export const useProgramPaymentsUpdateStore = defineStore('program-update-payments', () => {
  const form = ref(emptyForm())
  const loading = ref(false)

  const init = (program: Program) => {
    form.value = {
      ...program.payments,
    }
  }

  const update = async () => {
    loading.value = true
    await useProgramUpdateStore().update({ form_type: 'payments', payments: form.value })
    loading.value = false
  }

  return {
    form,
    loading,
    init,
    update,
  }
})
