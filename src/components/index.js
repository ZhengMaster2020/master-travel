import Header from './Header.vue'
import Footer from './Footer.vue'

function commonComponents (Vue) {
  // 检查是否已经全局安装了这些组件
  if (commonComponents.install) return

  Vue.component('Header', Header)
  Vue.component('Footer', Footer)
}

export default commonComponents
