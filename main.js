const addNoteBtn = document.getElementById('addNoteBtn');
const notesContent = document.getElementById('notesContent');
const notesContainer = document.getElementById('notesContainer');
const deleteNoteBtn = document.getElementById('deleteBtn');
const clearNoteBtn = document.getElementById('clearBtn');
const noteInput = document.getElementById('noteInput');
const saveNoteBtn = document.getElementById('saveNotebtn');
const notesList = document.getElementById('notesList');
const seeAllNotes = document.getElementById('seeAllNotes');
//this array hold the notes that are saved. each notes saved is storedhere
let savedNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];
//this will hide the notes container
notesContent.style.display = 'none';
saveNoteBtn.style.display = 'none'; 

//when user clicks this button, the content pops up in a 
//Save note button shows up too
addNoteBtn.addEventListener ("click", () => {
    notesContent.style.display = 'block';
    saveNoteBtn.style.display = 'inline-block'; 
    
});


function saveNote() {
    const note = noteInput.value.trim();
    if(note) {
        savedNotes.push(note);
        localStorage.setItem("savedNotes", JSON.stringify(savedNotes));
        console.log("Saved notes:", savedNotes);
        alert("Your note has been saved.");
        noteInput.value = ""; // gets an alert if not is empty
    } else {
        alert("Please enter a note before saving.");
    }

};
saveNoteBtn.addEventListener("click", saveNote);

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

function loadNotes() {
    const savedNotes = JSON.parse(localStorage.getItem('savedNotes')) || [];
    // console.log("Loaded notes:", savedNotes); 
    notesList.innerHTML = "";

    if(savedNotes.length === 0) {
        notesList.textContent = "You have no saved notes.";
    } else {
        const ul = document.createElement('ul');

    savedNotes.forEach((note, index) => {
        const li = document.createElement('li');
        li.className = 'note-item';
        li.textContent = `Note ${index + 1}: ${note}`;
        li.dataset.noteIndex = index;
        li.style.cursor = 'pointer';
        // notesContainer.appendChild(noteItem);

       

        // notesList.appendChild(noteItem);

        li.addEventListener("click", () => {
            showNoteContent(index);
        });

        ul.appendChild(li);

       
    });
    notesList.appendChild(ul);
}
}

function showNoteContent(index) {
    noteInput.value = savedNotes[index]; // Show the content of the selected note in the text area
    notesContent.style.display = 'block'; // Ensure the notes content is visible
}


seeAllNotes.addEventListener('click', () => {
    // console.log("See All Notes button clicked");
    notesContent.style.display = 'none';
    saveNoteBtn.style.display = 'none';
    addNoteBtn.style.display = 'none';
    deleteNoteBtn.style.display = 'none';
    clearNoteBtn.style.display = 'none';
    noteInput.style.display = 'none';

    notesList.style.display = 'block';
    loadNotes();

});