import { saveNote } from "./sockets.js";

const notesList = document.getElementById("notes");

export const onHandleSubmit = (event) => {
  event.preventDefault();
  console.log(noteForm["title"].value, noteForm["description"].value);
  saveNote(noteForm["title"].value, noteForm["description"].value);
};

export const renderNotes = (notes) => {
  console.log(notes);
  notes.forEach((note) => notesList.append(noteUI(note)));
};

export const appendNote = (note) => {
  notesList.append(noteUI(note))
}

const noteUI = ({ title, description }) => {
  const div = document.createElement("div");
  div.innerHTML = `
  <div>
  <h1>${title}</h1>
  <button>Editar</button>
  <button>Borrar</button>
  <p>${description}</p>
  </div>
 `;
  return div;
};
