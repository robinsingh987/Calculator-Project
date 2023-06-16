const result = document.getElementById("result");

function buttonClicked(value) {
  if (value === "=") {
    result.value = eval(result.value);
  } else {
    result.value += value;
  }
}

function clearResult() {
  result.value = "";
}