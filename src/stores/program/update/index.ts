import { useProgramExclusionsUpdateStore } from './exclusions'
import { useProgramGeneralUpdateStore } from './general'
import type { Response } from '@/types'
import { useProgramPaymentsUpdateStore } from './payments'

interface PriceRange {
  min: number
  max: number
}

interface Payments {
  enable: boolean
  low_severity: PriceRange
  medium_severity: PriceRange
  high_severity: PriceRange
  critical_severity: PriceRange
}

export interface Program {
  id: number
  title: string
  type: string
  deadline: string | null
  description: string
  exclusion: string
  payments: Payments
}

export const useProgramUpdateStore = defineStore('program-update', () => {
  const program = ref({} as Program)
  const loading = reactive({ fetch: false })
  const currentId = ref(0)

  const setId = (id: number) => currentId.value = id

  const fetch = async () => {
    loading.fetch = true

    const res = await useApi<Response<Program>>(`v1/programs/${currentId.value}`).get()

    const data = res.data.value
    if (res.statusCode.value === 200 && data) {
      program.value = data.result

      useProgramGeneralUpdateStore().init(data.result)
      useProgramExclusionsUpdateStore().init(data.result)
      useProgramPaymentsUpdateStore().init(data.result)
    }

    loading.fetch = false
  }

  const update = async (data: any) => {
    await useApi(`v1/programs/${currentId.value}`).put(data)
  }

  return {
    program,
    loading,
    setId,
    fetch,
    update,
  }
})
