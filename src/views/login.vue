<style scoped lang='less'>
    .login{
        position: relative;
        #mydiv{
            width: 100vw;
            height: 100vh;
        }
        .form{
            position: absolute;
            top:50%;
            left:50%;
            -webkit-transform:translate(-50%,-50%);
            transform:translate(-50%,-50%);
            width: 400px;
            height: 350px;
            background-color: #fff;
            border-radius: 10px;
            text-align: left;
            .ant-form {
                padding: 30px;
            }
            .login-form-forgot {
                float: right;
            }
            .login-form-button {
                width: 100%;
                
            }
        }
    }
</style>

<template>
    <div class="login">
        <div id="mydiv"></div>
        <div class="form">
            <a-form
                id="components-form-demo-normal-login"
                :form="form"
                class="login-form"
                @submit="handleSubmit"
            >
                <a-form-item>
                    <a-input v-decorator="['userName',{ rules: [{ required: true, message: '请输入用户名!' }]}]" placeholder="用户名">
                        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-input v-decorator="['password', { rules: [{ required: true, message: '请输入密码!' }]}]"
                    type="password"
                    placeholder="密码">
                        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                </a-form-item>
                <a-form-item>
                    <a-checkbox v-decorator="[ 'remember', { valuePropName: 'checked', initialValue: true, } ]">记住密码</a-checkbox>
                    <a class="login-form-forgot" href="" > 忘记密码 </a>
                    <a-button type="primary" html-type="submit" class="login-form-button" >  登录 </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script>
import canvasInit from '@/utils/canvas-particle.js'
export default {
    data() {
        return{

        }
    },
    beforeCreate () {
        this.form = this.$form.createForm(this);
    },
    created() {
        
    },
    mounted() {
        var body = document.getElementById("mydiv")
        var config = {
		        vx: 4,	//小球x轴速度,正为右，负为左
		        vy: 4,	//小球y轴速度
		        height: 2,	//小球高宽，其实为正方形，所以不宜太大
		        width: 2,
		        count: 400,		//点个数
		        color: "248 248 255", 	    //点颜色
		        stroke: "220,220,250", 		//线条颜色
		        dist: 8000, 	//点吸附距离
		        e_dist: 20000, 	//鼠标吸附加速距离
		        max_conn: 15 	//点到点最大连接数
            }
        console.log(body)
        canvasInit(config, body);
    },

    methods: {
        handleSubmit (e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    this.$router.push('/')
                }
            });
        },
    },
}
</script>>