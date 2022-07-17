const socket = io();

export const loadNotes = () => {
  socket.on("loadnotes", (data) => {
    console.log(data);
  });
};

export const saveNote = (title, description) => {
  console.log(title);
  console.log(description);
  socket.emit("savenote", { title, description });
  socket.on("creatednote", (data) => {
    console.log(data);
  });
};
