window.addEventListener('DOMContentLoaded', function () {
  // Load header and footer
  loadHTML(getHeaderContent(), 'header');
  loadHTML(getFooterContent(), 'footer');
});


function loadHTML(htmlContent, targetId) {
  document.getElementById(targetId).innerHTML = htmlContent;
}

function getHeaderContent() {
  return `
  <nav class="navbar navbar-expand-md fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html"><img src="assets/img/logo.png" width="70px" height="25px"></a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="w3-bar-item w3-button menu" onclick="window.scrollTo(0,0);">HOME</a>
        </li>
        <li class="nav-item">
          <div id="nav-drop" class="w3-dropdown-hover">
          <a class="w3-bar-item w3-button menu" href="event.html"> EVENT</a>
          </div>
      </li>
        <li class="nav-item">
           <div id="nav-drop" class="w3-dropdown-hover">
              <a class="w3-bar-item w3-button menu" href="prouduct.html"><i class="fa fa-th"></i> PROUDUCT</a>
              <div id="nav-drop-items" class="w3-dropdown-content w3-bar-block w3-card-4">
                <a href="#" class="w3-bar-item w3-button" sort=".asia">Asia</a>
                <a href="#" class="w3-bar-item w3-button" sort=".europe">Europe</a>
                <a href="#" class="w3-bar-item w3-button" sort=".america">America</a>
                <a href="#" class="w3-bar-item w3-button" sort=".africa">Africa</a>
              </div>
            </div>
        </li>
        <li class="nav-item">
          <div id="nav-drop" class="w3-dropdown-hover">
          <a class="w3-bar-item w3-button menu" href="company.html">COMPANY</a>
            
          </div>
      </li>

      </ul>
      <div id="text-area" class="text-end">
        <div id="login-area">
          <a href="login.html"><button type="button" class="btn btn-outline-light me-2">로그인</button></a>
          <a href="signup.html"><button type="button" class="btn btn-warning">회원가입</button></a>
        </div>
      </div>
    </div>
  </div>
</nav>
  `;
}

function getFooterContent() {
  return `
    <div class="w3-xlarge w3-section">
      <i class="fa fa-facebook-official w3-hover-opacity"></i>
      <i class="fa fa-instagram w3-hover-opacity"></i>
      <i class="fa fa-snapchat w3-hover-opacity"></i>
      <i class="fa fa-pinterest-p w3-hover-opacity"></i>
      <i class="fa fa-twitter w3-hover-opacity"></i>
      <i class="fa fa-linkedin w3-hover-opacity"></i>
    </div>
    <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
  `;
}
