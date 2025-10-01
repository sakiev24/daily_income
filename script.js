const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? "☀️" : "🌙";
});

const addExpenseBtn = document.getElementById('add-expense');
const expensesDiv = document.getElementById('expenses');

addExpenseBtn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.className = 'expense-input';
  div.innerHTML = `
    <input type="number" placeholder="Расход">
    <button class="remove-expense">×</button>
  `;
  expensesDiv.appendChild(div);
});

expensesDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-expense')) {
    e.target.parentElement.remove();
  }
});

document.getElementById('calculate').addEventListener('click', () => {
  const cash = +document.getElementById('cash').value || 0;
  const kkm = +document.getElementById('kkm').value || 0;
  const qr = +document.getElementById('qr').value || 0;

  let expenses = 0;
  document.querySelectorAll('#expenses input').forEach(input => {
    expenses += +input.value || 0;
  });

  const totalIncome = cash + kkm + qr;
  const netIncome = totalIncome - expenses;

  document.getElementById('result').innerText = 
    `Общий доход: ${totalIncome} сом\nЧистыми: ${netIncome} сом`;
});

// const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('.nav');

// menuToggle.addEventListener('click', () => {
//   if (nav.style.display === 'flex') {
//     nav.style.display = 'none';
//   } else {
//     nav.style.display = 'flex';
//     nav.style.flexDirection = 'column';
//     nav.style.position = 'absolute';
//     nav.style.top = '60px';
//     nav.style.right = '20px';
//     nav.style.background = 'gray';
//     nav.style.padding = '20px';
//     nav.style.borderRadius = '12px';
//   }
// });
