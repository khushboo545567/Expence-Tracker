document.addEventListener("DOMContentLoaded", () => {
  // THIS LINE WILL ENSURE THAT JS WILL WORK AFTER THE HTML AND CSS WILL LOAD

  const Expensearr = [];
  const form = document.getElementById("form");
  const inputExpense = document.getElementById("inputExpense");
  const inputAmount = document.getElementById("inputAmount");
  const formBtn = document.getElementById("formBtn");
  const ExpenseList = document.getAnimations("ExpenseList");
  const totalExpense = document.getElementById("totalExpense");

  const Expense = inputExpense.addEventListener("click", (e) => {
    e.target.value;
  });
  const Amount = inputAmount.addEventListener("click", (e) => {
    e.target.value;
  });
  formBtn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});
