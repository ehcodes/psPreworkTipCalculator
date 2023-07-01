const button = document.querySelectorAll("button");
const output = document.querySelector(".output");
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    const cost = document.querySelector("input");
    let tipPercentage = button[i].value * 100;
    let tip = (cost.value * button[i].value).toFixed(2);
    let calculatedOutputMsg = `<p>$${tip} should be left as a ${tipPercentage}% tip on your bill of $${cost.value}</p>`;
    let emptyInputMsg = '<p>Bummer, it looks like you forgot to enter the numeric value of your bill.</p>'
    if (tip > 0) {
      output.innerHTML = calculatedOutputMsg;
    } else {
      output.innerHTML = emptyInputMsg;
    }
  })
}