function submitForm() {
  let fromUnit = document.getElementById("fromTemp").value;
  let toUnit = document.getElementById("toTemp").value;
  let value = parseFloat(document.getElementById("value").value);

  // c to f
  if (fromUnit === "c" && toUnit === "f") {
    result = (9 / 5) * value + 32;
  }
  // f to c
  else if (fromUnit === "f" && toUnit === "c") {
    result = (5 / 9) * (value - 32);
  }
  // c to k
  else if (fromUnit === "c" && toUnit === "k") {
    result = value + 273.15;
  }
  // k to c
  else if (fromUnit === "k" && toUnit === "c") {
    result = value - 273.15;
  }
  // f to k
  else if (fromUnit === "f" && toUnit === "k") {
    result = (5 / 9) * (value - 32) + 273.15;
  }
  // k to f
  else if (fromUnit === "k" && toUnit === "f") {
    result = (9 / 5) * (value - 273.15) + 32;
  } else {
    result = value;
  }

  document.getElementById("result").innerText =
    result.toFixed(2) + " º" + toUnit.toUpperCase();
}
