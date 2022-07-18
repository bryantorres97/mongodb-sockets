import { getNotes, createNote } from "../controllers/notes.controller";

export default (io) => {
  io.on("connection", (socket) => {
    const emitNotes = async () => {
      const notes = await getNotes();
      io.emit("loadnotes", notes);
    };

    emitNotes();

    socket.on("savenote", async (note) => {
      const newNote = await createNote(note);
      socket.emit("creatednote", newNote);
    });
  });
};
