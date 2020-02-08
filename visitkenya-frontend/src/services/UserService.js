import axios from 'axios';

// const APIURL = 'http://localhost:8000/api/'; //DEV


const APIURL =  'https://visitkenya.herokuapp.com/api/'; //PROD

export default class UserService {


    registerUser(user){
        const url = `${APIURL}register/`;
        return axios.post(url,user);
    }

    loginUser(data){
        const url = `${APIURL}token-auth/`;
        return axios.post(url,data);
    }

    getUser(){
        const url = `${APIURL}current_user/`;

        return axios.get(url,{
            headers:{ Authorization: `JWT ${localStorage.getItem('token')}` }
        });
    }
}
