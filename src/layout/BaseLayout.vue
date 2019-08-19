<template>
    <a-layout id="components-layout-demo-responsive">
        <a-layout-sider
            width='100'
        >
            <!-- <div class="logo" /> -->
            <AsiderMenu/>
        </a-layout-sider>
        <a-layout>
            <a-layout-header :style="{ background: '#fff', padding: 0 }" >
                <AsiderHeader/>
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px 0',background: '#fff' }">
                <AsiderConten/>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
import AsiderMenu from '@/components/AsiderMenu.vue'
import AsiderHeader from '@/components/AsiderHeader.vue'
import AsiderConten from '@/components/AsiderConten.vue'
export default {
    components:{
        AsiderMenu,
        AsiderHeader,
        AsiderConten
    },
    methods: {
       
    }
}
</script>

<style>
#components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
}
</style>
