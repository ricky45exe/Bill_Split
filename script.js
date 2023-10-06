function split() {
    let amount = document.getElementById("amount");
    let persons = document.getElementById("persons");
    let bill = (amount.value / persons.value).toFixed(2);
    document.getElementById("title").innerText = "₹" + bill + "/-";
  }