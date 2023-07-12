import React from 'react'

function Note({value:{note,deleteNote, index}}) {
  return (
    <div className='note'>
        <h1>
            {note.title}
        </h1>
        <p>
            {note.content}
        </p>
        <button onClick={()=>deleteNote(index)}>DELETE</button>
    </div>
  )
}

export default Note