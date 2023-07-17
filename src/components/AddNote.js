import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const characterLimit = 200;

  const handleNoteChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value);
  };
  const handleSaveNote = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, noteTitle);
      setNoteText("");
      setNoteTitle("");
    }
  };

  return (
    <div className="note add">
      <input
        type="text"
        className="title"
        placeholder="Title"
        value={noteTitle}
        onChange={handleTitleChange}
      />
      <textarea
        rows="8"
        column="10"
        placeholder="Note"
        value={noteText}
        onChange={handleNoteChange}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <AddCircleIcon
          className="add-icon"
          fontSize="large"
          onClick={handleSaveNote}
        />
      </div>
    </div>
  );
};

export default AddNote;
