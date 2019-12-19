import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';



const MapsComponent = ({text}) => <div><LocationOnIcon fontSize='large' style={{color: 'red'}} />{text}</div>;

export default class DestinationLocation extends Component {
    render(){
        return(
            <div style={{height: '50%', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key : 'AIzaSyA-nOvq4gG17VS9AG6Nw-5fugZGpjgZUns'}} 
                    defaultZoom={9}
                    center={this.props.center}
                    >
                        <MapsComponent lat={this.props.center.lat} lng={this.props.center.lng} text={this.props.name} />

                </GoogleMapReact>
            </div>
        );
    }
}


//Default prop for zoom
// DestinationLocation.defaultProps = {
    // center: {
        // lat: this.props.lat,
        // lng: this.props.lng,
    // },
    // zoom: 8,
// }