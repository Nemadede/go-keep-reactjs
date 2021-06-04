import React, { useState } from 'react'
import Note from './Note'
import NoteFooter from './NoteFooter'



function NoteManager() {

    const [count, setCount] = useState(1)
    const [noteList, setNoteList] = useState([])
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
            setNoteList(prevList => [...prevList, note])
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

        setNote({ title: currentNote.title, body: currentNote.body })

    }


    return (
        <div>

            <div>
                <form>
                    <div>
                        <input placeholder='Take a note' />
                    </div>
                </form>
                <form onSubmit={submitNotes}>
                    <div>
                        <input type="text" name="title" placeholder='Title' value={note.title}
                            onChange={(e) => setNote({ ...note, title: e.target.value })}
                        />
                    </div>
                    <div>
                        <textarea placeholder='Take a note' name="body" value={note.body}
                            onChange={(e) => setNote({ ...note, body: e.target.value })} ></textarea>
                    </div>

                    <NoteFooter deleteNote={updateDeleteNote}>
                        <button type="submit">close</button>
                    </NoteFooter>
                </form>
            </div>

            <div>
                {noteList.map(n => <Note note={n} updateNote={handleUpdate} deleteNote={previewDeleteNote} key={note.id} />)}

            </div>

        </div>
    )
}

export default NoteManager
