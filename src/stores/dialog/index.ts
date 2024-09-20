import type { DefineComponent } from 'vue'

type ImportComponent = DefineComponent<object, object, any>

const components = {
  'destroy-dialog': () => defineAsyncComponent(() => import('@/components/DestroyDialog.vue')),
  'create-program-form': () => defineAsyncComponent(() => import('@/components/forms/programs/CreateProgram.vue')),
}

export const useDialogStore = defineStore('dialog', () => {
  const isOpen = ref(false)
  const width = ref('80%')
  const component = shallowRef(null as ImportComponent | null)

  const openDialog = (type: keyof typeof components, newWidth = '80%') => {
    component.value = components[type]()
    width.value = newWidth
    isOpen.value = true
  }

  const closeDialog = () => {
    isOpen.value = false
  }

  return {
    isOpen,
    width,
    component,
    openDialog,
    closeDialog,
  }
})
