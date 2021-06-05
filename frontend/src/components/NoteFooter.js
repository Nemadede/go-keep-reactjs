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

                </ul>
                <div className="close">
                    {children}
                </div>

            </div>

        </React.Fragment>
    )
}

export default NoteFooter
