<template>
    <div class="loginImg">
        <div class="loginPage">
            <div class="title">云平台</div>
            <div class="name">
                <input type="text" placeholder="请输入用户名" v-model="userName">
            </div>
            <div class="password">
                <input type="password" placeholder="请输入密码" v-model="password">
            </div>
            <div class="btn">
                <button type="button" class="el-button el-button--primary is-round" @click="handelLogin">
                    <span>登录</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                userName: 'admin',
                password: '123456',
            }
        },
        methods: {
            handelLogin() {
                if (this.userName === 'admin' && this.password === '123456') {
                    this.$router.push({
                        path: '/frame'
                    })
                } else {
                    this.$message({
                        message: '用户或密码不正确',
                        type: "error"
                    });
                }
            }
        }
    }
</script>
<style scoped>
    .loginImg {
        width: 100%;
        height: 100%;
        background-image: url(~@/assets/image/2.jpg);
        background-size: 100% 100%;
        background-color: #fcc;
        position: relative;
    }

    .loginPage {
        position: absolute;
        left: 50%;
        top: 52%;
        width: 430px;
        height: 430px;
        margin-left: -210px;
        margin-top: -230px;
        z-index: 1;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 2px 1px 6px 0 rgba(0, 0, 0, .2);
    }

    /* .form {
        width: 100%;
        height: 100%;
    } */

    .title {
        padding: 60px 0 25px;
        text-align: center;
        font-size: 24px;
        color: #2c3e50;
        margin-right: 28px;
    }

    .name input,
    .password input {
        width: 80%;
        padding: 20px 25px;
        font-size: 14px;
        border: 0 none;
        border-bottom: 1px solid #ebeef5;
        color: #2c3e50;
        margin-left: 20px;
    }

    .name input::-webkit-input-placeholder,
    .password input::-webkit-input-placeholder {
        color: #c0c4cc;
    }

    .btn {
        padding-top: 50px;
        text-align: center;
    }

    .btn .el-button.is-round {
        padding: 12px 0;
        width: 250px;
    }

    .company-mes {
        padding-top: 20px;
        text-align: center;
        font-size: 14px;
        color: #2c3e50;
    }
</style>