import React from "react";

export default function MakeMsg(props) {
    if (props.error !== "") return <h1>Problem with API!</h1>
    if (props.objectName === "") return <h1>Loading...</h1>
    else {
        return (
            <React.Fragment>
                <h1>Here's your birth asteroid!</h1>
                <h2>Asteroid {props.objectName}</h2>
                was
                <h3>{props.dist}</h3>
                miles from Earth on
                <h4>{props.date}</h4>


            </React.Fragment>
        )
    }
}