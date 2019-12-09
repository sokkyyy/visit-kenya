import React, { Component } from 'react';
import DestinationService from '../services/DestinationService';
import Destination from './Destination';

const destinationService = new DestinationService();

export default class DestinationList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            destinations:[],
        };
        
    }
    
    componentWillMount(){
        destinationService.getDestinations()
        .then(
            response => {
                this.setState({destinations:response.data})
            }
        )
        .catch(error => console.log(error));


    }

    render(){
        const all_destinations = this.state.destinations.map((dest)=>(
            <Destination 
                key={dest.pk}
                name={dest.name}
            />
        ));
        return(
            <div>{all_destinations}</div>
        );

    }
}