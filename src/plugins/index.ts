import router from '@/router'
import { createPinia } from 'pinia'

import type { App } from 'vue'

export function registerPlugins(app: App) {
  app.use(createPinia())
  app.use(router)
}
