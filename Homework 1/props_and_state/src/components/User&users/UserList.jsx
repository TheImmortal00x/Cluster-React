import React, { Component } from 'react';
import User from "./User";
import Address from "./Address";

const UserList = ({ users }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>

                    {users.map(stat => (
                        <tr>
                            <User stat={stat} />
                            <Address stat={stat} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;