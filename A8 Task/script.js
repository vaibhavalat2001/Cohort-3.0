const login = document.querySelector(".login");
const loginLink = document.querySelector(".loginLink");
const loginForm = document.querySelector(".loginForm");
const closeLog = document.querySelector(".closeLog");
const register = document.querySelector(".register");
const regLink = document.querySelector(".regLink");
const registerForm = document.querySelector(".registerForm");
const closeReg = document.querySelector(".closeReg");
const logo = document.querySelector(".logo");
const mainPage = document.querySelector(".mainPage");
const logOut = document.querySelector(".logOut");
const userLogin = document.querySelector(".userLogin");
const addTrans = document.querySelector(".addTrans");
const newTransBtn = document.querySelector(".newTransBtn");
const close = document.querySelector(".close");
const settingBtn = document.querySelector(".settingBtn");
const setting = document.querySelector(".setting");
const dashboardBtn = document.querySelector(".dashboardBtn");
const dashboard = document.querySelector(".dashboard");
const cashChart = document.querySelector("#cashChart");
const transForm = document.querySelector(".transForm");
const currentDate = document.querySelector("#currentDate");
const currentBal = document.querySelector(".currentBal");
const totalInc = document.querySelector(".totalInc");
const totalExp = document.querySelector(".totalExp");
const totalTrans = document.querySelector(".totalTrans");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");
const proDetails = document.querySelector(".proDetails");
const proName = document.querySelector("#proName");
const currency = document.querySelector("#currency");
const allTrans = document.querySelector(".allTrans");
const resetBtn = document.querySelector(".resetBtn");
const body = document.body;
const humburger = document.querySelector(".humburger");
const aside = document.querySelector("aside");
const asideBtn = document.querySelector(".asideBtn");
const asideClose = document.querySelector(".asideClose");
const search = document.querySelector(".search");
const filterTrans = document.querySelector("#filterTrans");

// logo
logo.addEventListener("click", () => {
  dashboard.classList.remove("hidden");
  dashboard.classList.add("sm:grid");
  dashboard.classList.add("max-sm:grid");
  dashboardBtn.classList.add("bg-blue-100", "text-blue-800", "font-semibold");
  setting.classList.add("hidden");
  settingBtn.classList.remove("bg-blue-100", "text-blue-800", "font-semibold");
});

// Register
regLink.addEventListener("click", () => {
  login.classList.add("hidden");
  register.classList.remove("hidden");
});

closeReg.addEventListener("click", () => {
  register.classList.add("hidden");
});

// Login
loginLink.addEventListener("click", () => {
  login.classList.remove("hidden");
  register.classList.add("hidden");
});

closeLog.addEventListener("click", () => {
  login.classList.add("hidden");
});

userLogin.addEventListener("click", () => {
  if (userPro && userPro.length > 0) {
  } else {
    login.classList.remove("hidden");
  }
});

logOut.addEventListener("click", () => {
  localStorage.removeItem("user");
  userLogin.textContent = "User login";
  login.classList.remove("hidden");

  // transactions = transactionsData();
  calTrans();
  newTrans();
  renderChart();
  userProfile();
  proSetting();
});

function regUsers() {
  return JSON.parse(localStorage.getItem("registeredUser")) || [];
}
let regUser = regUsers();

function userProfile() {
  return JSON.parse(localStorage.getItem("user")) || [];
}
let userPro = userProfile();

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let loginName = e.target.name.value.trim().toLowerCase();
  let loginPass = e.target.pass.value.trim().toLowerCase();

  let exists = regUser.some(
    (u) => u.name === loginName && u.pass === loginPass,
  );
  if (exists) {
    login.classList.add("hidden");
    mainPage.classList.remove("hidden");
    userLogin.innerHTML = loginName.split(" ")[0];
    let currency = regUser.map((u) => {
      if (u.name === loginName) return u.currency;
    });

    localStorage.setItem(
      "user",
      JSON.stringify([loginName, currency.toString()]),
    );

    transactions = transactionsData();
    userPro = userProfile();
    calTrans();
    newTrans();
    proSetting();
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
  if (userPro && userPro.length > 0) {
    userLogin.textContent = userPro[0].split(" ")[0] || "User login";
  }
};
logged();

// *** left side functionality:
// dashboard & setting
settingBtn.addEventListener("click", () => {
  dashboard.classList.add("hidden");
  dashboard.classList.toggle("sm:grid");
  dashboard.classList.toggle("max-sm:grid");
  dashboardBtn.classList.remove(
    "bg-blue-100",
    "text-blue-800",
    "font-semibold",
  );
  setting.classList.remove("hidden");
  aside.classList.toggle("max-lg:hidden");
  settingBtn.classList.add("bg-blue-100", "text-blue-800", "font-semibold");
});

