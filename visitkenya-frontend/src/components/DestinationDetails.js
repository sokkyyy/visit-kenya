import React, {Component} from 'react';

export default class DestinationDetails extends Component {
    componentDidMount(){
        const { match: { params } } = this.props;

        console.log(params);
    }
    render(){
        return(
            <div>rr</div>
        );
    }
}