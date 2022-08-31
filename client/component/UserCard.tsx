import { UsersIntrfc } from 'lib/interfaces';
import React from 'react'

////////////////////////////////////////////
// Function: To render card UI from props
// Version: 1.0
// Serves: User Page
// Query : only getAllUsers
// Type: Component
///////////////////////////////////////////

export default function UserCard(props:UsersIntrfc) {
    // console.log('I got props data', props)
    const { name, email, phone, occupation } = props;
    return (
        <div className="card text-dark bg-light mb-3">
            <div className="card-header">{name} | {occupation}</div>
            <div className="card-body">
                <h5 className="card-title">{email}</h5>
                <p className="card-text">{phone}</p>
            </div>
        </div>)
}
