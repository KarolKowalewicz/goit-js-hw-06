const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const value = event.target.value;

  if (value.length === 0) {
    input.classList.remove("valid", "invalid");
  } else if (value.length === parseInt(dataLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
