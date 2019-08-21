<style lang="less" scoped>
  .home{
    height:100vh;
  }
</style>
<template>
  <div>
    <a-spin :spinning="spinning">
      <div class="home">
        哈哈我是主页
        <a-switch v-model="spinning"></a-switch>
        <HelloWorld msg="Welcome to Your Vue.js App" v-if="solg"/>
      </div>
    </a-spin>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return{
      solg:false,
      spinning:false
    }
  },
  methods: {
    changeSpinning(){
      this.spinning = !this.spinning
    }
  },
}
</script>
