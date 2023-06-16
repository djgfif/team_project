// Retrieve user data from local storage
const userData = JSON.parse(localStorage.getItem('userData'));

// Select input elements
const emailInput = document.getElementById("join-email-input");
const passwordInput = document.getElementById("join-password-input");
const passwordCheckInput = document.getElementById("join-passwordCheck-input");
const nameInput = document.getElementById("join-name-input");
const phoneInput = document.getElementById("join-phone-input");

// Set initial values
emailInput.value = userData.email;
nameInput.value = userData.name;
phoneInput.value = userData.phone;

// Handle form submission
const form = document.getElementById("registration-form");
form.addEventListener("submit", handleFormSubmission);

// Function to handle form submission
function handleFormSubmission(event) {
  event.preventDefault(); // Prevent form submission

  // Perform form validation
  const newPassword = passwordInput.value;
  const newPasswordCheck = passwordCheckInput.value;

  if (newPassword !== newPasswordCheck) {
    showError("passwordCheck-error", "비밀번호가 일치하지 않습니다.");
    return;
  }

  // Update user data in local storage
  userData.email = emailInput.value;
  userData.name = nameInput.value;
  userData.phone = phoneInput.value;
  localStorage.setItem("userData", JSON.stringify(userData));

  // Display success message
  displayMessage("회원정보가 수정되었습니다.");

  // Redirect to userinfo.html after a delay
  setTimeout(function() {
    window.location.href = "userinfo.html";
  }, 2000);
}

// Function to display error message
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}

// Function to display success message
function displayMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.className = "success-message";
  messageElement.textContent = message;

  const formContainer = document.querySelector(".form-container");
  formContainer.appendChild(messageElement);

  setTimeout(function() {
    messageElement.remove();
  }, 3000);
}
