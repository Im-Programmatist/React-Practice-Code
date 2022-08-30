import React, { Component } from 'react';
import UpdatedHigherOrderComp from './HigherOrderComp';

export class click extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }
    updateOnClick = () =>{
        this.setState({count: this.state.count + 1});
    }
    render() {
        const count = this.state.count;
        return (
            <div>
                <button onClick={ this.updateOnClick}>{this.props.name} Click {count} times!</button> 
            </div>
        )
    }
}

export default UpdatedHigherOrderComp(click);