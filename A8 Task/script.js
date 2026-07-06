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
const proDetails = document.querySelector(".proDetails");
const proName = document.querySelector("#proName");
const currency = document.querySelector("#currency");
const allTrans = document.querySelector(".allTrans");
const resetBtn = document.querySelector(".resetBtn");

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
});

logOut.addEventListener("click", () => {
  localStorage.removeItem("user");
  userLogin.textContent = "User login";
});

let regUser = JSON.parse(localStorage.getItem("registeredUser")) || [];
let userPro = JSON.parse(localStorage.getItem("user")) || [];

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
    userLogin.innerHTML = loginName;
    let currency = regUser.map((u) => {
      if (u.name === loginName) return u.currency;
    });

    localStorage.setItem(
      "user",
      JSON.stringify([loginName, currency.toString()]),
    );
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
  userLogin.textContent = userPro[0] || "User login";
};
logged();

// *** left side functionality:
// dashboard & setting
settingBtn.addEventListener("click", () => {
  dashboard.classList.add("hidden");
  dashboardBtn.classList.remove(
    "bg-blue-100",
    "text-blue-800",
    "font-semibold",
  );
  setting.classList.remove("hidden");
  settingBtn.classList.add("bg-blue-100", "text-blue-800", "font-semibold");
});

dashboardBtn.addEventListener("click", () => {
  dashboard.classList.remove("hidden");
  dashboardBtn.classList.add("bg-blue-100", "text-blue-800", "font-semibold");
  setting.classList.add("hidden");
  settingBtn.classList.remove("bg-blue-100", "text-blue-800", "font-semibold");
});

// Add new Transaction
newTransBtn.addEventListener("click", () => {
  addTrans.classList.toggle("hidden");
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

let transactions;
let transactionsData = () => {
  transactions = JSON.parse(localStorage.getItem(`transactions_${userPro[0]}`)) || [];
}
transactionsData();

let index = null;

transForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let type = e.target[0].value;
  let dec = e.target[1].value;
  let amt = e.target[2].value;
  let date = e.target[3].value;
  let cat = e.target[4].value;


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
      cat
    }
    index = null;
  }

  localStorage.setItem(
    `transactions_${userPro[0]}`,
    JSON.stringify(transactions),
  );

  calTrans();
  newTrans();
  transForm.reset();
  addTrans.classList.add("hidden");
});


let chart;
// Calculation income and expenses
let calTrans = () => {
  let income = 0;
  let expenses = 0;

  transactions.forEach((tran) => {
    if (tran.type === "income") {
      income += Number(tran.amt);
    } else {
      expenses += Number(tran.amt);
    }
  });

  transData(income, expenses);
  renderChart(income, expenses);
};
calTrans();

// represent transition on UI
function transData(inc = 0, exp = 0) {
  let exists = transactions.some((data) => data !== []);
  if (exists) {
    currentBal.textContent = inc - exp;
    totalInc.textContent = inc;
    totalExp.textContent = exp;
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
// toggle.addEventListener("click", () => {
//   toggle.toggle
// })

// All Transactions
function newTrans() {
  allTrans.innerHTML = "";
  let div = document.createElement("div");
  let sign = "";
  let signClass = "";
  transactions.forEach((data, ind) => {
    if (data.type === "income") {
      sign = "+$";
      signClass = "text-green-600";
    } else {
      sign = "-$";
      signClass = "text-red-600";
    }
    div.innerHTML += `<div class="h-15 grid items-center grid-cols-[1fr_1fr_1fr_1fr_1fr]">
                        <span>${data.date}</span>
                        <span class="font-bold">${data.dec}</span>
                        <span class="pl-3 w-30 rounded bg-gray-100">${data.cat}</span>
                        <span class="${signClass} font-semibold">${sign}${data.amt}</span>                
                        <div>
                          <i onclick="edit(${ind})" class="cursor-pointer active:scale-90 text-xl text-blue-700 mr-5 ri-pencil-ai-fill"></i>
                          <i onclick="del(${ind})" class="cursor-pointer active:scale-90 text-xl text-red-700 ri-delete-bin-2-fill"></i>
                        </div>
                      </div>
                      <hr class="w-full border border-gray-300">`;
  });
  allTrans.append(div);
}
newTrans();

// Edit Transaction
function edit(ind) {
  index = ind;
  newTransBtn.click();
  let data = transactions[ind];

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
  localStorage.removeItem(`transactions_${userPro[0]}`);
  transactionsData();
  calTrans();
  newTrans();
})



// Profile Setting
let proSetting = () => {
  proName.value = userPro[0];
  currency.value = userPro[1];
};
proSetting();

proDetails.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target[0].value;
  let currency = e.target[1].value;
  localStorage.setItem("user", JSON.stringify([name, currency]));
  proSetting();
});
