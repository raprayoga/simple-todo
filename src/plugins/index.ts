import router from '@/router'
import { createPinia } from 'pinia'

import type { App } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export function registerPlugins(app: App) {
  app.use(createPinia())
  app.use(router)
  app.config.globalProperties.$redirect = (page: RouteLocationRaw) => {
    router.push(page)
  }
}
