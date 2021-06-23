import React from 'react'
import {
    faInbox,
    faUserPlus,
    faEllipsisV,
    faPalette,
    faThumbtack

} from '@fortawesome/free-solid-svg-icons'
import { faImage, faBell } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NoteFooter({ deleteNote, note, children }) {
    return (
        <React.Fragment>
            <div className="note-footer">

                <ul>
                    <li>
                        <FontAwesomeIcon icon={faBell} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faUserPlus} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faPalette} />

                    </li>
                    <li>
                        <FontAwesomeIcon icon={faImage} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faInbox} />

                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEllipsisV} />

                    </li>
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
