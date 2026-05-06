// Export for Jasmine tests (added for Part B)
function calculate(principal, rate, years) {
  return principal * rate * years;
}

// DOM event handler - fixes TypeErrors with parseFloat
function calculateInterest() {
  let principal = parseFloat(document.getElementById("principal").value);
  let rate = parseFloat(document.getElementById("rate").value) / 100;
  let years = parseFloat(document.getElementById("years").value);
  
  // Check for invalid inputs
  if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
    document.getElementById("interest").innerHTML = "Please enter valid numbers";
    return;
  }
  
  let interest = calculate(principal, rate, years);
  document.getElementById("interest").innerHTML = interest.toFixed(2);
}

// Global onclick handler (fixes original broken onclick)
window.calculate = calculateInterest;
