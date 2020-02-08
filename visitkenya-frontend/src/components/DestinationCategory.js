import React, {useState, useEffect} from 'react';
import DestinationService from '../services/DestinationService';
import Destination from './Destination';
import  {Link}  from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Nav from './Nav';
import AppLoader from './AppLoader';

const destinationService = new DestinationService();

const useStyles = makeStyles((theme) => ({
    categoryDisplay:{
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
    },
    category:{
        marginTop:60,
        textAlign:'center',
        fontSize:25,
    },
    loader: {
        marginLeft:400,
        marginTop: 200,
    },
}))

export default function DestinationCategory(props){
    //Use the effect hook for componentDidMount
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('Enter Category');

    const {match:{params}} = props;


    const classes = useStyles();

    const fetchCategoryDestinations = () => {

        setLoading(true);



        destinationService.getDestinationsCategory(params.category)
        .then(response => {
            setTimeout(()=>{
                setDestinations(response.data);
                setLoading(false);
            }, 500);
        })
        .catch(error => console.log(error));


        console.log(destinations);
    }
    const changeCategoryName = () => {
        if (params.category === 'national_parks'){
            setCategory('National Parks');
        }else if(params.category === 'beaches'){
            setCategory('Beaches');
        }else if(params.category === 'island_resorts'){
            setCategory('Island Resorts');
        }else {
            setCategory('Cultural Site');
        }
    }

    useEffect(() => {
        fetchCategoryDestinations();
        changeCategoryName();

    },[params.category]);

    return(
        <div>
        <Nav />
        <Grid container spacing={3}>
            <Grid item xs={12} className={classes.category}>
                {category}
                <hr style={{width:80}} />
            </Grid>

            <Grid item xs={2}></Grid>

            <Grid item xs={10} >
                {loading ? (<div className={classes.loader}><AppLoader /></div>) : (

                <div className={classes.categoryDisplay}>
                    {destinations.map((dest)=>(
                        <Destination
                            key={dest.pk}
                            id={dest.pk}
                            name={dest.name}
                            images={dest.images ? dest.images : []}
                            loading={false}
                        />
                    ))}
                </div>
                )}
            </Grid>



        </Grid>

        </div>
    )
}
