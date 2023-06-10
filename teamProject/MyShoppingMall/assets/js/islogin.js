window.onload = function() {
  var loginYN = JSON.parse(localStorage.getItem('loginYN'));

  if (loginYN) {
    // User is logged in
    const userData = JSON.parse(localStorage.getItem('userData'));
    const textForm = document.getElementById("text-area");
    const loginForm = document.getElementById("login-area");
    const userFrom = document.createElement("div");
    userFrom.classList.add("d-flex", "align-items-center");

    loginForm.style.display = "none";

    const icon = document.createElement("i");
    icon.classList.add("bi", "bi-person", "me-2", "display-6"); // Add "display-1" class to make the icon larger

    const username = document.createElement("span");
    username.textContent = userData.name + "님";
    username.classList.add("fw-bold");

    const logout = document.createElement("button");
    logout.textContent = "로그아웃";
    logout.addEventListener("click", function() {
      // Perform logout actions
      localStorage.setItem('loginYN', false);
      location.reload(); // Refresh the page after logout
    });

    userFrom.appendChild(icon);
    userFrom.appendChild(username);
    userFrom.appendChild(logout);

    textForm.appendChild(userFrom);
  } else {
    // User is not logged in
    const loginForm = document.getElementById("login-area");
    loginForm.style.display = "inline";
  }
};
