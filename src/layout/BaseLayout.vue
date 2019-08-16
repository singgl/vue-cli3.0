<template>
    <a-layout id="components-layout-demo-responsive">
        <a-layout-sider
            breakpoint="lg"
            collapsedWidth="0"
            @collapse="onCollapse"
            @breakpoint="onBreakpoint"
        >
            <div class="logo" />
            <sidermenu/>
        </a-layout-sider>
        <a-layout>
            <a-layout-header :style="{ background: '#fff', padding: 0 }" >
                <sidermenu/>
            </a-layout-header>
            <a-layout-content :style="{ margin: '24px 16px 0' }">
                <!-- <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
                    content
                </div> -->
                <conten/>
            </a-layout-content>
            <!-- <a-layout-footer style="textAlign: center">
                Ant Design ©2018 Created by Ant UED
            </a-layout-footer> -->
        </a-layout>
    </a-layout>
</template>

<script>
import sidermenu from '@/components/Sider.vue'
import header from '@/components/Header.vue'
import conten from '@/components/Conten.vue'
export default {
    components:{
        sidermenu,
        header,
        conten
    },
    methods: {
        onCollapse(collapsed, type) {
            console.log(collapsed, type);
        },
        onBreakpoint(broken) {
            console.log(broken);
        }
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
