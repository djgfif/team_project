// Retrieve user data from local storage
const userData = JSON.parse(localStorage.getItem('userData'));
    
// Select input elements
const emailInput = document.getElementById("join-email-input");
const passwordInput = document.getElementById("join-password-input");
const passwordCheckInput = document.getElementById("join-passwordCheck-input");
const nameInput = document.getElementById("join-name-input");
const phoneInput = document.getElementById("join-phone-input");

// Set initial values
emailInput.placeholder = userData.email;
nameInput.placeholder = userData.name;
phoneINput.placeholder = userData.phone;
// Handle form submission
const form = document.getElementById("edit-form");
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Perform form validation and update user data
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

  // Redirect or display success message
  // Replace the following line with your desired behavior
  alert("회원 정보가 수정되었습니다.");
});

// Function to display error message
function showError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.textContent = message;
}