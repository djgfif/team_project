window.onload = function() {
  const loginYN = JSON.parse(localStorage.getItem('loginYN'));

  if (loginYN) {
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

    userFrom.appendChild(icon);
    userFrom.appendChild(username);

    textForm.appendChild(userFrom);
  } else {
    loginForm.style.display = "inline";
    userFrom.style.display = "none";
  }
};
