import Vue from 'vue'
import { nuxtI18nHead } from './head-meta'

/** @type {Vue.PluginObject<void>} */
const plugin = {
  install (Vue) {
    if (!Vue.__nuxtI18nSeo__) {
      Vue.__nuxtI18nSeo__ = true
      Vue.mixin({
        head () {
          return nuxtI18nHead.call(this, { addDirAttribute: false, addSeoAttributes: true })
        }
      })
    }
  }
}

Vue.use(plugin)
