<template>
  <div class="container">
    <div class="regist-bgc">
      <img
        src="@/assets/Login-page_Illustration.png"
        alt=""
        style="widht: 100%"
      />
      <div class="regist-bgc-b"></div>
    </div>
    <div class="regist">
      <div class="title1"><p>智慧农业环境监测系统</p></div>
      <div class="regist-form">
        <div class="title2"><p>智慧农业后台管理系统注册</p></div>
        <div class="form">
          <van-form @submit="registClick">
            <van-cell-group inset>
              <van-field
                v-model="username"
                name="userName"
                label="用户名"
                placeholder="请输入用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
              />
              <van-field
                v-model="password"
                type="password"
                name="passWord"
                label="密码"
                placeholder="请输入密码"
                :rules="[
                  { required: true, message: '请填写密码' },
                  {
                    validator: passVerify,
                    message: '请输入6~12位由字母和数字组成密码',
                  },
                ]"
              />
              <van-field
                v-model="password2"
                type="password"
                name="password2"
                label="确认密码"
                placeholder="请再次输入密码"
                :rules="[
                  { required: true, message: '请填写密码' },
                  {
                    validator: passConfirm,
                    message: '两次密码不一致',
                  },
                ]"
              />
            </van-cell-group>
            <div style="margin: 16px">
              <van-button round block type="primary" native-type="submit">
                注册
              </van-button>
            </div>
          </van-form>
        </div>
        <div class="footer">
          <p @click="$router.push('login')">已有账号，去登陆!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Field, CellGroup, Form, Notify } from "vant";
import { regist } from "@/api/user.js";
import { reactive } from "@vue/reactivity";
import { ref } from "vue";
import router from "@/router/index.js";
export default {
  name: "regist",
  setup() {
    const username = ref("");
    const password = ref("");
    const password2 = ref("");
    const passVerify = (val) => /^[0-9a-zA-Z]{6,12}$/.test(val);
    const passConfirm = () => password2.value === password.value;
    const registClick = async (values) => {
      console.log(values);
      const msg = await regist({
        passWord: password.value,
        userName: username.value,
      });
      let code = msg.data.code;
      console.log(code);
      if (code === "1") {
        Notify({ type: "success", message: "注册成功" });
        router.push("login");
      } else if (code === "3") {
        Notify({ type: "danger", message: "用户名存在" });
      }
    };
    return {
      username,
      password,
      password2,
      passVerify,
      passConfirm,
      registClick,
    };
  },
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Form.name]: Form,
  },
};
</script>

<style lang="scss" scoped>
.container {
  //   background: url("@/assets/Login-page_Illustration.png");
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  overflow: hidden;
  background-image: linear-gradient(to right, #3194f9, #59c0eb);
  .regist-bgc {
    position: absolute;
    left: -50%;
    bottom: -40%;
    width: 100%;
    height: 100%;
    img {
      position: absolute;
      top: 150px;
      width: 100%;
    }
    .regist-bgc-b {
      width: 200%;
      height: 120%;
      border-radius: 50%;
      background-color: #ccf5ff;
    }
  }
  .regist {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    padding: 70px;
    border-radius: 40px;
    width: 80vw;

    background-color: #fff;
    z-index: 999;
    .title1 {
      font-size: 40px;
      width: 100%;
      margin-bottom: 75px;
      text-align: right;
      p {
        font-weight: 800;
        background-image: -webkit-linear-gradient(
          bottom,
          #167ee7,
          #59c0eb,
          #59c0eb
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .regist-form {
      font-weight: 400;
      font-size: 40px;
      color: #4d657b;
      .form {
        margin: 70px 0;
        .van-button--primary {
          background-image: linear-gradient(#59c0eb, #0c7beb);
        }
      }
      .footer {
        display: flex;
        justify-content: space-evenly;
        font-size: 20px;
        p {
          color: #167ee7;
        }
      }
    }
  }
}
.van-form {
  ::v-deep .van-cell {
    padding: 0.8667rem;
    font-size: 35px;
    line-height: 50px;
    .van-field__label {
      width: 4rem;
    }
  }
  ::v-deep .van-button {
    height: 2.17333rem;
    font-size: 30px;
  }
}
</style>