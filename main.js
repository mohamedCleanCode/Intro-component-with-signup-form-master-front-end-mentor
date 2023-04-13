const btn = document.querySelector(".btn");
const fName = document.querySelector(`input[name="first-name"]`);
const lName = document.querySelector(`input[name="last-name"]`);
const email = document.querySelector(`input[name="email"]`);
const password = document.querySelector(`input[name="password"]`);
const formItem = document.querySelectorAll(`.form-item`);
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const handleSubmit = (e) => {
  e.preventDefault();
  if (!fName.value) {
    fName.parentElement.classList.add("show-error");
    fName.style.borderColor = "hsl(0, 100%, 74%)";
  } else {
    fName.parentElement.classList.remove("show-error");
    fName.style.borderColor = "hsl(246, 25%, 77%)";
  }
  if (!lName.value) {
    lName.parentElement.classList.add("show-error");
    lName.style.borderColor = "hsl(0, 100%, 74%)";
  } else {
    lName.parentElement.classList.remove("show-error");
    lName.style.borderColor = "hsl(246, 25%, 77%)";
  }
  if (!email.value) {
    email.parentElement.classList.add("show-error");
    email.style.borderColor = "hsl(0, 100%, 74%)";
    email.placeholder = "email@example.com";
  } else {
    if (email.value.match(validRegex)) {
      email.parentElement.classList.remove("show-error");
      email.style.borderColor = "hsl(246, 25%, 77%)";
    } else {
      email.parentElement.classList.add("show-error");
      email.style.borderColor = "hsl(0, 100%, 74%)";
      email.placeholder = "email@example.com";
    }
  }
  if (!password.value) {
    password.parentElement.classList.add("show-error");
    password.style.borderColor = "hsl(0, 100%, 74%)";
  } else {
    password.parentElement.classList.remove("show-error");
    password.style.borderColor = "hsl(246, 25%, 77%)";
  }
};

btn.addEventListener("click", handleSubmit);
