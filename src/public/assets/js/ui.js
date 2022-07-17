import { saveNote } from "./sockets.js";

const notesList = document.getElementById("notes");

export const onHandleSubmit = (event) => {
  event.preventDefault();
  console.log(noteForm["title"].value, noteForm["description"].value);
  saveNote(noteForm["title"].value, noteForm["description"].value);
};

export const renderNotes = (notes) => {
    console.log(notes)
    notes.forEach(({title, description}) => {
        notesList.innerHTML += `
         <div>
         <h1>${title}</h1>
         <h2>${description}</h2>
         </div>
        `
        
    });
};
