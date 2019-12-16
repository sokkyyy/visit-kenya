import axios from 'axios';


const apiUrl = 'http://localhost:8000/api/destinations/';

export default class DestinationService {

    getDestinations(){
        return axios.get(apiUrl, {
            headers:{ Authorization: `JWT ${localStorage.getItem('token')}` }
        });
    }
    getDestination(destinationId){
        const destUrl = `${apiUrl}destination/${destinationId}/`;
        return axios.get(destUrl, {
            headers:{ Authorization: `JWT ${localStorage.getItem('token')}` }
        });
    }

}