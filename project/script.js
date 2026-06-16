const body = document.querySelector("body");
const main = document.querySelector("main");
let inp = document.querySelector("input");
const add = document.querySelector(".add");
let todoBox = document.querySelector(".todo-list");
let task = document.querySelector(".task");
const edit = document.querySelector(".edit");
const del = document.querySelector(".del");

add.addEventListener('click', () => {
    let value = inp.value;
    if (value.trim() == false) return;
    todoBox.innerHTML += `<div draggable="true" class="list flex border w-[80%] justify-between py-2 px-5 rounded-xl text-black bg-gray-300">
                <h3 class="task font-bold">${value}</h3>
                <div class="btn flex gap-5">
                    <button class="edit bg-green-500 text-white px-5 rounded-lg">Edit</button>
                    <button class="del bg-red-700 text-white px-3 rounded-lg">Delete</button>
                </div>
            </div>`;
    inp.value = "";
});

inp.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        add.click();
    }
});


todoBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit")) {
        let task = e.target.closest(".list").querySelector(".task");
        let newEdit = prompt("Edit your task", task.textContent);
        if (!newEdit || !newEdit.trim()) return;
        task.textContent = newEdit;
    }

    if (e.target.classList.contains("del")) {
        e.target.closest(".list").remove();
    }
});

