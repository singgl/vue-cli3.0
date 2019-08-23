<style lang="less" scoped>
    #Menu{
        text-align:center;
    }
</style>

<template>
    <div id="Menu">
        <a-menu
            :defaultSelectedKeys="['0']"
            :defaultOpenKeys="['3']"
            @click="opents"
        >
            
        </a-menu>
    </div>
</template>
<script>
import siderItem from './SiderItem'
export default {
    components:{
        siderItem
    },
    data () {
        return {
            menuList:[],
            key:'0',
            keys:['']
        }
    },
    created () {
        this.menuList = this.$router.options.routes[0].children
        console.log(this.$router)
    },
    methods: {
        opents() {
            console.log("哈哈哈")
        },
    },
}

</script>