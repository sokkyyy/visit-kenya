import React, { Component } from 'react';
import DestinationService from '../services/DestinationService';
import Destination from './Destination';
import '../css/DestList.css';


const destinationService = new DestinationService();

export default class DestinationList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            destinations:[],
            loading:true,
        };
        
    }
    
    componentDidMount(){
        destinationService.getDestinations()
        .then(
            response => {
                this.setState({destinations:response.data});
                this.setState({loading:false});
                console.log(this.state.destinations);
            }
        )
        .catch(error => console.log(error));
    }

    render(){
        let all_destinations; 
        if(this.state.destinations){
            all_destinations = this.state.destinations.map((dest)=>(
                <Destination 
                    key={dest.pk}
                    name={dest.name}
                    images={dest.images}
                    loading={this.state.loading}
                />
            ));
        }else{
            all_destinations = <Destination loading={this.state.loading} />;
        }


        return(
            <div className='allDest'>{all_destinations}</div>
        );

    }
}