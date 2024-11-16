import { router } from '@/plugins/1.router'
import type { Response } from '@/types'

type Role = 'hacker' | 'company-admin' | 'company-employee'

interface User {
  id: number
  name: string
  username: string
  email: string
  role: Role
  logo: string
}

export const useUserStore = defineStore('user-store', () => {
  const user = ref<User>({} as User)

  const setUser = (token: string) => {
    localStorage.setItem('api-token', token)
  }

  const fetch = async () => {
    const res = await useApi<Response<User>>('v1/auth/me').get()

    if (res.response.value?.status === 200)
      user.value = res.data.value?.result ?? {} as User
  }

  const logout = async () => {
    const res = await useApi('v1/auth/logout').post()

    if (res.statusCode.value === 200) {
      localStorage.removeItem('api-token')
      router.push('/login')
    }
  }

  return {
    user,
    setUser,
    fetch,
    logout,
  }
})
