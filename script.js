function calculate(principal, rate, years) {
  return principal * rate * years;
}

function calculateInterest() {
  let principal = parseFloat(document.getElementById("principal").value);  // ✅ Converts to number
  let rate = parseFloat(document.getElementById("rate").value) / 100;      // ✅ Converts + /100
  let years = parseFloat(document.getElementById("years").value);          // ✅ Converts to number
  
  if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
    document.getElementById("interest").innerHTML = "Please enter valid numbers";
    return;
  }
  
  let interest = calculate(principal, rate, years);
  document.getElementById("interest").innerHTML = interest.toFixed(2);
}

window.calculate = calculateInterest;  // ✅ Fixes onclick binding
