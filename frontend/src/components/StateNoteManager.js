import React, { useState, useRef, useEffect, useCallback } from 'react'
import Note from './Note'
import NoteFooter from './NoteFooter'
import useStore from '../store'

import {
    faThumbtack,
    faPaintBrush,
    faCheckSquare

} from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function StateNoteManager() {
    const noteList = useStore(state => state.notes)
    const addNoteList = useStore(state => state.addNote)
    const [count, setCount] = useState(0)


    const titleRef = useRef()
    const bodyRef = useRef()

    const [displayClsName, setDisplayClsName] = useState('active')
    const [createClsName, setCreateClsName] = useState('')

    const submitNotes = (e) => {
        e.preventDefault();
        setCount(prevCount => prevCount + 1)

        addNoteList({ title: titleRef.current.value, body: bodyRef.current.value, id: count })


        titleRef.current.value = ""
        bodyRef.current.value = ""

        setCreateClsName('')
        setDisplayClsName('active')
    }



    const handleFormSwitch = () => {
        setCreateClsName('active')
        setDisplayClsName('')
    }


    return (
        <React.Fragment>

            <div className='note-manager'>

                <div className='note-forms' >

                    <div className={`input-display-form ${displayClsName}`}>
                        <input placeholder='Take a note' onFocus={handleFormSwitch} />
                        <span>
                            <FontAwesomeIcon icon={faCheckSquare} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faPaintBrush} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faImage} />
                        </span>
                    </div>

                    <div>

                        <form onSubmit={(e) => {
                            submitNotes(e)
                        }} className={`create-note-form ${createClsName}`}   >
                            <div className="title">
                                <input type="text" name="title" placeholder='Title' ref={titleRef} />
                                <span>
                                    <FontAwesomeIcon icon={faThumbtack} />
                                </span>
                            </div>
                            <div className="body">
                                <textarea placeholder='Take a note' name="body"
                                    wrap="virtual"
                                    ref={bodyRef}
                                ></textarea>
                            </div>

                            <NoteFooter deleteNote>
                                <button type="submit">close</button>
                            </NoteFooter>
                        </form>
                    </div>
                </div>



            </div>


            <div className="notes">
                {noteList.map(n => <Note note={n} updateNote deleteNote key={n.id} />)}

            </div>



        </React.Fragment>
    )
}

export default StateNoteManager
