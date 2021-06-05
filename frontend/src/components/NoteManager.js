import React, { useState, useEffect } from 'react'
import Note from './Note'
import NoteFooter from './NoteFooter'



function NoteManager() {

    const [count, setCount] = useState(1)
    const [noteList, setNoteList] = useState([])
    const [textareaHeight, setTextareaHeight] = useState(0)
    const [displayClsName, setDisplayClsName] = useState('active')
    const [createClsName, setCreateClsName] = useState('')

    const [action, setAction] = useState({
        type: "create",
        currentNode: {}
    })

    const [note, setNote] = useState({
        title: '',
        body: '',
        id: 0,
    })

    const submitNotes = (e) => {

        e.preventDefault();

        if (action.type === "create") {
            setCount(prevCount => prevCount + 1)
            note.id = count
            if (note.body !== "" || note.title !== "")
                setNoteList(prevList => [note, ...prevList])

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
        setNote({ title: '', body: '' })

    }

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
        setDisplayClsName(" ")
        setCreateClsName("active pop-up")

        setNote({ title: currentNote.title, body: currentNote.body })

    }

    const heigtHandler = (e) => {
        // console.log(e.target.id);


    }

    const handleFormSwitch = () => {
        setCreateClsName('active')
        setDisplayClsName('')
    }

    useEffect(() => {
        const elem = document.getElementById('#textarea')
        console.log(elem);
    }, [])

    return (
        <React.Fragment>
            <div className='note-manager'>

                <div className='note-forms'>

                    <div className={`input-display-form ${displayClsName}`}>
                        <input placeholder='Take a note' onFocus={handleFormSwitch} />
                        <span>list</span>
                        <span>draw</span>
                        <span>photo</span>
                    </div>

                    <form onSubmit={submitNotes} className={`create-note-form ${createClsName}`}>
                        <div className="title">
                            <input type="text" name="title" placeholder='Title' value={note.title}
                                onChange={(e) => setNote({ ...note, title: e.target.value })}
                            />
                            <span>pin</span>
                        </div>
                        <div className="body">
                            <textarea placeholder='Take a note' name="body" value={note.body}
                                onChange={(e) => setNote({ ...note, body: e.target.value })}
                                onKeyUp={(e) => heigtHandler(e)}
                                id="textarea"
                            ></textarea>
                        </div>

                        <NoteFooter deleteNote={updateDeleteNote}>
                            <button type="submit">close</button>
                        </NoteFooter>
                    </form>
                </div>



            </div>

            <div className="notes">
                {noteList.map(n => <Note note={n} updateNote={handleUpdate} deleteNote={previewDeleteNote} key={note.id} />)}

            </div>
        </React.Fragment>
    )
}

export default NoteManager
