import axios from 'axios';

export default{
    methods: {
        fetchData() {      
          axios.get('/login')      
            .then(response => {      
              console.log(response.data)      
            })      
            .catch(error => {      
              console.error(error)      
            })      
        }      
      }
}