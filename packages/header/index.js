// 导入组件，组件必须声明 name
import BUPageHeader from './src/page-header.vue'
// 为组件提供 install 安装方法，供按需引入
BUPageHeader.install = function (Vue) {
  Vue.component(BUPageHeader.name, BUPageHeader)
}
// 默认导出组件
export default BUPageHeader
