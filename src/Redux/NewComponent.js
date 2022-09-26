import React, { Component } from 'react'
import { connect } from 'react-redux';

export class NewComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         message:"THis is redux demo"
    //     }
    // }
    style = {
        fontStyle:"italic",
        color:"purple",
    }
    // buttonChange = () => {
    //     this.setState({message:"This is a button change on redux"});
    // }
    render() {
        return (
            <div className="ReduxApp">
                <h3 style={this.style}>NewComponent - {this.props.message}</h3>
                <button onClick={this.props.ButtonChange}>Click Here!</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        message:state.message
    }
}
const mapDispatchToProps = dispatch => {
    return {
        ButtonChange: () => dispatch({type:"Message_Change"})
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewComponent);