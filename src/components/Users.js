import React from "react";

const Users = (props) => {
    return (
        <div>
            <img src={props.image} alt="profile picture" />
            <h2>{props.title} </h2>
            <h3>{props.name}</h3>
        </div>

    )
}

export default Users;