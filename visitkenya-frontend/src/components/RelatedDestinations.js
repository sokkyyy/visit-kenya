import React, { Component } from 'react';
import DestinationService from '../services/DestinationService';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'; 
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




const destinationService = new DestinationService();
const imagelocation = 'http://localhost:8000';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth:200,
        width:200,
    },
    cardSelected: {
        maxWidth:270,
        margin: theme.spacing(2),
        width:200,
        backgroundColor:'red',
    },
    media: {
        height:100,
    },

}));



function RelatedDestCard(props){
    const classes = useStyles();

    return(
        <div style={{margin:10}}>
            <Card 
                className={(props.selected === props.id) ? classes.cardSelected: classes.card}
            >
                <CardHeader 
                    title={(<Typography variant='subtitle2' onClick={()=> props.changeDest(props.id)}>{props.name}</Typography>)}
                />
            </Card>
            <Card style={{marginLeft:50}}>
                <CardMedia 
                        className={classes.media}
                        title={props.name}
                >
                    <Carousel 
                            showArrows={false} 
                            showThumbs={false} 
                            autoPlay={true} 
                            infiniteLoop={true}
                            showIndicators={false}
                            showStatus={false} 
                    >
                        {props.images.map((image,index) => (

                            <img key={index + 1} src={imagelocation + image} alt={props.name} height={100} width={150} />
                        ))}
                    </Carousel>

                </CardMedia>        
            </Card>
        </div>
    );
}


export default class RelatedDestinations extends Component {
    constructor(props){
        super(props);
        this.state = {
            destinations:[],
        }
    }
    componentDidMount(){
        destinationService.getDestinations()
        .then(response => {
            this.setState({destinations:response.data});
            console.log(this.state.destinations);
        })
        .catch(error => console.log(error));
    }

    render(){
        const relatedDestinations = this.state.destinations.map(dest => {
            if((dest.pk !== this.props.selected.pk) && (dest.category === this.props.selected.category) ){
                
               return(
                <RelatedDestCard
                    key={dest.pk}
                    id={dest.pk}
                    name={dest.name}
                    images={dest.images}
                    changeDest={this.props.changeDest}
                    selected={this.props.selected} 
                />); 
            }
        });

        return(
            <div>
                {relatedDestinations}
            </div>
        );
    }

}