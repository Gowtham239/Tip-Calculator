const billAmount = document.querySelector("#billAmount");
let percentageTip = document.querySelector("#percentageTip");
const tipAmount = document.querySelector("#tipAmount");
const totalAmount = document.querySelector("#totalAmount");

const message = document.querySelector(".error-message");
const calculatorButton = document.querySelector("#calculate-button");

function getValues() {
  const billAmountValues = billAmount.value;
  const percentageTipValues = percentageTip.value;
  if(billAmountValues === "" || percentageTipValues === "") {
    message.textContent = "* Please enter a valid input";
  } else {
    message.textContent = "";

    const calculatedTip = (parseInt(percentageTipValues)/100) * parseInt(billAmountValues);
    const total = parseInt(billAmountValues) + calculatedTip;

    tipAmount.value = calculatedTip;
    totalAmount.value = total;
  }
}

calculatorButton.addEventListener("click", getValues);
