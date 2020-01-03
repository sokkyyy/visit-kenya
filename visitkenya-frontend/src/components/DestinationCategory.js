import React, {useState, useEffect} from 'react';


export default function DestinationCategory(){
    //Use the effect hook for componentDidMount
    const [destinations, setDestinations] = useState(null);
    
    useEffect(() => {
        setDestinations(1);
        console.log(destinations);
    });

    return(
        <div>
            rrrr
        </div>
    )
}