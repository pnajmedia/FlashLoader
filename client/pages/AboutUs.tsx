import NavigationHead from 'component/NavigationHead'
import StaticContentRenderer from 'component/StaticContentRenderer'
import { description } from 'lib/interfaces'
import React from 'react'

////////////////////////////////////////////
// Function: To render About us on Home page
// Version: 1.0
// Serves: About us Page
// Query : None
// Type: Page
///////////////////////////////////////////

export default function AboutUs() {
    return (
        <div className='container fluid'>
            <NavigationHead />
            <StaticContentRenderer title="About Us" description={description.aboutUsDesc} />
        </div>
    )
}
