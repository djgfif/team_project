const userData = JSON.parse(localStorage.getItem('userData'));
const emailInfo= document.getElementById("email-info");
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const passwordSubmit = document.getElementById("password-submit");
const userInfo = document.getElementById("user-info");
const userEmail = document.getElementById("email");
const userName = document.getElementById("name")
var loginYN = JSON.parse(localStorage.getItem('loginYN'));

emailInfo.textContent = userData.email;

passwordSubmit.addEventListener("click", function(event) {
  event.preventDefault();

  const enteredPassword = passwordInput.value;
  const storedPassword = userData.password;
  
  if (enteredPassword === storedPassword) {
    // Password is correct, show user info
    passwordForm.classList.add("hidden");
    userInfo.classList.remove("hidden")
    userEmail.textContent = userData.email;
    document.getElementById("password").textContent = "********"; // You can choose to hide or mask the password
    userName.textContent = userData.name;
    document.getElementById("phone").textContent = userData.phone;
  } else {
    alert("비밀번호가 일치하지 않습니다.");
  }
});

// Select withdraw button element
const withdrawButton = document.getElementById("withdraw-button");

// Handle withdraw button click
withdrawButton.addEventListener("click", handleWithdrawal);

// Function to handle membership withdrawal
function handleWithdrawal() {
  // Show confirmation dialog
  const confirmed = confirm("정말로 회원탈퇴하시겠습니까?");

  if (confirmed) {
    loginYN = false;
    // Perform withdrawal actions (e.g., clear user data, redirect to home page)
    localStorage.removeItem("userData");
    localStorage.setItem("loginYN", JSON.stringify(loginYN));
    window.location.href = "index.html";
  }
}
