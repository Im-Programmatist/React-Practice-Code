import React, { Component } from 'react'

export class RegularComp extends Component {
  render() {
    console.log("this is regular component ");
    return (
        <div>I am regular Component {this.props.name}</div>
    )
  }
}

export default RegularComp