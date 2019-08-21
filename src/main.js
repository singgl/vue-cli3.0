import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Layout, Button, Menu, Icon, Breadcrumb, Spin, Switch} from 'ant-design-vue'

Vue.component(Layout.name, Layout)
const Saidr = Layout.Sider
const Header = Layout.Header
const Content = Layout.Content
// const Footer = Layout.Footer
Vue.component(Saidr.name, Saidr)
Vue.component(Header.name, Header)
Vue.component(Content.name, Content)
// Vue.component(Footer.name, Footer)
Vue.component(Button.name, Button)
Vue.component(Menu.name, Menu)
// const SubMenu = Menu.SubMenu;
// Vue.component(SubMenu.name, SubMenu)
const Item = Menu.Item
Vue.component(Item.name, Item)
Vue.component(Icon.name, Icon)
Vue.component(Breadcrumb.name, Breadcrumb)
const BreadcrumbItem = Breadcrumb.Item;
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Spin.name, Spin)
Vue.component(Switch.name, Switch)


Vue.config.productionTip = false

// 全局导航守卫
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   console.log(next)
//   next()
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
