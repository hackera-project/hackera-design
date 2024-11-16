import { useProgramsStore } from '.'
import { useDialogStore } from '../dialog'

const emptyForm = () => ({
  form_type: 'create',
  title: '',
})

export const useProgramForm = defineStore('program-form', () => {
  const form = ref(emptyForm())
  const loading = reactive({ submit: false })

  const submit = async () => {
    loading.submit = true

    const res = await useApi('v1/programs').post(form.value)

    if (res.statusCode.value === 200) {
      useDialogStore().closeDialog()
      useProgramsStore().fetch()
      form.value = emptyForm()
    }

    loading.submit = false
  }

  const openForm = () => {
    useDialogStore().openDialog('create-program-form', '600px')
  }

  return {
    form,
    loading,
    openForm,
    submit,
  }
})
