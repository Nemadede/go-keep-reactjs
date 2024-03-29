import React, { useState, useRef, useEffect, useCallback } from 'react'
import Note from './Note'
import NoteFooter from './NoteFooter'

import {
    faThumbtack,
    faPaintBrush,
    faCheckSquare

} from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NoteManager() {
    const initialInputHeight = 36

    const [count, setCount] = useState(1)
    const [noteList, setNoteList] = useState([])
    const [displayClsName, setDisplayClsName] = useState('active')
    const [createClsName, setCreateClsName] = useState('')
    const [popUp, setPopUp] = useState("")
    const [inputHeight, setIputHeight] = useState(initialInputHeight)


    const wrapperRef = useRef(null)
    const textAreaRef = useRef(null)

    const [action, setAction] = useState({
        type: "create",
        currentNode: {}
    })

    const [note, setNote] = useState({
        title: '',
        body: '',
        id: 0,
    })



    const submitNotes = useCallback(() => {

        if (action.type === "create") {

            if (note.body !== "" || note.title !== "") {
                setCount(prevCount => prevCount + 1)
                note.id = count
                setNoteList(prevList => [note, ...prevList])
            }
        } else {
            if (action.type === "update") {
                const index = noteList.indexOf(action.currentNode)
                note.id = action.currentNode.id

                setNoteList(prevList => {
                    prevList[index] = note
                    return [...prevList]
                })
            }
        }


        console.log(note)
        setDisplayClsName("active")
        setCreateClsName("")
        setPopUp("")
        setNote({ title: '', body: '' })

    }, [note, setCount])


    const deleteNote = (presentNote) => {

        const index = noteList.indexOf(presentNote)
        setNoteList(prevList => {
            if (index > -1) {
                prevList.splice(index)
                return [...prevList]
            }
        })

        setNote({ title: '', body: '' })
        setAction({
            type: "create",
            currentNode: {}
        })

        setPopUp("")
        setCreateClsName("")

    }

    const previewDeleteNote = (e, node) => {
        console.log('about to delete',);
        e.stopPropagation();

        deleteNote(node)


    }
    const updateDeleteNote = () => {
        deleteNote(action.currentNode)
        setPopUp("")
    }

    const handleUpdate = (e, currentNote) => {
        setAction({
            type: "update",
            currentNode: currentNote
        })
        setDisplayClsName("active")
        setCreateClsName("active")
        setPopUp("pop-up")

        setNote({ title: currentNote.title, body: currentNote.body })

    }

    const handleFormSwitch = () => {
        setCreateClsName('active')
        setDisplayClsName('')

    }

    const handleTitleInput = (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            setIputHeight(prevHeight => prevHeight + initialInputHeight)

            event.target.style.minHeight = inputHeight;


        }
    }
    const handleBodyInput = (event) => {
        if (event.key === "enter") {
            console.log();

        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                if (event.target.className === "note" || event.target.parentNode.className === "note") {

                    setPopUp("")

                    return
                }

                submitNotes()
            }
        }


        document.addEventListener("mousedown", handleClickOutside)

        if (setCreateClsName === "active")
            textAreaRef.current.focus()
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [note, wrapperRef, submitNotes])


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

                    <div className={`${popUp}`}>

                        <form onSubmit={(e) => {
                            e.preventDefault()
                            submitNotes()
                        }} className={`create-note-form ${createClsName}`} ref={wrapperRef}>
                            <div className="title">
                                <input type="text" name="title" placeholder='Title' value={note.title}
                                    onChange={(e) => setNote({ ...note, title: e.target.value })}
                                    onKeyPress={handleTitleInput}
                                />
                                <span>
                                    <FontAwesomeIcon icon={faThumbtack} />
                                </span>
                            </div>
                            <div className="body">
                                <textarea placeholder='Take a note' name="body" value={note.body}
                                    onChange={(e) => setNote({ ...note, body: e.target.value })}
                                    onKeyPress={handleBodyInput}
                                    id="textarea"

                                    ref={textAreaRef}
                                    wrap="virtual"
                                ></textarea>
                            </div>

                            <NoteFooter deleteNote={updateDeleteNote}>
                                <button type="submit">close</button>
                            </NoteFooter>
                        </form>
                    </div>
                </div>



            </div>


            <div className="notes">
                {noteList.map(n => <Note note={n} updateNote={handleUpdate} deleteNote={previewDeleteNote} key={note.id} />)}

            </div>



        </React.Fragment>
    )
}

export default NoteManager
