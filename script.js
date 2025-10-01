let expenses = [];

// Добавление расходов
document.getElementById("addExpense").addEventListener("click", () => {
  let expenseInput = document.getElementById("expenseValue");
  let value = parseFloat(expenseInput.value);

  if (!isNaN(value) && value > 0) {
    expenses.push(value);
    expenseInput.value = "";
    renderExpenses();
  }
});

function renderExpenses() {
  let list = document.getElementById("expenseList");
  list.innerHTML = "";

  expenses.forEach((exp, index) => {
    let li = document.createElement("li");
    li.textContent = `Расход ${index + 1}: ${exp} сом`;
    list.appendChild(li);
  });

  let total = expenses.reduce((a, b) => a + b, 0);
  document.getElementById("totalExpenses").innerText =
    `Общие расходы: ${total} сом`;
}

// Подсчёт дохода
document.getElementById("calculate").addEventListener("click", () => {
  let kass = parseFloat(document.getElementById("kass").value) || 0;
  let cash = parseFloat(document.getElementById("cash").value) || 0;
  let qr = parseFloat(document.getElementById("qr").value) || 0;

  let totalIncome = kass + cash + qr;
  let totalExpenses = expenses.reduce((a, b) => a + b, 0);

  let netIncome = totalIncome - totalExpenses;

  document.getElementById("result").innerText =
    `Чистый доход за день: ${netIncome} сом`;
});

// Переключатель темы
document.getElementById("themeToggle").addEventListener("click", () => {
  let body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    document.getElementById("themeToggle").innerText = "Тёмная тема";
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    document.getElementById("themeToggle").innerText = "Светлая тема";
  }
});
