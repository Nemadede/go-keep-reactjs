import React from 'react'
import NoteFooter from './NoteFooter'

function Note({ note, updateNote, deleteNote }) {
    return (

        <div onClick={(e) => updateNote(e, note)} className="note">
            <h4 onClick={(e) => updateNote(e, note)}>{note.title}</h4>
            <div className="note-body" onClick={(e) => updateNote(e, note)}> {note.body}</div>
            <div>
                <NoteFooter deleteNote={deleteNote} note={note} />
            </div>
        </div>

    )
}

export default Note
