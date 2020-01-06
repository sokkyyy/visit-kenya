import axios from 'axios';


const apiUrl = 'http://localhost:8000/api/destinations/';
//Place in .env file during refactor
const anonymousToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMiwidXNlcm5hbWUiOiJhbm9ueW1vdXMiLCJleHAiOjE1NzgwNTA1MzUsImVtYWlsIjoiYW5vbnltb3VzQGdtYWlsLmNvbSJ9.7SLnzLiXaL6QE03-dvI0HeU4f9FCmNF29kuOK2dBv70"
const userToken = localStorage.getItem('token');


export default class DestinationService {

    getDestinations(){
        return axios.get(apiUrl, {
            headers:{ Authorization: `JWT ${userToken ? userToken : anonymousToken}` }
        });
    }
    getDestination(destinationId){
        const destUrl = `${apiUrl}destination/${destinationId}/`;
        return axios.get(destUrl, {
            headers:{ Authorization: `JWT ${userToken ? userToken : anonymousToken}` }
        });
    }
    getDestinationsCategory(category){
        const categoryUrl = `${apiUrl}category/${category}/`;
        return axios.get(categoryUrl, {
            headers:{ Authorization: `JWT ${userToken ? userToken : anonymousToken}` }
        });
    }

}