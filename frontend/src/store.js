import create from 'zustand'
import { devtools } from 'zustand/middleware'

const store = (set) => ({
    notes: [],
    addNote: (note) =>
        set((state) => ({ notes: [note, ...state.notes] }))
})

const useStore = create(devtools(store))

export default useStore