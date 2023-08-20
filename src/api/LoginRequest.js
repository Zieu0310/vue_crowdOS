import axios from 'axios';

export default{
    methods: {
        loginData() {      
          axios.post('/login',{
            account: '',
            password: ''
          })      
            .then(response => {      
              console.log("登录成功")      
            })      
            .catch(error => {      
              console.error(error)      
            })      
        },
        go_c() {
          this.$router.push("/c_home/c_task");
        },
        go_m() {
          this.$router.push("/m_home/team");        
        },
        go_a() {
          this.$router.push("/a_home/achievementjudge")
        },
        go_r() {
          this.$router.push("/register")
        },       
      }
}