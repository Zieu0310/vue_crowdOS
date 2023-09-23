<template>
  <div class="Container">
    <div class="title">
      <img src="../../assets/img/register.png" class="register" />
    </div>
    <div class="mainBox">
      <el-select v-model="role" class="m-2" placeholder="选择角色"  size="large" style="margin-top: 4vh;">
        <el-option
          v-for="item in Role"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <input type="text" placeholder="输入账号" v-model="account" />
      <input type="password" name="" id="" placeholder="输入密码" v-model="password" />
      <input type="text" placeholder="输入名称" v-model="name" />
      <input type="text" placeholder="输入邮箱" v-model="email" />
      <input type="submit" value="确认" @click="handleRegister" class="btn" />
      <router-link to="./login"><div class="tologin">已有账号，前往登录</div></router-link>
    </div>
  </div>
</template>

<script>
  import { ElMessage } from 'element-plus';
  import { register } from '../../api/index';

  export default {
    name: 'register',
    data() {
      return {
        account: '',
        password: '',
        role: '',
        name: '',
        email: '',
        Role: [
          {
            value: 1,
            label: "公司",
          },
          {
            value: 2,
            label: "科研成员",
          },
        ],
      };
    },
    methods: {
      handleRegister() {      
        register(this.account,this.password,this.role,this.name,this.email).then((res)=>{
          console.log(res);
          ElMessage({
            message: '注册成功！',
            type: 'success',
          })
          this.$router.push('/login')
        });
      },   
    }
    
  };
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
  input[type="number"],
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
  input[type="number"]:focus,
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
  input[type="submit"],
  input[type="text"],
  input[type="number"] {
    margin-top: 4vh;
  }
  select {
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
  }
  .register{
    width: 2vw;
    height: 20vh;
  }
  .tologin{
    position: absolute;
    left: 45.5%;
    top: 30%;
    width: 20vw;
    height: 5vh;
    font-size: 1vw;
    color: slategrey;
  }
  
</style>