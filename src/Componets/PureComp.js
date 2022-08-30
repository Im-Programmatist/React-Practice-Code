import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
  render() {
    console.log("this is pure component ");
    return (
      <div>This is pure component {this.props.name}</div>
    )
  }
}

export default PureComp