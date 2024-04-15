const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", function () {
    addNote()
})

const saveNote = () => {
    const notes = document.querySelectorAll(".note");
    const data = [];
    notes.forEach((note) => {
      data.push(note.querySelector("textarea").value);
    });
    if (data.length === 0) {
        localStorage.removeItem("notes");
    }
    else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note", 'w-[400px]', 'h-[400px]', 'bg-white', 'm-4', 'mt-[55px]')
    note.innerHTML = `<div class="tool w-full bg-orange-950 text-white flex justify-end p-2">
    <i class="fas fa-save p-2 cursor-pointer"></i>
    <i class="fas fa-trash p-2 cursor-pointer"></i>
    </div>
    <textarea class="resize-none w-full h-[350px] p-3 text-lg focus: border-none outline-none">${text}</textarea>`;

    note.querySelector(".fa-trash").addEventListener("click",
        () => {
            note.remove()
            saveNote();
        })
    note.querySelector(".fa-save").addEventListener("click",
        () => { saveNote(); })

    note.querySelector("textarea").addEventListener(
        "focusout",
        function () {
            saveNote();
        }
    )
    main.appendChild(note);
    saveNote();
}
(
    function () {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addNote()
        } else {
            lsNotes.forEach(
                (lsNotes) => {
                    addNote(lsNotes)
                }
            )
        }
    }
)()


// const addBtn = document.querySelector("#addBtn");
// const main = document.querySelector("#main");

// addBtn.addEventListener("click", function () {
//   addNote();
// });

// const saveNote = () => {
//   const notes = document.querySelectorAll(".note");
//   const data = [];
//   notes.forEach((note) => {
//     data.push(note.querySelector("textarea").value);
//   });
//   if (data.length === 0) {
//     localStorage.removeItem("notes");
//   } else {
//     localStorage.setItem("notes", JSON.stringify(data));
//   }
// };

// const addNote = (text = "") => {
//   const note = document.createElement("div");
//   note.classList.add("note", 'w-[400px]', 'h-[400px]', 'bg-white', 'm-4', 'mt-[55px]');
//   note.innerHTML = `
//     <div class="tool w-full bg-orange-950 text-white flex justify-end p-2">
//       <i class="fas fa-save p-2 cursor-pointer save"></i>
//       <i class="fas fa-trash p-2 cursor-pointer trash"></i>
//     </div>
//     <textarea class="resize-none w-full h-[350px] p-3 text-lg focus: border-none outline-none">${text}</textarea>
//   `;

//   note.querySelector(".trash").addEventListener("click", () => {
//     note.remove();
//     saveNote();
//   });

//   note.querySelector(".save").addEventListener("click", () => {
//     saveNote();
//   });

//   note.querySelector("textarea").addEventListener("focusout", () => {
//     saveNote();
//   });

//   main.appendChild(note);
//   saveNote();
// };

// (function () {
//   const lsNotes = JSON.parse(localStorage.getItem("notes"));
//   if (lsNotes === null) {
//     addNote();
//   } else {
//     lsNotes.forEach((lsNote) => {
//       addNote(lsNote);
//     });
//   }
// })();