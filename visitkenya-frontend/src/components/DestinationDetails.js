import React, {Component} from 'react';
import DestinationService from '../services/DestinationService';
import '../css/DestDetails.css';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import DestinationLocation from './GoogleMaps/Maps';



const destinationService = new DestinationService();


export default class DestinationDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            destination:{},
        };
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
    render(){
        return(
            <Grid container spacing={3}>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={6}>
                </Grid>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Typography variant='h4'>{this.state.destination.name}</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <DestinationLocation />
                </Grid>
                <Grid item xs={2}>
                </Grid>

                <Grid item xs>

                </Grid>

          </Grid>

        );
    }
}