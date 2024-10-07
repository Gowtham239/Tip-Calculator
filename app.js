const billAmount = document.querySelector("#billAmount");
let percentageTip = document.querySelector("#percentageTip");
const tipAmount = document.querySelector("#tipAmount");
const totalAmount = document.querySelector("#totalAmount");

const message = document.querySelector(".error-message");
const calculatorButton = document.querySelector("#calculate-button");

function getValues() {
  const billAmountValues = parseInt(billAmount.value);
  const percentageTipValues = parseInt(percentageTip.value);
  if(billAmountValues === "" || percentageTipValues === "") {
    message.textContent = "* Please enter a valid input";
  } else {
    message.textContent = "";

    const calculatedTip = (percentageTipValues)/100 * billAmountValues;
    const total = billAmountValues + calculatedTip;
    calculatorButton.style.backgroundColor = "#f08080";

    tipAmount.textContent = calculatedTip;
    totalAmount.textContent = total;
  }
}

calculatorButton.addEventListener("click", getValues);
