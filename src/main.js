import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Layout, Button, Menu, Icon, Spin, Switch, Form, Breadcrumb} from 'ant-design-vue'

Vue.component(Layout.name, Layout)
Vue.component(Form.name, Form)
Vue.component(Icon.name, Icon)
Vue.component(Spin.name, Spin)
Vue.component(Switch.name, Switch)
Vue.component(Button.name, Button)
Vue.component(Breadcrumb.name, Breadcrumb)
const bItem = Breadcrumb.Item
Vue.component(bItem.name, bItem)

const Saidr = Layout.Sider
const Header = Layout.Header
const Content = Layout.Content
Vue.component(Saidr.name, Saidr)
Vue.component(Header.name, Header)
Vue.component(Content.name, Content)

Vue.component(Menu.name, Menu)
const SubMenu = Menu.SubMenu;
Vue.component(SubMenu.name, SubMenu)
const Item = Menu.Item
Vue.component(Item.name, Item)



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
