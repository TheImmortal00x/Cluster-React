import React, { Component } from 'react';


const User = ({ stat }) => {
    return (
        <>
            <td>{stat.name.firstname}</td>
            <td>{stat.name.lastname}</td>
        </>
    );

}
export default User;