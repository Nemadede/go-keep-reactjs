import React, { useState, useRef, useEffect, useCallback } from 'react'
import Note from './Note'
import NoteFooter from './NoteFooter'

function NoteManager() {
    const initialInputHeight = 36

    const [count, setCount] = useState(1)
    const [noteList, setNoteList] = useState([])
    const [textareaHeight, setTextareaHeight] = useState(initialInputHeight)
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
                console.log(action.currentNode)
                console.log(index);
            } else {
                console.log("delete");
            }
        }


        console.log(note)
        setDisplayClsName("active")
        setCreateClsName("")
        setPopUp("")
        setNote({ title: '', body: '' })

    }, [note])


    const deleteNote = (presentNote) => {

        console.log(presentNote);

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

    }

    const previewDeleteNote = (e, node) => {
        console.log('about to delete',);
        e.stopPropagation();

        deleteNote(node)
    }
    const updateDeleteNote = () => {
        deleteNote(action.currentNode)
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
            console.log(event.target.style.minHeight)


        }
    }
    const handleBodyInput = (event) => {
        if (event.key === "enter") {
            console.log("about to make h body")
            console.log(event);

        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                console.log(event);
                if (event.target.className === "note" || event.target.parentNode.className === "note") {
                    console.log(event.target.className)

                    setPopUp("")

                    return
                }

                submitNotes()
            }
        }


        document.addEventListener("mousedown", handleClickOutside)

        if (setCreateClsName === "active")
            textAreaRef.current.focus()
        console.log(textAreaRef);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [wrapperRef, submitNotes])


    return (
        <React.Fragment>

            <div className='note-manager'>

                <div className='note-forms' >

                    <div className={`input-display-form ${displayClsName}`}>
                        <input placeholder='Take a note' onFocus={handleFormSwitch} />
                        <span>list</span>
                        <span>draw</span>
                        <span>photo</span>
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
                                <span>pin</span>
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
