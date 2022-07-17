import {saveNote} from './sockets.js';

export const onHandleSubmit = (event) => {
  event.preventDefault();
  console.log(noteForm["title"].value, noteForm["description"].value)
  saveNote(noteForm["title"].value, noteForm["description"].value)
};
