<template>
    <div id="login">
        <div class="bg" style="height: 40%;background-color:#333;">
            <span class="register">注册</span>
            <div class="logo">
                <i class="iconfont icon-zhanghaodenglu"></i>
                <span class="text">登录</span>
            </div>

        </div>
        <div class="form_box">
            <div class="form_item">
                <i class="iconfont icon-yonghuming"></i>
                <input type="text" placeholder="请输入用户名" v-model="form.username">
            </div>
            <div class="form_item">
                <i class="iconfont icon-mima"></i>
                <input type="text" placeholder="请输入密码" v-model="form.password">
            </div>
        </div>
        <div class="optional">
            <div><input type="checkbox"><span>自动登录</span></div>
            <div><span>忘记密码？</span></div>
        </div>
        <div class="btn_box">
            <a class="btn" @click="login">登录</a>
        </div>
    </div>
</template>

<script>
  import {getToken} from "../network/utils";
  import Qs from 'qs'

  export default {
    name: "Login.vue",
    data() {
      return {
        form: {
          username: '',
          password: '',
          client_id: 'activiti',
          grant_type: 'password'
        }
      }
    },
    created() {
    },
    methods: {
      login() {
        /** 获取 token **/
        getToken(Qs.stringify(this.form)).then(res => {
          const token = res.data.access_token
          console.log(token)
          localStorage.setItem("token", token)
        })
        if (localStorage.getItem('token')) {
          this.$router.push({name: 'home'})
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    #login {
        width: 100vw;
        height: 100vh;
        background-color: #fff;
        position: relative;
        z-index: 999;

        .bg {
            background: url(~assets/img/login/bg.jpg) center center;
            background-size: cover;
            position: relative;
            background-position: 0 1px;

            .register {
                font-size: 1.2rem;
                color: #ffffff;
                position: absolute;
                right: 20px;
                top: 20px;
            }

            .logo {
                position: absolute;
                width: 10rem;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                height: 10rem;
                line-height: 10rem;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.4);

                i {
                    font-size: 4rem;
                    color: #ffffff;
                }

                .text {
                    font-size: 2rem;
                    color: #ffffff;
                    position: absolute;
                    bottom: -70%;
                    left: 50%;
                    transform: translateX(-50%);
                }
            }
        }

        .form_box {
            text-align: center;
            width: 100%;
            margin-top: 5rem;
            padding: 0 30px;

            .form_item {
                height: 3rem;
                position: relative;
                margin-bottom: 30px;

                &:nth-child(2) {
                    margin: 0;
                }

                .iconfont {
                    position: absolute;
                    left: 0;
                    top: 50%;
                    color: var(--dark);
                    transform: translateY(-50%);
                    font-size: 1.5rem;
                }


                input {
                    font-size: 1rem;
                    color: var(--dark);
                    width: 100%;
                    height: 100%;
                    border: none;
                    background-color: #fff;
                    padding: 0 2rem;
                    border-bottom: 1px solid var(--gray);
                    outline: none;
                }
            }

        }

        .optional {
            display: flex;
            justify-content: space-between;
            padding: 0 30px;
            margin-top: 20px;

            div {
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }

        .btn_box {
            padding: 0 30px;
            margin-top: 20px;

            .btn {
                display: block;
                height: 3rem;
                line-height: 3rem;
                text-align: center;
                font-size: 1.5rem;
                color: #ffffff;
                background-color: var(--primary);
                border-radius: 8px;
            }
        }
    }
</style>