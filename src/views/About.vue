<template>
  <div class="about">
    <AsiderMenu/>
  </div>
</template>

<script>
import AsiderMenu from '@/components/AsiderMenu.vue'
export default {
  components: {
    AsiderMenu
  }
}
</script>

<style lang="less" scoped>
  .about{
    display: flex;
  }
</style>
