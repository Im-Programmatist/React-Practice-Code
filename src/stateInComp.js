import React, { Component } from 'react'

class StateInComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "This is message in stateprops",
            clickme: "Click me here"
        }
    }

    styles ={
        fontStyle: "italic",
        color:"purple",
    }
    changeButton = () =>{
        this.setState({
            message: "change button function called",
            clickme: "You have clicked!"
        })
    }
    render() {
        return (
            <div style={this.styles}>
                <p>{this.state.message}</p>
                <button onClick={this.changeButton}>{this.state.clickme}</button>
            </div>
        )
    }
}

export default StateInComp