import { StaticContInterface } from 'lib/interfaces'
import React from 'react'

export default function StaticContentRenderer(props: StaticContInterface) {
    const { title, description } = props;
    return (
        <div className="jumbotron jumbotron-fluid m-5">
            <div className="container">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{description}</p>
            </div>
        </div>
    )
}
