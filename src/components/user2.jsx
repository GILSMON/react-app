import React from "react";

class User2 extends React.Component {

    constructor (props) {
        super(props);

        // create a state
        this.state = {
            planet : "earth",
        };
        console.log("constructor");
    }

    componentDidMount() {
        this.setState({planet: "Mars"}); 
        // change the state earth to mars when component is created
    }
    render(){
        console.log("render");
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h4>{this.state.planet} </h4>
            </div>
        );
        
        
    }
}

export default User2;