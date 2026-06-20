const newTask = document.querySelector("#newTask");
const close = document.querySelector(".close");
const formSec = document.querySelector(".formSec");
const form = document.querySelector("#form");
const tasks = document.querySelector(".tasks");


let edit = null;
let taskArr = JSON.parse(localStorage.getItem("tasks")) || [];

close.addEventListener("click", () => {
    formSec.classList.add("hidden");
    edit = null;
    form.reset();
    
})


// Task 1: Creation Module.  ==>

// input.value: It get the value that your typo in the input box.
/* input.getAttribute("value"): It get the default value that already given by
                                developer inside the input tag in the form of value attribute when user not give any input.
                                <input value="default value">*/

let ui = () => {
    tasks.innerHTML = "";
    taskArr.forEach((obj, index) => {
        let task = document.createElement("div");


// Task 2: Task: Attributes vs Properties  ==>      
        // console.log(task.getAttribute("data-id"));   // using getAttribue we can get value of the attribute.       
        // console.log(task.dataset.id);    // using dataset we get the custom attribut value.
        // console.log(task.hasAttribute("data-id"));  // using hasAttribute we can check attribute is present or not. It's return true or false.
        // task.removeAttribute("data-category")); // using removeAttribute we can remove the attribute.

        task.setAttribute("data-id", `${index}`);
        task.setAttribute("data-status", `${obj.status}`);  // using setAttribue we can add the attribute. setAttribute give attribute property and value.
        task.setAttribute("data-category", "task");
        task.className = "task bg-[#0096c7] w-[220px] h-[200px] rounded-lg px-4 pb-4";
        
        
// Task 3: DOM Manipulation  ==>
        task.innerHTML += `<div class="status flex justify-end font-bold text-orange-300 -mr-2"><h2>${obj.status}</h2></div>
        <h1 class="font-bold md:text-3xl h-3/4 text-xl text-white">${obj.title}</h1>
        <div class="btn font-bold w-full flex gap-2 justify-between">
        <button class="bg-[#e76f51] rounded-lg px-1 cursor-pointer" onclick="editTask('${obj.title}')">Edit</button>
        <button class="bg-[#a7c957] rounded-lg px-1 cursor-pointer" onclick="completeTask('${obj.status}', ${index})">Complete</button>
        <button class="bg-[#e63946] rounded-lg px-1 cursor-pointer" onclick="deleteTask(${index})">Delete</button>
        </div>`;
        tasks.append(task);
        
        // append();    // It's add one or multiple in the element. Each element add to the last.
        // prepend();   // It's add one or multiple in the element. Each element add to the begining of the element.
        // after();     // It's add element after the selected element. 
        // before();    // It's add elemnet before the selected element.
        // replaceWith();   // It's replace with selected element.
        // remove();    // It's remove the selected element.

    });
}

ui();

// Task 4: Theme Toggle.  ==> 
let theme = document.querySelector(".theme");
let day = document.querySelector(".day");
let night = document.querySelector(".night");
let body = document.body;

theme.addEventListener("click", (e) => {
    localStorage.setItem("them", "bg-black");
    // let obj = {
    //     day: `day.classList.toggle("hidden")`,
    //     night: `night.classList.toggle("hidden")`   // use classlist for add, remove and toggle class in the element
    // }

    // localStorage.setItem("them", JSON.stringify(obj));
     
    day.classList.toggle("hidden");
    night.classList.toggle("hidden", localStorage.getItem("theme"));


    if (night.dataset.theme === "dark") {
        night.removeAttribute("data-theme");
        
    } else {
        night.setAttribute("data-theme", "dark");   // fot set attribute
    }
    
    body.classList.add(localStorage.getItem("theme"));
    let dark = night.dataset.theme;     // get for custom attribute value.
});


// Task 5: Event Handling:  ==>
newTask.addEventListener("click", () => {
    formSec.classList.remove("hidden");
})

let deleteTask = (ind) => {
    taskArr.splice(ind, 1);
    localStorage.setItem("tasks", JSON.stringify(taskArr));
    ui()
}

let completeTask = (status, index) => {
    taskArr[index].status = "Complete";
    localStorage.setItem("tasks", JSON.stringify(taskArr));
    ui();
    console.log(taskArr);
}

let editTask = (title) => {
    formSec.classList.remove("hidden");
    let task = taskArr.find((ele) => ele.title === title);
    edit = taskArr.findIndex((ele) => ele.title === title);
     console.log(task);
    form[0].value = task.title;
    form[1].value = task.status;
    ui();
}




// Task 6: Event Delegation: 
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let title = e.target[0].value;
    let status = e.target[1].value;

    if (title.trim() == "" || status.trim() == "") {
        alert("Fill all the details.");
        return;
    }

    let obj = {title, status};

    if (edit !== null) {
        taskArr[edit] = obj;
        localStorage.setItem("tasks", JSON.stringify(taskArr));
        edit = null;
    }
    else {
        taskArr.push(obj);
        localStorage.setItem("tasks", JSON.stringify(taskArr));
    }

    ui();

    form.reset();
    formSec.classList.add("hidden");
})


// Task 7: Event Propagation Demonstration:
let grand = document.querySelector(".grandparent");
let parent = document.querySelector(".parent");
let childbtn = document.querySelector(".child");

// ** Event bubbling:
grand.addEventListener("click", () => {
    console.log("Grandparent");
});

parent.addEventListener("click",  () => {
    console.log("Parent");
});

childbtn.addEventListener("click", () => {
    console.log("Child");
});

// ** Event Capturing:
grand.addEventListener("click", () => {
    console.log("Grandparent");
}, {capture: true});

parent.addEventListener("click",  () => {
    console.log("Parent");
});

childbtn.addEventListener("click", () => {
    console.log("Child");
});

// Different between Event Bubbling and Event Capturing:

// Event bubbling:  Child -> Parent -> Grandparent. In event bubbling DOM tree travels from bottom to top,
                    // so when target fire then event fire from bottom to top. That's why when click on child all event fire 
                    // because child is present inside the parent and parent present inside the grandparent.
                    // so DOM tree travel from target to top.

// Event Capturing:  Grandparent -> Parent -> Child. In event capturing DOM tree travels from top to bottom, 
                    // so When we click on event listener first all outer event fire then reach to target event.
                    // by default event capture has false. We need to write true value for enable capturing event.



// Task 8: Browser Rendering Pipeline Section:
// renderin_pipeline.html file



// 🌟 Bonus Features: 
// I am implimenting Local Storage Integration.