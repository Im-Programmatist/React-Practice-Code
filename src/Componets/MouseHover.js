import React, { Component } from 'react';
import UpdatedHigherOrderComp from './HigherOrderComp';

export class MouseHover extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }
    IncrementCount = () => {
        this.setState({count : this.state.count + 1 });
    }
    render() {
        const count = this.state.count;
        return (
            <div>
                <button onMouseEnter={this.IncrementCount}>{this.props.name}Count Increase {count} </button>
            </div>
        )
    }
}

export default UpdatedHigherOrderComp(MouseHover);