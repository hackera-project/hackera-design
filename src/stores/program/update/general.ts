import { type Program, useProgramUpdateStore } from '.'

const emptyForm = () => ({
  deadline: null as string | null,
  type: null as string | null,
  description: '',
})

export const useProgramGeneralUpdateStore = defineStore('program-update-general', () => {
  const form = ref(emptyForm())
  const loading = ref(false)

  const init = (program: Program) => {
    form.value = {
      description: program.description,
      type: program.type,
      deadline: program.deadline,
    }
  }

  const update = async () => {
    loading.value = true
    await useProgramUpdateStore().update({ form_type: 'general', ...form.value })
    loading.value = false
  }

  return {
    form,
    loading,
    init,
    update,
  }
})
