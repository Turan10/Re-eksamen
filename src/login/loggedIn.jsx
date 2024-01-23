import React, { useState, useEffect } from "react";
import facade from "./apiFacade";

function LoggedIn({ user }) {
    const [dataFromServer, setDataFromServer] = useState("Loading...");

    useEffect(() => {
        const role = user.roles.split(",").includes("admin") ? "admin" : "user";
        return alert(`You are now logged in as ${role}`);
        
    }, []); 

    return (
        <div>
            <h2>Data Received from server</h2>
            <h3>{dataFromServer}</h3>
            <h4>Username: {user.name}</h4>
            <h4>Roles: {user.roles}</h4>
        </div>
    );
}

export default LoggedIn;
