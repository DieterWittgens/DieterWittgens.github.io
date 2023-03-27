class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <style>
                .header {
                    width: 100%;
                    border-style: none none solid none;
                    display: inline-block;
                }

                .header-padding {
                    padding: 8px;
                }

                .logo {
                    float: left;
                }

                .login {
                    float: right;
                }

                .h1 {
                    font-size: 32px;
                }
        
                body {
                    margin: 0px;
                }

                .content {
                    CONTENT_STYLE
                }

                .center-vert {
                    display: flex;
                    justify-content: end;
                    padding-right: 8px;
                    align-items: center;
                    height: 100px;
                }
            </style>
            <div class="header">
                <!--<div class="header-padding">!-->
                    <a class='logo' href='/index.html'><p class='h1'>Dieter Wittgens</p></a>
                    <div class="center-vert">
                        <a class='login' href='/login.html'><p>LOGIN_BUTTON_TEXT</p></a>
                    </div>
                <!--</div>-->
            </div>
        `;

        const isLoggedIn = localStorage['access'] == 'Y';
        console.log(isLoggedIn);
        const contentStyle = isLoggedIn ? '' : 'display: none;';
        const loginButtonText = isLoggedIn ? 'Log out' : 'Log in';
        console.log(loginButtonText);

        this.innerHTML = this.innerHTML.replace('CONTENT_STYLE', contentStyle);
        this.innerHTML = this.innerHTML.replace('LOGIN_BUTTON_TEXT', loginButtonText);
    }
}

customElements.define('header-component', Header);