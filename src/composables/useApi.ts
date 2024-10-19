import { createFetch } from '@vueuse/core'
import { useToast } from 'vue-toastification'
import { destr } from 'destr'
import { themeConfig } from '@themeConfig'
import { cookieRef } from '@layouts/stores/config'
import type { Response } from '@/types'

export const useApi = createFetch({
  baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
  fetchOptions: {
    headers: {
      Accept: 'application/json',
    },
  },
  options: {
    refetch: true,
    async beforeFetch({ options }) {
      const accessToken = localStorage.getItem('api-token')

      if (accessToken) {
        options.headers = {
          ...options.headers,
          'Authorization': `Bearer ${accessToken}`,
          'Accept-Language': cookieRef('language', themeConfig.app.i18n.defaultLocale).value,
        }
      }

      return { options }
    },
    afterFetch(ctx) {
      const { data, response } = ctx

      // Parse data if it's JSON

      let parsedData = null
      try {
        parsedData = destr<Response<any>>(data)
      }
      catch (error) {
        console.error(error)
      }

      if (parsedData?.message)
        useToast().success(parsedData.message)

      return { data: parsedData, response }
    },
    onFetchError(ctx) {
      const { data, response } = ctx

      if (response?.status === 401)
        useRouter().push('/login')

      const parsedData = destr<Response<any>>(data)
      if (parsedData?.message)
        useToast().error(parsedData.message)

      return ctx
    },
  },
})
