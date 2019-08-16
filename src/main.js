import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Layout, Button, Menu, Icon } from 'ant-design-vue'

Vue.component(Layout.name, Layout)
Vue.component(Button.name, Button)
Vue.component(Menu.name, Menu)
const SubMenu = Menu.SubMenu;
Vue.component(SubMenu.name, SubMenu)
const Item = Menu.Item;
Vue.component(Item.name, Item)
Vue.component(Icon.name, Icon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
