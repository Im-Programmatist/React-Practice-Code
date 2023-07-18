import React from 'react';
import logo from './logo.svg';
import './App.css';
import Funcomp from './Componets/FunctionalComp';
import ClassComp from './Componets/ClassComp';
import CLick from './Componets/Click';
import MouseHover from './Componets/MouseHover';
import ParentComp from './Componets/ParentComp';
import ReactLifeCycle from './Componets/LifeCycleMethods/ReactLifeCycle';
import ClssComProps from './ClssComProps';
import FuncComProps from './FuncComProps';
import StateInComp from './stateInComp';
import NewReduxComp from './Redux/NewComponent';
import StepperComp from './Componets/StepperComp';
import GeekStepper from './stepperForm.jsx';
import StepperTab from './StepperTab.jsx';
import GridComponent from './Componets/GridComponent';

class App extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
			apiUrl:"http://localhost:9000/testAPI",
			apiResponse:""
		}
	}
	style={
		fontStyle:"bold",
        color:"teal",
	}
	callAPI(){
		fetch(this.state.apiUrl)
		.then((response) => {console.log(response);return response.text();})
		.then((data) => this.setState({apiResponse: data}))
		.catch((error) => console.log(error));
	}
	componentDidMount(){
		this.callAPI();
	}
	render(){
		return (
            <div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p> Response of api is {this.state.apiResponse}</p>
				</header>
				<Funcomp />
				<ClassComp />
				<CLick/>
				<MouseHover />
				<ParentComp />
				<ReactLifeCycle nameFromParent="ck"/>
				<FuncComProps name="abc name"><button type="button">Hello CLick Me</button></FuncComProps>
				<StateInComp />
				<h3 style={this.style}>Welcome to Redux demo</h3>
				<NewReduxComp />
				<StepperComp />
				{/*
					<ClssComProps title="Hellow react"><p>This ClssComProps children element from parent</p></ClssComProps>
					<ClssComProps title="Hellow react"/>
				*/}

				<GeekStepper />
				<StepperTab />

				<GridComponent noOfGrids={5} timerDelay={10}/>

			</div>
		);
	}

}

export default App;
