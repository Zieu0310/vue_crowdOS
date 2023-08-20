import axios from 'axios';

export default{
    methods: {
        loginData() {      
          axios.post('/login',{
            account: '',
            password: ''
          })      
            .then(response => {      
              console.log(response.data)      
            })      
            .catch(error => {      
              console.error(error)      
            })      
        }      
      }
}