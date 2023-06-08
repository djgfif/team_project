window.onload = function() {
  const join = document.getElementById('registration-form');
  const input = join.getElementsByClassName('form-control');
  const error = join.getElementsByClassName('error-message');

  function innerReset() {
    for (let i = 0; i < error.length; i++) {
      error[i].innerHTML = "";
    }
  }

  function checkId() {
    const idLimit = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;
    if (!idLimit.test(input[0].value)) {
      error[0].innerHTML = "이메일을 올바르게 입력해주세요.";
      return false;
    }
    return true;
  }

  function checkPw() {
    const pwLimit = /^(?=.*[a-zA-Z])(?=.*\d|[!@#$%^&*()_-])[a-zA-Z\d!@#$%^&*()_-]{8,20}$/;
    if (!pwLimit.test(input[1].value)) {
      error[1].innerHTML = "8~20자의 영문, 숫자, 특수문자 중 2가지 이상으로만 가능합니다.";
      return false;
    }
    return true;
  }

  function comparePw() {
    if (input[1].value !== input[2].value) {
      error[2].innerHTML = "비밀번호가 일치하지 않습니다.";
      return false;
    }
    return true;
  }

  function checkName() {
    const nameLimit = /^[a-zA-Z가-힣]{2,20}$/;
    if (!nameLimit.test(input[3].value)) {
      error[3].innerHTML = "2~20자의 영문 또는 한글만 사용 가능합니다.";
      return false;
    }
    return true;
  }

  function checkPhone() {
    const phoneLimit = /^01[0|1|6|7|8|9]{1}[0-9]{8}$/;
    if (!phoneLimit.test(input[4].value)) {
      error[4].innerHTML = "올바른 형식의 휴대폰 번호를 입력해주세요.";
      return false;
    }
    return true;
  }

 
  function validateInput(index) {
    innerReset();
    switch (index) {
      case 0:
        checkId();
        break;
      case 1:
        checkPw();
        break;
      case 2:
        comparePw();
        break;
      case 3:
        checkName();
        break;
      case 4:
        checkPhone();
        break;
      default:
        break;
    }
  }

  for (let i = 0; i < input.length; i++) {
    input[i].addEventListener('input', function() {
      validateInput(i);
    });
  }

  

  join.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    innerReset(); // Reset error messages

    if (checkId() && checkPw() && comparePw() && checkName() && checkPhone()) {
      // All fields are valid, proceed with registration

      const email = input[0].value;
      const password = input[1].value;
      const name = input[3].value;
      const phone = input[4].value;

      // Store user data in local storage
      const userData = {
        email: email,
        password: password,
        name: name,
        phone: phone
      };

      localStorage.setItem('userData', JSON.stringify(userData));

      alert("회원가입 완료");

      // Redirect to success page or perform other actions
      window.location.href = 'login.html';
    }
  });
};
