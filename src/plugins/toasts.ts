import type { App } from 'vue'
import Toast from 'vue-toastification'

import 'vue-toastification/dist/index.css'

export default function (app: App) {
  const toastOptions = {
    transition: 'Vue-Toastification__fade',
  }
  app.use(Toast, toastOptions)
}
