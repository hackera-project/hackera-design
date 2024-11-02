export const useMessageBoxStore = defineStore('message-box-store', () => {
  const isOpen = ref(false)
  const content = ref('')
  const loading = ref(false)
  let callback = (_: string) => new Promise(() => {})

  const openMessageBox = (newCallback: (c: string) => Promise<any>) => {
    callback = newCallback
    isOpen.value = true
  }

  const submit = async () => {
    loading.value = true
    await callback(content.value)
    isOpen.value =false
    loading.value = false
  }

  return {
    isOpen,
    loading,
    content,
    openMessageBox,
    submit,
  }
})
