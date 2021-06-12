import { useEffect, useState } from 'react'

function useOutsideClickCreate(ref, setNoteList, note, count) {
    const [isOutOfDiv, setIsOutOfDiv] = useState(false)

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log(event)
            }
        }

        //Bind the event Listener
        document.addEventListener("mousedown", handleClickOutside)

        // unbind the event on clean up
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref])

    return [isOutOfDiv]
}

export default useOutsideClickCreate