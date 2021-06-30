import React from 'react'
import Layout from './Layout'
import NoteManager from './NoteManager'
import '../css/layout.css'
import '../css/note.scss'
import StateNoteManager from './StateNoteManager'




function Dashboard() {

    return (
        <React.Fragment>

            <Layout />

            <div className="main-container">
                <NoteManager />
                {/* <StateNoteManager /> */}
            </div>

        </React.Fragment>
    )
}

export default Dashboard
