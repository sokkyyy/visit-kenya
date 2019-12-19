import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';



const MapsComponent = () => <LocationOnIcon fontSize='large' style={{color: 'red'}} />;

export default class DestinationLocation extends Component {
    render(){
        return(
            <div style={{height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key : 'AIzaSyA-nOvq4gG17VS9AG6Nw-5fugZGpjgZUns'}} 
                    defaultZoom={this.props.zoom}
                    defaultCenter={this.props.center}
                    >
                        <MapsComponent lat={-2.6527} lng={37.2606} text="Location" />

                </GoogleMapReact>
            </div>
        );
    }
}


//Default prop for zoom
DestinationLocation.defaultProps = {
    center: {
        lat: -2.6527,
        lng: 37.2606,
    },
    zoom: 8,
}