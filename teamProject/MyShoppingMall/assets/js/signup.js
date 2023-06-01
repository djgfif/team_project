window.onload = function() {
  var join = document.getElementById('registration-form');
  var input = join.getElementsByClassName('form-control');
  var error = join.getElementsByClassName('error-message');

  function innerReset() {
    for (let i = 0; i < error.length; i++) {
      error[i].innerHTML = "";
    }
  }

  function checkId() {
    var idLimit = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (!idLimit.test(input[0].value)) {
      error[0].innerHTML = "5~20자의 영문 소대문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.";
      return false;
    }
    return true;
  }

  function checkPw() {
    var pwLimit = /^[a-zA-Z0-9~!@#$%^&*()_-]{10,20}$/;
    if (!pwLimit.test(input[1].value)) {
      error[1].innerHTML = "10~20자의 영문 소대문자, 숫자와 특수기호 '~!@#$%^&*()_-'만 사용 가능합니다.";
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
    var nameLimit = /^[a-zA-Z가-힣]{2,20}$/;
    if (!nameLimit.test(input[3].value)) {
      error[3].innerHTML = "2~20자의 영문 또는 한글만 사용 가능합니다.";
      return false;
    }
    return true;
  }

  function checkPhone() {
    var phoneLimit = /^01[0|1|6|7|8|9]{1}[0-9]{8}$/;
    if (!phoneLimit.test(input[4].value)) {
      error[4].innerHTML = "올바른 형식의 휴대폰 번호를 입력해주세요.";
      return false;
    }
    return true;
  }

  join.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    innerReset(); // Reset error messages

    if (checkId() && checkPw() && comparePw() && checkName() && checkPhone()) {
      // All fields are valid, proceed with registration

      var email = input[0].value;
      var password = input[1].value;
      var name = input[3].value;
      var phone = input[4].value;

      // Store user data in local storage
      var userData = {
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
