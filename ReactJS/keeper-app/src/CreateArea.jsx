import React, { useState } from "react";

function CreateArea({ value: { addNote } }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          placeholder="Take a note..."
          onChange={(e) => setNote({ ...note, content: e.target.value })}
          rows={3}
        />
        <button
          onClick={(e) => {
            addNote(note);
            e.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
