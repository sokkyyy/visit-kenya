import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root : {
        bottom:0,
    },
});



export default function Footer(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            Visit Kenya
        </div>
    )
}