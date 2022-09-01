import React, { Component } from 'react'

export class RegularComp extends Component {
  render() {
    console.log("this is regular component ");
    return (
        <div>I am regular Component {this.props.name}</div>
    )
  }
  shouldComponentUpdate(){
    console.log("shouldUpdateCOmponent in regular component");
    return true; //if it returns false then render method not run
  }
}

export default RegularComp