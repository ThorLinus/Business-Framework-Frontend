function login(LoginService) {
    const loginButton = document.getElementById("login-button");
    const loginEMail = document.getElementById("login-email");
    const loginPassword = document.getElementById("login-password");

    class Login{
        constructor(login_user, login_password) {
            this.loginEMail = login_user;
            this.login_password = login_password;
        }
    }

    loginButton.addEventListener('click', function() {
        var login_user = loginEMail.value;
        var login_password = loginPassword.value;
        var login = new Login(login_user, login_password);
        LoginService.login(login);
    })
}
