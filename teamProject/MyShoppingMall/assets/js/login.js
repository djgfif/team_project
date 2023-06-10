window.onload = function() {
  const loginForm = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const emailLabel = document.getElementById('email-label');
  const passwordInput = document.getElementById('password');
  const passwordLabel = document.getElementById('password-label');

  emailInput.addEventListener('input', handleInput);
  passwordInput.addEventListener('input', handleInput);
  
  function handleInput() {
    if (emailInput.value !== '') {
      emailLabel.style.display = 'none';
    } else {
      emailLabel.style.display = 'block';
    }
  
    if (passwordInput.value !== '') {
      passwordLabel.style.display = 'none';
    } else {
      passwordLabel.style.display = 'block';
    }
  }


  loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get user input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if the user exists and the password matches
    if (userData && email === userData.email && password === userData.password) {
      // User is authenticated, return a JSON response
      const loginYN = { success: true };

      localStorage.setItem('loginYN', JSON.stringify(loginYN));
      console.log('Login successful');
      console.log(JSON.stringify(loginYN));
      // Redirect to success page or perform other actions
      window.location.href = 'index.html';
    } else {
      // User is not authenticated, display an error message
      console.log('Invalid credentials');
      alert('Invalid email or password');
    }
  });
};
