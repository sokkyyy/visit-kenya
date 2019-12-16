import React, {Component} from 'react';
import DestinationService from '../services/DestinationService';

const destinationService = new DestinationService();

export default class DestinationDetails extends Component {
    componentDidMount(){
        const { match: { params } } = this.props;
        destinationService.getDestination(params.id)
        .then(response => console.log(response.data))
        .catch(error => console.log(error)); 
        //console.log(params);
    }
    render(){
        return(
            <div>rr</div>
        );
    }
}