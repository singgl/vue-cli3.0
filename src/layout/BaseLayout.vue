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
            <a-breadcrumb style="margin: 16px; text-align: left;">
                <a-breadcrumb-item>Home</a-breadcrumb-item>
                <a-breadcrumb-item>List</a-breadcrumb-item>
                <a-breadcrumb-item>App</a-breadcrumb-item>
            </a-breadcrumb>
            <a-layout-content :style="{ margin: '0px 16px 0',background: '#fff' }">
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

<style lang="less" scoped>
    .ant-layout{
        height:100vh;
        .ant-layout-sider{
            background: #0181c8;
        }
    }
</style>