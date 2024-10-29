const addNoteBtn = document.getElementById('addNoteBtn');
const notesContent = document.getElementById('notesContent');
const deleteNoteBtn = document.getElementById('deleteBtn');
const clearNoteBtn = document.getElementById('clearBtn');
const noteInput = document.getElementById('noteInput');
const saveNoteBtn = document.getElementById('saveNotebtn');

//this will hide the notes container
notesContent.style.display = 'none';
saveNoteBtn.style.display = 'none'; 


//when user clicks this button, the content pops up in a 
//Save note button shows up too
addNoteBtn.addEventListener ("click", () => {
    notesContent.style.display = 'block';
    saveNoteBtn.style.display = 'inline-block'; 
    
});


deleteNoteBtn.addEventListener("click", () => {
    const confirmDelete = confirm("Are you sure you want to delete your notes?");
    if (confirmDelete) {
        noteInput.value = ""; // Clear the text area content
        notesContent.style.display = 'none'; // Hide the notes container
        alert("Your notes have been deleted.");
    }
});

clearNoteBtn.addEventListener("click", () => {
    const confirmClear = confirm("Are you sure you want to clear your notes?");
    if (confirmClear) {
        noteInput.value = ""; // Clear the text area content
        alert("Your notes have been cleared.");
    }
});
// function addNotes() {
//     notesContent.style.display = "block";
//     noteInput.value = "";
    

// };