// Get elements
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const closeLogin = document.getElementById("closeLogin");
const closeRegister = document.getElementById("closeRegister");
const enrollButtons = document.querySelectorAll(".enrollBtn");

// Show login form
loginBtn.addEventListener("click", () => {
  loginForm.style.display = "flex";
});

// Show register form
registerBtn.addEventListener("click", () => {
  registerForm.style.display = "flex";
});

// Close login form
closeLogin.addEventListener("click", () => {
  loginForm.style.display = "none";
});

// Close register form
closeRegister.addEventListener("click", () => {
  registerForm.style.display = "none";
});

// Show register form on enroll
enrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    registerForm.style.display = "flex";
  });
});

// Hide forms when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === loginForm) {
    loginForm.style.display = "none";
  } else if (event.target === registerForm) {
    registerForm.style.display = "none";
  }
});
