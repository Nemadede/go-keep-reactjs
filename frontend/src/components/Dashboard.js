import React, { useState } from 'react'
import Layout from './Layout'
import NoteManager from './NoteManager'
import '../css/layout.css'
import '../css/note.scss'




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
