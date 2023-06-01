window.onload = function() {
  var loginForm = document.getElementById('login-form');

  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get user input values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Retrieve user data from local storage
    var userData = JSON.parse(localStorage.getItem('userData'));

    // Check if the user exists and the password matches
    if (userData && email === userData.email && password === userData.password) {
      // User is authenticated, redirect to success page or perform other actions
      console.log('Login successful');
      window.location.href = 'index.html';
    } else {
      // User is not authenticated, display an error message
      console.log('Invalid credentials');
      alert('Invalid email or password');
    }
  });
};
