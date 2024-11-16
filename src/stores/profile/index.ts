import { useUserStore } from '../auth/me'
import type { Response } from '@/types'

interface Profile {
  id: number
  name: string
  username: string
  email: string
  website: string
  logo: string
  linkedin: string
  x: string
  github: string
  gitlab: string
}

const emptyGeneralForm = () => ({
  name: '',
  username: '',
  email: '',
  website: '',
  logo: '',
  logoFile: null,
})

const emptySocialForm = () => ({
  linkedin: '',
  x: '',
  github: '',
  gitlab: '',
})

export const useProfileStore = defineStore('profile-store', () => {
  const generalForm = ref(emptyGeneralForm())
  const socialForm = ref(emptySocialForm())
  const loading = reactive({ general: false, social: false })

  const tempImage = computed(() => {
    if (generalForm.value.logoFile)
      return URL.createObjectURL(generalForm.value.logoFile)

    return null
  })

  const fetch = async () => {
    const res = await useApi<Response<Profile>>('v1/profile').get()

    const data = res.data.value
    if (res.statusCode.value === 200 && data) {
      generalForm.value = {
        name: data.result.name,
        username: data.result.username,
        email: data.result.email,
        website: data.result.website,
        logo: data.result.logo,
        logoFile: null,
      }

      socialForm.value = {
        linkedin: data.result.linkedin,
        x: data.result.x,
        github: data.result.github,
        gitlab: data.result.gitlab,
      }
    }
  }

  const submit = (form: object | FormData) => {
    return useApi('v1/profile').post(form)
  }

  const submitGeneral = async () => {
    loading.general = true

    const form = new FormData()

    form.append('type', 'general')
    form.append('_method', 'PUT')

    for (const k in generalForm.value) {
      if (k !== 'logoFile' || generalForm.value.logoFile)
        form.append(k, generalForm.value[k])
    }

    await submit(form)

    useUserStore().fetch()
    loading.general = false
  }

  const submitSocial = async () => {
    loading.social = true

    await submit({
      type: 'social',
      _method: 'PUT',
      social_media: socialForm.value,
    })

    loading.social = false
  }

  return {
    generalForm,
    socialForm,
    tempImage,
    loading,
    fetch,
    submitGeneral,
    submitSocial,
  }
})
