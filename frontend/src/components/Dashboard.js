import React from 'react'
import Layout from './Layout'
import '../css/layout.css'
import NoteManager from './NoteManager'


function Dashboard() {
    return (
        <React.Fragment>
            <Layout />
            <div className="main-container">
                <NoteManager />
            </div>
        </React.Fragment>
    )
}

export default Dashboard
