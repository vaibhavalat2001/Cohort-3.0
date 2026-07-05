const login = document.querySelector(".login");
const regLink = document.querySelector(".regLink");
const register = document.querySelector(".register");
const loginLink = document.querySelector(".loginLink");
const loginForm = document.querySelector(".loginForm");
const registerForm = document.querySelector(".registerForm");
const mainPage = document.querySelector(".mainPage");
const logOut = document.querySelector(".logOut");
const userLogin = document.querySelector(".userLogin");
const addTrans = document.querySelector(".addTrans");
const newTransBtn = document.querySelector(".newTransBtn");
const close = document.querySelector(".close");
const settingBtn = document.querySelector(".settingBtn");
const setting = document.querySelector(".setting");
const dashboardBtn = document.querySelector(".dashboardBtn")
const dashboard = document.querySelector(".dashboard");
const cashChart = document.querySelector("#cashChart");
const transForm = document.querySelector(".transForm");
const currentDate = document.querySelector("#currentDate");

// Register
regLink.addEventListener("click", () => {
  login.classList.add("hidden");
  register.classList.remove("hidden");
});

// Login 
loginLink.addEventListener("click", () => {
  login.classList.remove("hidden");
  register.classList.add("hidden");
});

userLogin.addEventListener("click", () => {
  login.classList.remove("hidden");
})

logOut.addEventListener("click", () => {
  userPro[0] = "User Login";
    localStorage.setItem("user", JSON.stringify(userPro));
})

let regUser = JSON.parse(localStorage.getItem("registeredUser")) || [];  
let userPro = JSON.parse(localStorage.getItem("user")) || [];

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let loginName = e.target.name.value.trim().toLowerCase();
  let loginPass = e.target.pass.value.trim().toLowerCase();

  let exists = regUser.some((u) => u.name === loginName && u.pass === loginPass);
  if (exists) {
    login.classList.add("hidden");
    mainPage.classList.remove("hidden");
    userLogin.innerHTML = loginName;
    let currency = regUser.map((u) => {
      if (u.name === loginName) return u.currency;
    });

    localStorage.setItem("user", JSON.stringify([loginName, currency.toString()]));
  } else {
    alert("Invalid user or password");
  }
  
  loginForm.reset();
});


registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target.name.value.trim().toLowerCase();
  let pass = e.target.pass.value.trim().toLowerCase();
  let currency = "rs";
  let exists = regUser.some((u) => u.name === name && u.pass === pass);

  if (exists) {
    alert("Username already exists! Please choose another.");
  } else {
    regUser.push({
      name,
      pass,
      currency: "INR(₹)",
    });
    alert("Registration successful! You can now log in.");
    localStorage.setItem("registeredUser", JSON.stringify(regUser));
    register.classList.add("hidden");
    login.classList.remove("hidden");
  }
  registerForm.reset();
});

// registeredUsers
let logged = () => {
    login.classList.add("hidden");
    mainPage.classList.remove("hidden");
    userLogin.innerHTML = userPro[0];
}
logged();


// *** left side functionality:
// dashboard & setting 
settingBtn.addEventListener("click", () => {
  dashboard.classList.add("hidden");
  dashboardBtn.classList.remove("bg-blue-100", "text-blue-800", "font-semibold");
  setting.classList.remove("hidden");
  settingBtn.classList.add("bg-blue-100", "text-blue-800", "font-semibold");

})

dashboardBtn.addEventListener("click", () => {
  dashboard.classList.remove("hidden");
  dashboardBtn.classList.add("bg-blue-100", "text-blue-800", "font-semibold");
  setting.classList.add("hidden");
  settingBtn.classList.remove("bg-blue-100", "text-blue-800", "font-semibold");
})


// Add new Transaction
newTransBtn.addEventListener("click", () => {
    addTrans.classList.toggle("hidden");
})

addTrans.addEventListener("click", (e) => {

})

close.addEventListener("click", () => {
  addTrans.classList.add("hidden");
})


// Adding Transaction
currentDate.value = new Date().toISOString().split("T")[0];

let transactions = JSON.parse(localStorage.getItem(`transactions_${userPro[0]}`)) || [];
transForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let type = e.target[0].value;
  let dec = e.target[1].value;
  let amt = e.target[2].value;
  let date = e.target[3].value;
  let cat = e.target[4].value;

  transactions.push({
    type, 
    dec,
    amt, 
    date,
    cat
  });

  localStorage.setItem(`transactions_${userPro[0]}`, JSON.stringify(transactions));
})


// Cash Chart
let exin = transactions[0].type;
if (exin === "income") {
  let inAmount = transactions[0].amt;
} else {
  let exAmount
}



new Chart(cashChart, {
  type: "bar",
  data: {
    labels: ["Income vs Expenses"],
    datasets: [
      {
        label: "Income",
        data: [1000],
        backgroundColor: "#166534",
        borderRadius: 5
      },
      {
        label: "Expenses",
        data: [2000],
        backgroundColor: "#991B1B",
        borderRadius: 5
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top"
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})


// transactions.map((trans) => console.log(trans.type))
// console.log(transactions)