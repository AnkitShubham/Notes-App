import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Note = ({ id, title, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <div className="note-heading">
        <h2>{title}</h2>
      </div>
      <div className="note-body">
        <p>{text}</p>
      </div>
      <div className="note-footer">
        <div className="note-date">
          <p>{date}</p>
        </div>
        <div className="note-fnc-btn">
          <DeleteForeverIcon
            className="delete-icon"
            onClick={() => handleDeleteNote(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Note;
