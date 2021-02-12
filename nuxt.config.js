export default {
    target: 'static',
    ssr: false,
    components: true,
    env: {
      testName: process.env.TEST_NAME || 'Beispieltest'
    },
    router: {
      base: process.env.NODE_ENV === 'github' ? '/test/' : '/',
    },
    generate: {
      fallback: '404.html'
    },
    plugins: ['~/plugins/index'],
    build: {
      parallel: true,
      terser: true,
      sourceMap: true,
      typescript: {
        typeCheck: {
          eslint: true
        }
      }
    },
    buildModules: [
      '@nuxt/typescript-build',
      '@nuxtjs/color-mode'
    ],
    css: ['@/assets/main.css'],
    colorMode: {
      preference: 'light', // default value of $colorMode.preference
      hid: 'nuxt-color-mode-script',
      globalName: '__NUXT_COLOR_MODE__',
      componentName: 'ColorScheme',
      classPrefix: '',
      classSuffix: '-mode',
      storageKey: 'nuxt-color-mode'
    },
    modules: [
      ['nuxt-buefy', { css: true, materialDesignIcons: false }],
    ],
    head: {
      htmlAttrs: {
        lang: 'de'
      },
      title: 'Schülerforschungszentrum Saarlouis',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ]
    },
  }