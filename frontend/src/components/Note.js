import React, { useState, useEffect, useRef } from 'react'
import NoteFooter from './NoteFooter'

function Note({ note, updateNote, deleteNote }) {
    const [toggleVisibility, setToggleVisibility] = useState(true)

    const visibleNote = useRef(null)

    useEffect(() => {
        if (toggleVisibility) {
            visibleNote.current.style.visibility = "visible"
        } else {
            visibleNote.current.style.visibility = "hidden"
        }
    }, [toggleVisibility])

    return (


        <div onClick={(e) => {
            setToggleVisibility(false)
            updateNote(e, note)
        }} className={`note`} ref={visibleNote}>
            <h4 onClick={(e) => {
                setToggleVisibility(false)
                updateNote(e, note)
            }}>{note.title}</h4>
            <div className="note-body" onClick={(e) => {
                setToggleVisibility(false)
                updateNote(e, note)
            }}> {note.body}</div>
            <div>
                <NoteFooter deleteNote={deleteNote} note={note} />
            </div>
        </div>

    )
}

export default Note
