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
  }
  // re to c
  else if (fromUnit === "re" && toUnit === "c") {
    result = (5 / 4) * value;
  }
  // c to re
  else if (fromUnit === "c" && toUnit === "re") {
    result = (4 / 5) * value;
  }
  // re to f
  else if (fromUnit === "re" && toUnit === "f") {
    result = (9 / 4) * value + 32;
  }
  // f to re
  else if (fromUnit === "f" && toUnit === "re") {
    result = (4 / 9) * (value - 32);
  }
  // re to k
  else if (fromUnit === "re" && toUnit === "k") {
    result = (5 / 4) * value + 273.15;
  }
  // k to re
  else if (fromUnit === "k" && toUnit === "re") {
    result = (4 / 5) * (value - 273.15);
  } else {
    result = value;
  }

  if (toUnit === "k") {
    document.getElementById("result").innerText =
      result.toFixed(2) + " " + toUnit.toUpperCase();
  } else {
    document.getElementById("result").innerText =
      result.toFixed(2) + " º" + toUnit.toUpperCase();
  }
}
