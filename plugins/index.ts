import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  // inject into Vue instances
  interface Vue {
    
  }
}

declare module '@nuxt/types' {
  // inject into nuxtjs context
  interface Context {
   
  }
}

const myPlugin: Plugin = (context, inject) => {
  
}

export default myPlugin