import React, { PureComponent } from 'react'

/**
 * A React component is considered pure if it renders the same output for the same state and props. 
 * For this type of class component, React provides the PureComponent base class.
 * Component, there is no need for shouldComponentUpdate() Lifecycle Method. 
*/
export class PureComp extends PureComponent {
  render() {
    console.log("this is pure component ");
    return (
      <div>This is pure component {this.props.name}</div>
    )
  }
}

export default PureComp