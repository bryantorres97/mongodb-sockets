const socket = io();

export const loadNotes = (callback) => {
  socket.on("loadnotes", callback);
};

export const saveNote = (title, description) => {
  console.log(title);
  console.log(description);
  socket.emit("savenote", { title, description });
  socket.on("creatednote", (data) => {
    console.log(data);
  });
};
