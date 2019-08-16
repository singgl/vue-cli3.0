<style lang="less" scoped>
    #Menu{
        min-width: 200px;;
    }
</style>

<template>
    <div id="Menu">
        <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']" style="width:200px; text-align:left; height:100vh;">
            <a-menu-item key="1">
                <a-icon type="user" />
                <span class="nav-text">nav 1</span>
            </a-menu-item>
                <a-menu-item key="2">
                <a-icon type="video-camera" />
                <span class="nav-text">nav 2</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="upload" />
                <span class="nav-text">nav 3</span>
            </a-menu-item>
            <a-menu-item key="4">
                <a-icon type="user" />
                <span class="nav-text">nav 4</span>
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