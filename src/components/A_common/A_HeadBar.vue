<script>
  // const Tag_a = document.querySelectorAll(".ShowBorder a");
  // while (Tag_a.active == true) {
  //   Tag_a.active
  // }

  export default {
    methods: {
      showLogoutConfirmation() {
        // 使用 Element UI 的 MessageBox 组件来显示确认提示
        this.$confirm("确定要退出登录吗？", "退出登录", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          customClass: "logout-message-box", // 添加自定义样式类名
          customTop: "20vh", // 自定义距离顶部的高度
        })
          .then(() => {
            // 用户点击了"确定"按钮，执行退出登录操作
            this.exit();
          })
          .catch(() => {
            // 用户点击了"取消"按钮，不执行任何操作
          });
      },
      exit() {
        // 在这里处理退出登录逻辑
        this.$router.push("/");
      },
      active1() {
        this.Show1 = true;
        this.Show2 = false;
      },
      active2() {
        this.Show1 = false;
        this.Show2 = true;
      },
    },
    mounted(){
      this.account = localStorage.getItem("account");
      this.name = localStorage.getItem("name");
    },
    data() {
      return {
        Show1: true,
        Show2: false,
        account: "",
        name: "",
      };
    },
  };
</script>

<template>
  <div>
    <div class="Header">
      <div class="to_quit">
        <div class="quit" @click="showLogoutConfirmation">退出</div>
      </div>
        <div class="LeftEntry">
            <div class="box">
             <div
               class="ShowBorder"
               :class="{ active_: Show1 }"
               @click="active1()"
             >
               <router-link
                 :to="{ name: 'achievementjudge' }"
                 custom
                 v-slot="{ navigate, isActive }"
               >
                 <li
                   @click="navigate"
                   @keypress.enter="navigate"
                   :class="{ active: isActive }"
                   role="link"
                 >
                   <p :class="{ active_: Show1 }" @click="active1()">成果审核</p>
                 </li>
               </router-link>
             </div>
            </div>
            <div class="box">
             <div
               class="ShowBorder"
               :class="{ active_: Show2 }"
               @click="active2()"
             >
               <router-link
                 :to="{ name: 'taskjudge' }"
                 custom
                 v-slot="{ navigate, isActive }"
               >
                 <li
                   @click="navigate"
                   @keypress.enter="navigate"
                   :class="{ active: isActive }"
                   role="link"
                 >
                   <p :class="{ active_: Show2 }" @click="active2()">需求审核</p>
                 </li></router-link
               >
             </div>
           </div>
        </div>
        <div class="right-entry">
        <div class="profile">
          <router-link to="./a_information"><img src="../../assets/img/h-icon-a.png" alt="" /></router-link>
        </div>
        <div class="PersonalData">
          <div class="name">{{ name }}</div>
          <div class="number">{{ account }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .Header {
    box-sizing: border-box;
    position: relative;
    width: 100vw;
    height: 9.25vh;
    background-color: rgba(255, 255, 255, 1);
    border-bottom: 0.1px solid rgba(112, 112, 112, 1);
  }
  .left-entry {
    position: absolute;
    top: 0%;
    left: 0;
    width: 25%;
    height: 100%;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-evenly;
    /* border: 2px solid #a33232; */
  }
  .center-img,
  .right-img {
    /* border: 2px solid #a33232; */
    height: 40%;
    /* min-width: 35%;
  max-width: 95%; */
  }
  .left-img {
    margin-right: -15px;
    /* border: 2px solid #a33232; */
    height: 40%;
  }
  .left-entry img {
    height: 100%;
  }
  .left-img img {
    object-fit: cover;
    aspect-ratio: 1/1;
  }
  .right-entry {
    position: absolute;
    right: 0;
    top: 0;
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .PersonalData {
    position: absolute;
    right: 17%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile img {
    height: 65%;
    width: 65%;
  }
  .name {
    font-size: 1vw;
    font-weight: 400;
    letter-spacing: 2px;
    line-height: 100%;
    color: rgba(0, 0, 0, 1);
    vertical-align: top;
    margin-bottom: 1vh;
  }
  .number {
    text-align: center;
    line-height: 100%;
    border-radius: 2px;
    background-color: rgba(0, 43, 255, 1);
    font-size: 0.5vw;
    font-weight: 700;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
    vertical-align: top;
  }
  .LeftEntry {
    position: absolute;
    left: 55%;
    height: 100%;
    width: 30%;
    /* background-color: #ecd1d1; */
    box-sizing: border-box;
    display: flex;
  }
  .box {
    box-sizing: border-box;
    height: 100%;
    width: 33.3%;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
  }
  .ShowBorder {
    position: relative;
    width: 100%;
    height: 100%;
    /* background-color: #98d4d8; */
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .ShowBorder:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 25%;
    height: 4px;
    background: linear-gradient(
      130.93deg,
      rgba(128, 255, 247, 1) 0%,
      rgba(0, 43, 255, 1) 100%
    );
    transition: all 0.5s;
  }
  .box :hover.ShowBorder:before {
    bottom: 0;
    left: 38%;
    width: 25%;
  }
  .box :hover {
    color: black;
  }

  .box div {
    color: rgba(128, 128, 128, 1);
    font-size: 1.1vw;
    letter-spacing: 0px;
    text-decoration: none;
  }
  .box div p {
    cursor: pointer;
  }
  /* 配置点击状态 */
  .active_ {
    color: black;
    background-color: #f5f5f5;
  }
  .to_quit{
    position: absolute;
    left: 0;
    width: 20%;
    height: 100%;
  }
  .quit{
    position: absolute;
    left: 30%;
    top: 30%;
    width: 100%;
    height: 100%;
  }
</style>