dashboardBtn.addEventListener("click", () => {
  dashboard.classList.remove("hidden");
  dashboard.classList.toggle("sm:grid");
  dashboard.classList.toggle("max-sm:grid");
  aside.classList.toggle("max-lg:hidden");
  dashboardBtn.classList.add("bg-blue-100", "text-blue-800", "font-semibold");
  setting.classList.add("hidden");
  settingBtn.classList.remove("bg-blue-100", "text-blue-800", "font-semibold");
});

// Add new Transaction
newTransBtn.addEventListener("click", () => {
  addTrans.classList.toggle("hidden");
  aside.classList.add("max-lg:hidden");
  today();
});

close.addEventListener("click", () => {
  addTrans.classList.add("hidden");
  transForm.reset();
});

// Current Date
let today = () => {
  currentDate.value = new Date().toISOString().split("T")[0];
};

// Adding Transactions in the form

function transactionsData() {
  return JSON.parse(localStorage.getItem(`transactions_${userPro[0]}`)) || [];
}
let transactions = transactionsData();

let index = null;
transForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userPro = userProfile();
  transactions = transactionsData();

  const formData = new FormData(transForm);
  let type = formData.get("type");
  let dec = formData.get("dec");
  let amt = formData.get("amt");
  let date = formData.get("date");
  let cat = formData.get("cat");

  if (index === null) {
    transactions.push({
      type,
      dec,
      amt,
      date,
      cat,
    });
  } else {
    transactions[index] = {
      type,
      dec,
      amt,
      date,
      cat,
    };
    index = null;
  }
  if (userPro.some((data) => data)) {
    localStorage.setItem(
      `transactions_${userPro[0]}`,
      JSON.stringify(transactions),
    );

    calTrans();
    newTrans();
  } else {
    alert("Please Login your Account.");
    login.classList.remove("hidden");
  }

  // aside.classList.toggle("max-lg:hidden");
  transForm.reset();
  addTrans.classList.add("hidden");
});

let chart;

// Calculation income and expenses
function calTrans() {
  let income = 0;
  let expenses = 0;

  transactions = transactionsData();
  userPro = userProfile();

  if (transactions.some((trans) => trans)) {
    transactions.forEach((tran) => {
      if (tran.type === "income") {
        income += Number(tran.amt);
      } else {
        expenses += Number(tran.amt);
      }
    });
  }

  transData(income, expenses);
  renderChart(income, expenses);
}
calTrans();

// represent transition on UI
function transData(inc = 0, exp = 0) {
  transactions = transactionsData();
  userPro = userProfile();

  let exists = transactions.some((data) => data);
  if (exists && userPro.length > 0) {
    currentBal.textContent = `${userPro[1][4]}${inc - exp}`;
    totalInc.textContent = `${userPro[1][4]}${inc}`;
    totalExp.textContent = `${userPro[1][4]}${exp}`;
    totalTrans.textContent = transactions.length;
  } else {
    currentBal.textContent = "₹0.00";
    totalInc.textContent = "₹0.00";
    totalExp.textContent = "₹0.00";
    totalTrans.textContent = "0";
  }
}

