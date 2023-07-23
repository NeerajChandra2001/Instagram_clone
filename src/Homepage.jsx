import React from 'react'
import './homepage.css'
import SideNav from './navigations/SideNav'
import Timeline from './timline/Timeline'

function Homepage() {
    return (
        <div className='homepage'>
            <div className='homepage_nav'>
                <SideNav />
            </div>
            <div className='homepage_timeline'>
                <Timeline />
            </div>
        </div>
    )
}

export default Homepage
