import React, { Component } from 'react'

class ClssComProps extends Component {
  render() {
    return (
      <div>
        <span>{this.props.title}</span>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default ClssComProps