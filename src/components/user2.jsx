import React,{useState, useEffect } from "react";

const User2 = (props) => {

    // state
    const [planet, setPlanet] = useState("earth");  //useState return an array
   // componentDidMount
    useEffect(() => {
        console.log("component mounting");
        // componentWillUnmount
        return console.log("bye bye");  // first return statement is executed
    },[]);

    // componentDidUpdate
    // shouldComponentUpdate
    useEffect(() => {
        console.log("planet change");
    },[planet]);
    
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button onClick={() => setPlanet("pluto")}>
                {planet}
            </button>
            
        </div>
    );  
};

export default User2;