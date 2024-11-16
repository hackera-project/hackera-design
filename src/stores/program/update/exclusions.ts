import { type Program, useProgramUpdateStore } from '.'

const emptyForm = () => ({
  exclusion: '',
})

export const useProgramExclusionsUpdateStore = defineStore('program-update-exclusion', () => {
  const form = ref(emptyForm())
  const loading = ref(false)

  const init = (program: Program) => {
    form.value = {
      exclusion: program.exclusion,
    }
  }

  const update = async () => {
    loading.value = true
    await useProgramUpdateStore().update({ form_type: 'exclusion', ...form.value })
    loading.value = false
  }

  return {
    form,
    loading,
    init,
    update,
  }
})
