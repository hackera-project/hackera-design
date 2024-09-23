import type { DefineComponent } from 'vue'

type ImportComponent = DefineComponent<object, object, any>

const components = {
  'asset-store': () => defineAsyncComponent(() => import('@/components/forms/programs/AssetStore.vue')),
}

export const useDrawerStore = defineStore('drawer', () => {
  const isOpen = ref(false)
  const title = ref('')
  const component = shallowRef(null as ImportComponent | null)

  const openDrawer = (type: keyof typeof components, newTitle = '') => {
    component.value = components[type]()
    title.value = newTitle
    isOpen.value = true
  }

  const closeDrawer = () => {
    isOpen.value = false
  }

  return {
    isOpen,
    title,
    component,
    openDrawer,
    closeDrawer,
  }
})
