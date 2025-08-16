document.addEventListener("DOMContentLoaded", () => {
  // THIS LINE WILL ENSURE THAT JS WILL WORK AFTER THE HTML AND CSS WILL LOAD

  const form = document.getElementById("form");
  const inputExpense = document.getElementById("inputExpense");
  const inputAmount = document.getElementById("inputAmount");
  const formBtn = document.getElementById("formBtn");
  const ExpenseList = document.getAnimations("ExpenseList");
  const totalExpense = document.getElementById("totalExpense");

  let expencesarr = [];
  let TotalAmount = calculate();

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
    TotalAmount = calculate();
    totalExpense.textContent = `Total : $${TotalAmount}`;
  }

  function randerExpenses() {
    expencesarr.forEach((item) => {});
  }
});
