const btn = document.querySelector(".btn");
const fName = document.querySelector(`input[name="first-name"]`);
const lName = document.querySelector(`input[name="last-name"]`);
const email = document.querySelector(`input[name="email"]`);
const password = document.querySelector(`input[name="password"]`);

const handleSubmit = (e) => {
  e.preventDefault();
  if (!fName || !lName || !email || !password) {
    console.log("error");
  }
};

btn.addEventListener("click", handleSubmit);
