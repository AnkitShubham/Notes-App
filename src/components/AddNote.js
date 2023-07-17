import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    setNoteText(event.target.value);
  };
  const handleSaveNote = () => {
    handleAddNote(noteText);
  };

  return (
    <div className="note add">
      <textarea
        rows="8"
        column="10"
        placeholder="Type the text..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>200 remaining</small>
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
