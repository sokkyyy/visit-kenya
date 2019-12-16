import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton';
import { maxWidth } from '@material-ui/system';
import Carousel from 'react-material-ui-carousel'; 
import Link from '@material-ui/core/Link'

// MAKE STYLES FOR SKELETON AND CARD
const useStyles = makeStyles(theme => ({
    card: {
        maxWidth:345,
        margin: theme.spacing(2),
        width:300,

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
                title={props.loading ? 
                (<Skeleton variant='text' height={100} width='80%' />):
                (<a href={`destination/${props.id}`}><Typography variant='caption'>{props.name}</Typography></a>)}
            />
            {props.loading ? 
                (<Skeleton variant='rect' className={classes.media} />) :
                (<CardMedia 
                    className={classes.media}
                    title={props.name}
                    >
                        <Carousel animation='slide'>
                            {props.images.map((image,index) => (
                                 
                                <img key={index + 1} src={imagelocation + image} alt={props.name} height={190} width={300} />
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