import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    root : {
        bottom:0,
        borderTop:'1px solid gray'
    },
    footerBox:{
        textAlign:'center',
        paddingTop:20,
    },
    footer:{
        fontFamily:'Monoton, cursive',
        fontSize:20,
        '&:hover': {
            color:'black',
        }
    },
    footerActive: {
        color:'black',
    },
});



export default function Footer(){
    const classes = useStyles();
    return(

        <div className={classes.root}>
            
            <div className={classes.footerBox}>
                <NavLink to='/home' className={classes.footer} activeClassName={classes.footerActive}><span style={{fontSize:15}}>&copy;</span> VISIT KENYA</NavLink>
            </div>
        </div>
    )
}