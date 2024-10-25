const emptyPagination = () => ({
  current_page: 1,
  last_page: 1,
  from: 1,
  to: 1,
  total: 0,
})

export const usePaginationStore = (key: string) => defineStore(`pagination-${key}`, () => {
  const page = ref(1)
  const meta = ref(emptyPagination())
  const perPage = ref(15)

  const update = (data: any) => {
    meta.value = {
      current_page: data.current_page,
      last_page: data.last_page,
      from: data.from,
      to: data.to,
      total: data.total,
    }
  }

  const paginationDesc = computed(() => {
    const { t } = useI18n()

    return t('pagination-desc', [meta.value.from, meta.value.to, meta.value.total])
  })

  return {
    page,
    meta,
    perPage,
    update,
    paginationDesc,
  }
})()
