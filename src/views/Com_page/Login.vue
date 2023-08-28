<template>
    <div class="Container">
      <div class="title">
        <img src="../../assets/img/Login_text.png" alt="" />
      </div>
      <div class="mainBox">
        <input type="text" placeholder="输入账号" v-model="account" />
        <input type="password" name="" id="" placeholder="输入密码" v-model="password" />
        <input type="submit" value="登录" @click="handleLogin" class="btn" />
        <input type="submit" value="注册" @click="go_r" class="btn" />
      </div>
    </div>
    <div id="result"></div>
</template>

<script>
import { login } from '../../api/LoginRequest'
export default {
  name: 'login',
  data() {
    return {
      account: "",
      password: "",
      params: {
        account: "",
        password: "",
      },
    };
  },
  methods: {
    handleLogin() {
      login(this.params).then((res) => {
        console.log(res);
        if(res.data.success == true){
          if(res.data.role == 2){
            console.log(res);
            this.$router.push("/m_home/team");
          }else if(res.data.role == 1){
            console.log(res);
            this.$router.push("/c_home/c_task");
          }else{
            console.log(res);
            this.$router.push("/a_home/achievementjudge");
          }
        }else{
          alert("登陆失败！！请检查账号或密码");
        }
        // 这里已经调好接口了
      }).catch((err) => {
          console.log(err);
      });
     },
     beforeMount() {
      this.params.account = this.account;
      this.params.password = this.password;
      this.handleLogin();
     },
    go_r() {
      this.$router.push("/register");
    },
    }
  }
</script>

<style scoped>
  .Container {
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/img/login.png);
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    zoom: 1;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn {
    width: 8.75rem;
    height: 2.875rem;
    border-radius: 1.4375rem;
    background-color: rgba(0, 43, 255, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 1.15rem;
    border: 0;
    transition: 0.2s;
    cursor: pointer;
  }
  .btn:hover {
    width: 9rem;
    height: 3rem;
    background-color: #4176e9;
  }
  input[type="password"],
  input[type="text"] {
    width: 18rem;
    height: 2.875rem;
    opacity: 1;
    border-radius: 0.875rem;
    background: rgba(255, 255, 255, 1);
    border-color: rgba(255, 255, 255, 1);
    border: 0;
    text-align: center;
    outline: none;
    caret-color: auto;
    transition: 0.5s;
    font-size: 1rem;
    color: rgba(166, 166, 166, 1);
  }
  input[type="password"]:focus,
  input[type="text"]:focus {
    width: 22rem;
    height: 3.5rem;
    font-size: 1.5rem;
  }
  input:focus::-webkit-input-placeholder {
    color: transparent;
  }

  .mainBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6vh;
  }
  .box {
    width: 20%;
    margin-top: 15vh;
  }
  .box img {
    width: 100%;
  }
  .title {
    margin-top: 5vh;
    width: 25%;
  }
  .title img {
    width: 100%;
  }
  input[type="password"],
  input[type="submit"] {
    margin-top: 4vh;
  }
</style>
