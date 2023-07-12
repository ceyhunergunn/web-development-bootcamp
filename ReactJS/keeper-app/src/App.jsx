import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(id) {
    setNotes(notes.filter((noteItem, index) => {
      return index !== id ? noteItem:null
    }));
  }

  return (
    <div>
      <Header />
      <CreateArea value={{ addNote }} />
      {notes.map((note,index) => (
        <Note key={note.key} value={{ note, deleteNote, index  }} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
