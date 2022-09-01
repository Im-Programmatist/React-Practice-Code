import React, { Component } from 'react'

const FuncComProps = (props) => {
    return (
        <div>
            <p>this is functional component props</p>
            <div>name is - {props.name}</div>
            <div>{props.children}</div>
        </div>
    )
}
export default FuncComProps