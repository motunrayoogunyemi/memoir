import React, { useState} from "react"
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import notes from "../notes"
import Todo from "./Todo"
import CreateArea from "./CreateArea"



function App() {

    const [notes, setNotes] = useState([])

    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note]
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter( (eachNote, index) => {
                return index !== id;
            })
        })
    }

    return ( 
        <div>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <CreateArea onAdd={addNote} />
                        {notes.map( (eachNote, index) => {
                            return   <Note 
                            key={index}
                            id={index}
                            title={eachNote.title}
                            content={eachNote.content}
                            onDelete={deleteNote}
                        />
                        })}
                      
                    </div>
                    <div className="col-md-4 tbody">
                        <Todo />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App