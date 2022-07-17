import NoteModel from "../models/note.model";

export default (io) => {
  io.on("connection", (socket) => {
    const emitNotes = async () => {
      const notes = await NoteModel.find({});
      io.emit("loadnotes", notes);
    };

    emitNotes();
  });
};
