<style lang="less" scoped>
    #Menu{
        min-width: 100px;
        text-align:center;
        height:100vh;
        background: #0181c8;
        .ant-menu-dark{
            background: #0181c8;
            .ant-menu-item{
                padding: 0 16px !important;
                text-align: center;
            }
            .ant-menu-item-selected{
                background: #0070b1;
            }
        }
    }

</style>

<template>
    <div id="Menu">
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['0']">
            <a-menu-item v-for="(item, index) in menuList" v-bind:key="index+''">
                <!-- <a-icon v-bind:type="item.icon" /> -->
                <span class="nav-text">{{item.name}}</span>
            </a-menu-item>
        </a-menu>
    </div>
</template>>

<script>
    export default {
        data () {
            return {
               menuList:[
                   {
                       name:'home',
                       icon:'user'
                   },
                   {
                       name:'about',
                       icon:'upload'
                   },
                   {
                       name:'form',
                       icon:'video-camera'
                   }
               ]
            }
        },

        methods: {
            onOpenChange (openKeys) {
                console.log(openKeys)
                const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
                console.log(latestOpenKey)
            }
        }
    }

</script>