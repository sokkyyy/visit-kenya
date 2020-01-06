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
import RelatedDestinations from './RelatedDestinations';
import AppLoader from './AppLoader';
import Nav from './Nav';

const destinationService = new DestinationService();
const imagelocation = 'http://localhost:8000';

function DestGallery(props){
    return(
        <Carousel showArrows={true} showThumbs={false}>
            {props.images.map((image,index)=>(
                <div key={index + 1} onClick={props.openModal} style={{cursor:'pointer'}}>
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
            loading:true,
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleMoveNext = this.handleMoveNext.bind(this);
        this.handleMovePrev = this.handleMovePrev.bind(this);
        this.handleChangeDestination = this.handleChangeDestination.bind(this);
        this.handleChangeStateDest = this.handleChangeStateDest.bind(this);
    }

    componentDidMount(){
        const { match: { params } } = this.props;
        destinationService.getDestination(params.id)
        .then(response => {
            setTimeout(()=>{
                this.setState({destination:response.data});
                this.setState({loading:false});                
            }, 500);
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

    handleChangeDestination(destinationId){
        this.props.history.push(`/destination/${destinationId}`);
        this.setState({loading:true});
        this.handleChangeStateDest(destinationId);

    }

    handleChangeStateDest(destinationId){
        destinationService.getDestination(destinationId)
        .then(response => {
            this.setState({destination:response.data});
            this.setState({loading:false});
        })
        .catch(error => console.log(error));        

    }

    render(){

        const center = {lat:this.state.destination.latitude, lng:this.state.destination.longitude};
        const { loading } = this.state;

        if(this.state.destination.latitude){
            center.lat = +center.lat;
            center.lng = +center.lng;
        }

        return(

            <div>
            <Nav />
            <Grid container spacing={3}>
                <Grid item xs={12}>

                </Grid>
                
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={2} >
                   
                </Grid>
                {loading ? 
                (<div className='detailsLoader'> <AppLoader /> </div>):  
                (
                    <Grid item xs={6} className='destDetails'>
                        <Paper className='title'>
                            <Typography variant='h4' style={{fontFamily:'Mali, cursive'}}>{this.state.destination.name}</Typography>
                            <Typography style={{fontFamily:'Mali, cursive'}}>{this.state.destination.description}</Typography>
                        </Paper>

                        <Typography variant='h6' style={{fontFamily:'Mali, cursive'}}>Gallery</Typography>

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

                        <Typography variant='h6' style={{fontFamily:'Mali, cursive'}}>Location</Typography>

                        <DestinationLocation
                            name={this.state.destination.name}
                            center={center}
                            className='location'
                            />
                    </Grid>
                )
                }


                <Grid item xs={3}>
                {loading ? 
                (<div className='detailsLoader'> <AppLoader /> </div>):  
                (                    
                    <Paper>
                        <RelatedDestinations 
                            selected={this.state.destination} 
                            changeDest={this.handleChangeDestination}
                            className='relDest'
                            loading={this.state.loading} 
                        />
                    </Paper>
                )}
                </Grid> 

                <Grid item xs>

                </Grid>

          </Grid>
          </div>
        );
    }
}