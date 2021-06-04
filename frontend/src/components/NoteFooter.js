import React from 'react'

function NoteFooter({ deleteNote, note, children }) {
    return (
        <React.Fragment>
            <div className="note-footer">

                <ul>
                    <li>Remind</li>
                    <li>collab</li>
                    <li>color</li>
                    <li>image</li>
                    <li>archive</li>
                    <li>
                        <span onClick={(e) => deleteNote(e, note)}>delete</span>
                    </li>
                    {children}
                </ul>
            </div>

        </React.Fragment>
    )
}

export default NoteFooter
