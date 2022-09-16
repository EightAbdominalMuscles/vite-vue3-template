import hasRole from './permission/hasRole'
import hasPermi from './permission/hasPermi'
import copyText from './common/copyText'
import formOnEnter from './common/formOnEnter'
export default {
  install(Vue) {
    Vue.directive('hasRole', hasRole)
    Vue.directive('hasPermi', hasPermi)
    Vue.directive('copyText', copyText)
    Vue.directive('formOnEnter', formOnEnter)
  }
}
