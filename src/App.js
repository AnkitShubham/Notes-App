import { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: "Title",
      text: "This is the first note",
      date: "16/07/23",
    },
    {
      id: nanoid(),
      title: "Title",
      text: "This is the second note",
      date: "05/07/23",
    },
    {
      id: nanoid(),
      title: "Title",
      text: "This is the third note",
      date: "23/07/23",
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  return (
    <div className="wrapper">
      <NotesList notes={notes} handleAddNote={addNote}/>
    </div>
  );
};

export default App;
