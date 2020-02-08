import axios from 'axios';


const apiUrl = 'http://localhost:8000/api/destinations/';
//Place in .env file during refactor
const anonymousToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImFub255bW91cyIsImV4cCI6MTU3ODM4ODI3OCwiZW1haWwiOiJhbm9ueW1vdXNAZ21haWwuY29tIn0.Wmrsg8LB2aM0ZvkDE1yDdsmuWX4Wgja6z0MQWFzK6fI"
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