import React, { Component } from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

export class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Jack'   
        }    
    }
    componentDidMount() {
        setInterval(() => this.setState({ name: 'Chetan'}), 5000);
    }
    render() {
        console.log("this is parent component ");
        return (
            <div>
                This is parent component - {this.state.name}
                <RegularComp name={this.state.name}/>
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp