// Pure function for Jasmine tests
function calculate(principal, rate, years) {
  return principal * rate * years;
}

// Event handler - prevents TypeErrors
function calculateInterest() {
  // ✅ parseFloat prevents TypeError on string inputs
  let principal = parseFloat(document.getElementById("principal").value);  // ✅ "principal" ID
  let rate = parseFloat(document.getElementById("rate").value) / 100;      // ✅ Converts % to decimal
  let years = parseFloat(document.getElementById("years").value);
  
  if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
    document.getElementById("interest").innerHTML = "Invalid input";
    return;
  }
  
  let interest = calculate(principal, rate, years);
  document.getElementById("interest").innerHTML = interest.toFixed(2);
}

// Global binding for onclick
window.calculateInterest = calculateInterest;
