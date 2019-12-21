import React, {Component} from 'react';
import DestinationService from '../services/DestinationService';
import '../css/DestDetails.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DestinationLocation from './GoogleMaps/Maps';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import GalleryModal from './GalleryModal';





const destinationService = new DestinationService();
const imagelocation = 'http://localhost:8000';

function DestGallery(props){
    return(
        <Carousel showArrows={true} showThumbs={false}>
            {props.images.map((image,index)=>(
                <div key={index + 1} onClick={props.openModal}>
                    <img src={imagelocation + image} alt={props.name} height={250} width={300} />                    
                </div>
            ))}
        </Carousel>
    );
}

export default class DestinationDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            destination:{},
            isOpen:false,
            photoIndex:0,
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleMoveNext = this.handleMoveNext.bind(this);
        this.handleMovePrev = this.handleMovePrev.bind(this);
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        destinationService.getDestination(params.id)
        .then(response => {
            this.setState({destination:response.data});
            console.log(this.state.destination);
        })
        .catch(error => console.log(error)); 
        
    }


    handleOpenModal(){
        this.setState({
            isOpen:true,
        });
        console.log(this.state.isOpen);
    }

    handleCloseModal(){
        this.setState({isOpen:false});
    }

    handleMovePrev(){
        const { photoIndex, destination } = this.state; 
        this.setState({
            photoIndex:(photoIndex + destination.images.length - 1) % destination.images.length, 
        });
    }

    handleMoveNext(){
        const { photoIndex, destination } = this.state; 

        this.setState({
            photoIndex: (photoIndex + 1) % destination.images.length,
        });
    }

    render(){

        const center = {lat:this.state.destination.latitude, lng:this.state.destination.longitude};
        
        if(this.state.destination.latitude){
            center.lat = +center.lat;
            center.lng = +center.lng;
        }

        return(
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={6} className='destDetails'>
                    <Paper className='title'>
                        <Typography variant='h4'>{this.state.destination.name}</Typography>
                        <Typography>{this.state.destination.description}</Typography>
                    </Paper>
                    
                    <Typography variant='h6'>Gallery</Typography>

                    <DestGallery
                        openModal={this.handleOpenModal}
                        images={this.state.destination.images?this.state.destination.images:[]} 
                        name={this.state.destination.name} 
                    />

                    <GalleryModal
                        images={this.state.destination.images ? this.state.destination.images : []} 
                        isOpen={this.state.isOpen} 
                        photoIndex={this.state.photoIndex}
                        closeModal={this.handleCloseModal} 
                        movePrev={this.handleMovePrev}
                        moveNext={this.handleMoveNext}
                    />
                    
                    <Typography variant='h6'>Location</Typography>
                    
                    <DestinationLocation
                        name={this.state.destination.name}
                        center={center}
                        className='location'
                    />

                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={1}>
                </Grid>

                <Grid item xs>

                </Grid>

          </Grid>

        );
    }
}