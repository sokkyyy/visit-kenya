import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'; 
import Skeleton from '@material-ui/lab/Skeleton';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import  {Link}  from 'react-router-dom';
import AppLoader from './AppLoader';

// MAKE STYLES FOR SKELETON AND CARD
const useStyles = makeStyles(theme => ({
    card: {
        maxWidth:200,
        margin: theme.spacing(2),
        width:200,

    },
    cardHeader: {
        height:50,  
    },
    headerLink:{
        fontSize:12,
        fontFamily:'Mali, cursive',
        '&:hover': {
            color:'black', 
        }
    },
    media: {
        height:190,
    },

}));

const imagelocation = 'http://localhost:8000';

function CardDest(props){
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.cardHeader} 
                title={props.loading ? 
                (<Skeleton variant='text' height={100} width='80%' />):
                (<Link to={`/destination/${props.id}`} className={classes.headerLink}>{props.name}</Link>)}
            />
            {props.loading ? 
                (<Skeleton variant='rect' className={classes.media} />) :
                (<CardMedia 
                    className={classes.media}
                    title={props.name}
                    >
                        <Carousel animation='slide'>
                            {props.images.map((image,index) => (
                                 
                                <img key={index + 1} src={imagelocation + image} alt={props.name} height={190} width={200} />
                            ))}
                        </Carousel>

                    </CardMedia>)
            }

            
        </Card>
    )
}

export default class Destination extends Component {


    render(){

        return(
            <CardDest id={this.props.id} loading={this.props.loading} images={this.props.images} name={this.props.name} />
        );
    }
}