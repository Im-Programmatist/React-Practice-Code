import React from "react";

class ClassComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xx : Array(5).fill(1)
        };
    }
    render() {
        console.log("this.state.squares- ",this.state.squares);
        console.log("this.state.squares- ",this.state.squares[0]);
        console.log("this.state.squares- ",this.state.squares[10]);
        console.log("this.state.xx- ",this.state.xx);
        console.log("this.state.xx- ",this.state.xx[1]);
        console.log("this.state.xx- ",this.state.xx[4]);
        console.log("this.state.xx- ",this.state.xx[5]);
        return <h1> This is class component </h1>
    }
}

export default ClassComp;