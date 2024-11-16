export const useMyCompanyStore = defineStore('my-company-store', () => {
  const company = ref()
  const loading = reactive({ fetch: false, submit: false })

  const fetch = async () => {
    
  }

  return {
    company,
    loading,
  }
})
