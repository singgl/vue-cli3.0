<style lang="less" scoped>
    #Menu{
        min-width: 100px;
        text-align:center;
        .ant-menu-dark{
            background: #0181c8;
            .ant-menu-item{
                padding: 0 16px !important;
                text-align: center;
                margin: 0;
                .nav-text{
                    .router-link-active{
                        color:#fff;
                        opacity: 1;
                    }
                    a{
                        color: #fff;
                        opacity: .5;
                        text-decoration : none;
                    }
                    a:hover{
                        opacity: 1;
                    }
                }
                
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
            <a-menu-item  v-for="(items, index) in menuList" :key="index+''">
                <span class="nav-text">
                    <a-icon type="user" />
                    <router-link :to='items.path'>{{items.name}}</router-link>
                </span>
            </a-menu-item>
        </a-menu>
    </div>
</template>>

<script>
    export default {
        data () {
            return {
               menuList:[]
            }
        },
        created () {
            this.menuList = this.$router.options.routes[0].children
            // console.log(this.$router.options.routes)
            // console.log(this.menuList)
        },
        mounted() {
            // console.log("this", this.menuList)
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