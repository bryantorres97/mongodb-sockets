const socket = io();

export const loadNotes = (callback) => {
  socket.on("loadnotes", callback);
};

export const saveNote = (title, description) => {
  socket.emit("savenote", { title, description });
};


export const onNewNote = (callback) => {
  socket.on("creatednote", callback);
}
