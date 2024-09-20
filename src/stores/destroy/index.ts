import { useDialogStore } from '../dialog'

export const useDestroyStore = defineStore('destroy', () => {
  const resource = ref('')
  const name = ref('')
  const destroy = ref(async () => {})
  const loading = ref(false)

  const openDialog = (newResouce: string, newName: string, destroyAction: () => Promise<void>) => {
    resource.value = newResouce
    name.value = newName
    destroy.value = destroyAction

    useDialogStore().openDialog('destroy-dialog', '600px')
  }

  const remove = async () => {
    loading.value = true

    await destroy.value()

    loading.value = false

    useDialogStore().closeDialog()
  }

  return {
    resource,
    name,
    loading,
    destroy,
    remove,
    openDialog,
  }
})
