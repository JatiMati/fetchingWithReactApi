import React, { Component } from "react";

const ButtonFetchUsers = (props) => {
    return (
        <button onClick={props.click}>Load 5 random people</button>
    )
}

export default ButtonFetchUsers;