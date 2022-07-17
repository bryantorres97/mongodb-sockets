



const noteForm = document.querySelector("#noteForm");

noteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(noteForm["title"].value, noteForm["description"].value);
});
