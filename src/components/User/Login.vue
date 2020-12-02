<template>
    <div class="container">
        <el-form class="login-form" ref="form" :model="form" label-width="80px">
            <div class="form-item">
                <h2>服饰DIY后台管理</h2>
            </div>
            <div class="form-item">
                <el-input v-model="form.username" prefix-icon="el-icon-user" placeholder="请输入账号" ></el-input>
            </div>
            <div class="form-item">
                <el-input type="password" v-model="form.password" prefix-icon="el-icon-lock" placeholder="请输入密码"></el-input>
            </div>
            <div class="form-item">
                <el-button type="primary" class="submit-btn" @click="onSubmit" round>登录</el-button>
            </div>
        </el-form>
    </div>
</template>
<script>
export default {
    name: "Login",
    data(){
        return {
            form: {
                username: "",
                password: ""
            }
        };
    },
    methods: {
        onSubmit(){
            this.$router.push('/');
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "./static/scss/login.scss";
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: url("../../../static/img/login-bg.jpg") no-repeat;
        background-size: cover;
    }
    .login-form {
        box-sizing: border-box;
        width: 350px;
        padding: 0 30px 30px 30px;
        border-radius: 6px;
        background-color: rgba(255, 255, 255, 0.98);
    }
    h2 {
        font-weight: 100;
        text-align: center;
    }
    .form-item {
        padding: 8px 0;
    }
    
    .submit-btn {
        width: 100%;
    }
</style>