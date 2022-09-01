/**
 * React Life Cycle Method For Class Components - 
 * Each component in React has a lifecycle that goes through three main phases 
 * Mounting, Updating, and Unmounting.
 * Lifecycle method helps us to create state and muting them as per requirment in best way
*/

/**
 * Mounting 
 * The mounting means to put elements into the DOM. React uses virtual DOM to put all the elements into the memory. 
    It has four built-in methods to mount a component namely --->
 * constructor() - constructor() method is called when the component is initiated. Best place to initialize state.
    call super(props) before anything else,
 * 
 * getDerivedStateFromProps() - method is called right before rendering the element in our DOM. 
    It takes props and state as an argument and returns an object with changes to the state.
    we can change our initial state defined inside the constructor to props which will receive in getDerivedStateFromProps.
 * 
 * render() - Only compulsory method required by the React. This method is responsible to render our JSX to DOM.
 * 
 * componentDidMount() -The most common and widely used lifecycle method is componentDidMount. 
    This method is called after the component is rendered. 
    we can also use this method to call external data from the API.
 * 
 */
/**
 * Updating 
    This is the second phase of the React lifecycle. 
    A component is updated when there is a change in state and props.
    React basically has five built-in methods ---->

 * getDerivedStateFromProps() &  * render()
    * Both methods are also coved in mounting
    * 
 * shouldComponentUpdate()
    * method is used when you want your state or props to update or not.
    * if it returns true then only render method call again else not. 
    * We can not update props and states without this method return true in any method like didComponentMount or getDerivedStateFromProps etc.
    * The default value is true
    * 
 * getSnapshotBeforeUpdate()
    * This method is called right before updating the DOM. It has access to props and state before the update. 
    * Here you can check what was the value of your props or state before its update.
    * while using this method , componentDidUpdate() should be included otherwise you will get an error.
    * 
 * componentDidUpdate()
    * The componentDidUpdate method is called after the component is updated in the DOM. 
    * This is the best place in updating the DOM in response to the change of props and state.
*/

/**
 * Unmounting - The final or the end of the react lifecycle is Unmounting. 
 * This is used when a component is removed from the DOM. 
 * 
 * componentWillUnmount()
    * All cleanup actions like canceling API calls or clearing any caches in storage can perform here
    * You cannot use setState inside this method as the component will never be re-rendered. 
    *  
*/

/**
 * The constructor() method is the best place to initialize our state
 * The getDerivedStateFromProps() is a rarely used lifecycle method and is the best place to set the state object based on the initial props.
 * The shouldComponentUpdate() specifies whether React should continue with the rendering or not.
 * The render() method is the most used and compulsory lifecycle method.
 * The getSnapshotBeforeUpdate() method has access to the props and state even after the update.
 * The componentDidMount() is the most common and widely used lifecycle method and is called after the component is rendered. You can also use this method to call external data from the API.
 * The componentDidUpdate() method is called after the component is updated in the DOM and is the best place in updating the DOM in response to the change of props and state.
 * The componentWillUnmount() happens just before the component unmounts and is destroyed and is used for cleanup actions like canceling API calls.
*/
import React, { Component } from 'react'
import ConstructorMethod from './Mounting/constructorMethod'
import GetDerivedStateFromPropsMethod from './Mounting/getDerivedStateFromPropsMethod'
import RenderMethod from './Mounting/renderMethod'
import ComponentDidMountMethod from './Mounting/componentDidMountMethod'
import ShouldComponentUpdateMethod from './Updating/shouldComponentUpdateMethod'
import GetSnapshotBeforeUpdateMethod from './Updating/getSnapshotBeforeUpdateMethod'
import ComponentDidUpdateMethod from './Updating/componentDidUpdateMethod'
import ComponentWillUnmountMethod from './Unmounting/componentWillUnmount'

export default class ReactLifeCycle extends Component {
  render() {
    return (
        <>
            <h1>Mounting</h1>
            <h2>constructor Method</h2>
            <ConstructorMethod />
            <h2>getDerivedStateFromProps Method</h2>
            <GetDerivedStateFromPropsMethod />
            <h2>render Method</h2>
            <RenderMethod />
            <h2>componentDidMount Method</h2>
            <ComponentDidMountMethod/>
            <h1>Updating</h1>
            <h2>shouldComponentUpdate Method</h2>
            <ShouldComponentUpdateMethod />
            <h2>getSnapshotBeforeUpdate Method</h2>
            <GetSnapshotBeforeUpdateMethod />
            <h2>componentDidUpdate Method</h2>
            <ComponentDidUpdateMethod />
            <h1>Unmounting</h1>
            <h2>componentWillUnmount Method </h2>
            <ComponentWillUnmountMethod />
        </>
    )
  }
}