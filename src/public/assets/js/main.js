import { loadNotes } from "./sockets.js";
import { onHandleSubmit, renderNotes } from "./ui.js";

loadNotes(renderNotes);

const noteForm = document.querySelector("#noteForm");

noteForm.addEventListener("submit", onHandleSubmit);
