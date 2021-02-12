import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  // inject into Vue instances
  interface Vue {
    $writeToStorage(key: string, value: object): void
    $readFromStorage(key: string, defaultValue: any): any
  }
}

declare module '@nuxt/types' {
  // inject into nuxtjs context
  interface Context {

  }
}

const myPlugin: Plugin = (context, inject) => {
  inject('writeToStorage', (key: string, value: object): void => {
    localStorage.setItem(key, btoa(JSON.stringify(value)));
  })
  inject('readFromStorage', (key: string, defaultValue: any): any => {
    return JSON.parse(atob(localStorage.getItem(key) || btoa(JSON.stringify(defaultValue))))
  })
}

export default myPlugin