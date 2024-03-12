import { createContext } from 'react';
const NoteContex= createContext();
const NoteState = (props)=>{
    const state = {
         "name":"A",
         "class": "B"
    }

    return(
        <NoteContex.Provider value={state}>
            {props.children}
        </NoteContex.Provider>
    )
}

export default NoteState;