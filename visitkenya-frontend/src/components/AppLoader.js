import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';

function AppLoader(){
    return(
        <Loader
            type="TailSpin"
            color="#00BFFF"
            height={100}
            width={100}
        />
    );
}

export default AppLoader;