// Cash Chart
function renderChart(inc = 0, exp = 0) {
  if (chart) {
    chart.destroy();
  }

  chart = new Chart(cashChart, {
    type: "bar",
    data: {
      labels: ["Income vs Expenses"],
      datasets: [
        {
          label: "Income",
          data: [inc],
          backgroundColor: "#166534",
          borderRadius: 5,
        },
        {
          label: "Expenses",
          data: [exp],
          backgroundColor: "#991B1B",
          borderRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// Dark and Light mode
let saveTheme = localStorage.getItem("theme");
if (saveTheme === "dark") {
  document.documentElement.classList.add("dark");
  circle.classList.add("translate");
  toggle.classList.toggle("bg-gray-300");
  toggle.classList.toggle("bg-blue-500");
}

toggle.addEventListener("click", () => {
  circle.classList.toggle("translate");
  toggle.classList.toggle("bg-gray-300");
  toggle.classList.toggle("bg-blue-500");
  document.documentElement.classList.toggle("dark");
  body.classList.toggle("bg-gray-100");
  // body.classList.toggle("")
  localStorage.setItem(
    "theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );
});

// All Transactions
function newTrans(fill = "all", search) {
  allTrans.innerHTML = "";
  let div = document.createElement("div");
  transactions = transactionsData();
  userPro = userProfile();

  transactions.forEach((data, ind) => {
    if (fill === "income" && data.type !== "income") return;
    if (fill === "expense" && data.type !== "expense") return;
    if (search && !data.dec.includes(search.trim().toLowerCase())) return;

    const sign =
      data.type === "income" ? `+${userPro[1][4]}` : `-${userPro[1][4]}`;
    const signClass =
      data.type === "income" ? "text-green-600" : "text-red-600";

    div.innerHTML += `<div class="h-fit grid md:text-lg sm:text-base max-sm:text-sm my-4 gap-x-2 items-center grid-cols-[1fr_1fr_1fr_1fr_1fr]">
                        <span class="">${data.date}</span>
                        <span class="font-bold">${data.dec}</span>
                        <span class="pl-3 lg:w-[12vw] rounded capitalize text-black bg-gray-100">${data.cat}</span>
                        <span class="${signClass} font-semibold">${sign}${data.amt}</span>                
                        <div>
                        <i onclick="edit(${ind})" class="cursor-pointer active:scale-90 text-xl text-blue-700 mr-5 max-sm:mr-1 ri-pencil-ai-fill"></i>
                        <i onclick="del(${ind})" class="cursor-pointer active:scale-90 text-xl text-red-700 ri-delete-bin-2-fill"></i>
                        </div>
                        </div>
                        <hr class="w-full border border-gray-300">`;
  });
  if (localStorage.getItem("user")) {
    allTrans.append(div);
  }
}
newTrans();

// Filter Transaction
filterTrans.addEventListener("change", () => {
  newTrans(filterTrans.value, search.value);
});

// Search Transaction
search.addEventListener("input", () => {
  newTrans(filterTrans.value, search.value);
})


// Edit Transaction
function edit(ind) {
  index = ind;
  newTransBtn.click();
  let data = transactions[ind];

  // const formData = new FormData(transForm);

  transForm[0].value = data.type;
  transForm[1].value = data.dec;
  transForm[2].value = data.amt;
  transForm[3].value = data.date;
  transForm[4].value = data.cat;
}

// Delete Transaction
function del(ind) {
  transactions.splice(ind, 1);
  localStorage.setItem(
    `transactions_${userPro[0]}`,
    JSON.stringify(transactions),
  );
  newTrans();
  calTrans();
}

// Reset All Transactions
resetBtn.addEventListener("click", () => {
  if (userPro.some((data) => data)) {
    let yes = confirm("Are you want to delete all transaction data?");
    if (yes) {
      localStorage.removeItem(`transactions_${userPro[0]}`);
      transactionsData();
      calTrans();
      newTrans();
    }
  } else {
    login.classList.toggle("hidden");
  }
});

// Profile Setting
function proSetting() {
  userPro = userProfile();
  let proData = userPro.some((data) => data);

  if (proData) {
    proName.value = userPro[0];
    currency.value = userPro[1];
  } else {
    proName.value = "User login";
    currency.value = "INR(₹)";
  }
}
proSetting();

proDetails.addEventListener("submit", (e) => {
  e.preventDefault();
  userPro = userProfile();
  regUser = regUsers();

  let name = e.target[0].value.trim().toLowerCase();
  let currency = e.target[1].value;
  if (userPro.some((data) => data)) {
    regUser.map((user) => {
      if (user.name === userPro[0]) {
        let change;
        if (name !== userPro[0] && currency !== userPro[1]) {
          change = confirm(
            "Are you want to change your profile name and currency?",
          );
        } else if (name !== userPro[0]) {
          change = confirm("Are you want to change your profile name?");
        } else {
          change = confirm("Are you want to change your the currency?");
        }

        if (change) {
          user.name = name;
          user.currency = currency;
          userLogin.innerHTML = name.split(" ")[0];
          localStorage.setItem("user", JSON.stringify([name, currency]));
        }
      }
    });
    localStorage.setItem("registeredUser", JSON.stringify(regUser));

    if (transactions.some((trans) => trans)) {
      localStorage.removeItem(`transactions_${userPro[0]}`);
      userPro = userProfile();
      localStorage.setItem(
        `transactions_${userPro[0]}`,
        JSON.stringify(transactions),
      );
    }

    proSetting();
    newTrans();
    calTrans();
  } else {
    alert("Please Login your Account.");
    login.classList.remove("hidden");
  }

  dashboardBtn.click();
  aside.classList.add("max-lg:hidden");
  setting.classList.add("hidden");
  dashboard.classList.remove("hidden");
});

// Humburger
humburger.addEventListener("click", () => {
  aside.classList.remove("max-lg:hidden");
  aside.classList.replace("px-8", "px-2");
  asideBtn.classList.replace("sm:text-lg", "max-sm:text-base");
  aside.classList.add(
    "max-lg:w-[250px]",
    "max-sm:w-[180px]",
    "max-md:text-xl",
    "max-lg:absolute",
    "max-lg:top-0",
    "max-lg:bottom-0",
  );
});

asideClose.addEventListener("click", () => {
  aside.classList.add("max-lg:hidden");
});
