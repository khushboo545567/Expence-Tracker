document.addEventListener("DOMContentLoaded", () => {
  // THIS LINE WILL ENSURE THAT JS WILL WORK AFTER THE HTML AND CSS WILL LOAD

  const form = document.getElementById("form");
  const inputExpense = document.getElementById("inputExpense");
  const inputAmount = document.getElementById("inputAmount");
  const formBtn = document.getElementById("formBtn");
  const ExpenseList = document.getElementById("ExpenseList");
  const totalExpense = document.getElementById("totalExpense");

  let expencesarr = JSON.parse(localStorage.getItem("expenses")) || [];
  let TotalAmount = updateTotal();
  randerExpenses();

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = inputExpense.value.trim();
    const amount = parseFloat(inputAmount.value.trim());

    if (name !== "" && amount > 0 && !isNaN(amount)) {
      const newExpense = {
        id: Date.now(),
        name, // name : name
        amount, // amount : amount
      };
      expencesarr.push(newExpense);
      saveExpenseLocal();
      randerExpenses();
      updateTotal();

      inputExpense.value = "";
      inputAmount.value = "";
    }
  });
  function calculate() {
    return expencesarr.reduce((acc, expense) => acc + expense.amount, 0);
  }

  function saveExpenseLocal() {
    localStorage.setItem("expenses", JSON.stringify(expencesarr));
  }

  function updateTotal() {
    const total = calculate();
    totalExpense.textContent = `Total : $${total}`;
    return total;
  }

  function randerExpenses() {
    ExpenseList.textContent = "";
    expencesarr.forEach((item) => {
      const li = document.createElement("li");
      li.className =
        "p-3 bg-slate-700 flex justify-between items-center rounded-md mb-3";
      li.innerHTML = `
      <p class="text-white">${item.name} - $${item.amount}</p>
      <button id="${item.id}" class="bg-blue-700 px-3 py-1 rounded-md text-white">Delete</button>
      `;
      ExpenseList.appendChild(li);
    });
  }
  ExpenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("id"));
      expencesarr = expencesarr.filter((expense) => expenseId !== expense.id);

      saveExpenseLocal();
      randerExpenses();
      updateTotal();
    }
  });
});
