const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // 1. Check if all fields are filled
  if (name === "" || email === "" || password === "") {
    message.textContent = "Please fill in all fields!";
    message.className = "error";
    return;
  }

  // 2. Save the details in localStorage
  const user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));

  // 3. Show signup successful message
  message.textContent = "Signup successful!";
  message.className = "success";

  // Optional: reset the form
  form.reset();
});
