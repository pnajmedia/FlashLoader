import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import UserCard from '../component/UserCard';
import { GRAPH_QRY } from '../lib/graphql_Query';
import { UsersIntrfc, visbibleCards } from '../lib/interfaces'
import NavigationHead from 'component/NavigationHead';

////////////////////////////////////////////
// Function: To render User page on Home page
// Version: 1.0
// Serves: User Details Page
// Query : only getAllUsers
// Type: Page
///////////////////////////////////////////

export default function Users() {
    const { loading, error, data } = useQuery(GRAPH_QRY)
    loading ? "Loading" : error ? error : true
    const [visibleCard, setVisibleCard] = useState(1)

    // console.log('Data from server', data?.getAllUsers)

    return (<div className='container fluid'>
        <NavigationHead />
        <div className='row fluid m-5'>
            <h3 className='jumbotron'>User Details</h3>
            {data?.getAllUsers?.slice(0, visibleCard).map((user: UsersIntrfc, idx: number) => {
                return (<div className='col-sm-6' key={idx}>
                    <UserCard {...user} /></div>)
            })}
            <button className="btn btn-success mx-auto" onClick={() => setVisibleCard(visibleCard + visbibleCards.count)}>Load More</button>
        </div>
    </div>
    )
}
