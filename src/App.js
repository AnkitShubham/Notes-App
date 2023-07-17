import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  // const [notes, setNotes] = useState([
  //   {
  //     id: nanoid(),
  //     title: "Title",
  //     text: "This is the first note",
  //     date: "16/07/23",
  //   },
  //   {
  //     id: nanoid(),
  //     title: "Title",
  //     text: "This is the second note",
  //     date: "05/07/23",
  //   },
  //   {
  //     id: nanoid(),
  //     title: "Title",
  //     text: "This is the third note",
  //     date: "23/07/23",
  //   },
  // ]);
  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    return savedNotes || [];
  });

  const [searchText, setSearchText] = useState("");

  const addNote = (text, title) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      title: title,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="wrapper">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
