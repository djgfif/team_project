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

    const userinfo = document.createElement("a");
    userinfo.href = "userinfo.html";

    const icon = document.createElement("i");
    icon.classList.add("bi", "bi-person", "me-2", "display-6"); 

    const username = document.createElement("span");
    username.textContent = userData.name + "님";
    username.classList.add('fw-bold', 'mx-2');

    const logout = document.createElement("button");
    logout.textContent = "로그아웃";
    logout.classList.add('btn', 'btn-outline-light', 'btn-sm', 'ms-auto');
    logout.addEventListener("click", function() {
      // Perform logout actions
      localStorage.setItem('loginYN', false);
      location.reload(); // Refresh the page after logout
    });
    userinfo.appendChild(icon);

    userFrom.appendChild(userinfo);
    userFrom.appendChild(username);
    userFrom.appendChild(logout);

    textForm.appendChild(userFrom);
  } else {
    // User is not logged in
    const loginForm = document.getElementById("login-area");
    loginForm.style.display = "inline";
  }
};
