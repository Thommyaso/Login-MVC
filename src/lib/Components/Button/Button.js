import './Button.scss';
import AbstractView from '../../Abstracts/view';

class Button extends AbstractView {
    constructor(model) {
        super(model);
        this.rootEl = null;
        this.hash = null;
    }

    render(options) {
        const {mode, type} = options;
        this.rootEl.classList.add('btn');
        this.rootEl.type = 'button';
        if (mode === 'logIn') {
            this.rootEl.innerText = 'Log In';
            this.rootEl.classList.add('btn-primary', 'btn-lg');
        } else if (mode === 'logOut') {
            this.rootEl.innerText = 'Log Out';
            this.rootEl.classList.add('btn-secondary');
        } else if (mode === 'submit') {
            this.rootEl.innerText = 'Submit';
            this.rootEl.classList.add('btn-primary');
        } else if (mode === 'navLink') {
            switch (type) {
                case 'home':
                    this.rootEl.classList.add('nav-link');
                    this.rootEl.innerText = 'Home';
                    this.hash = '';
                    break;
                case 'logIn':
                    this.rootEl.classList.add('btn-outline-primary', 'navBtn-custom');
                    this.rootEl.innerText = 'Log In';
                    this.hash = '#/login';
                    break;
                case 'logOut':
                    this.rootEl.classList.add('btn-outline-secondary');
                    this.rootEl.innerText = 'Log Out';
                    this.hash = '#/logout';
                    break;
                case 'userProfile':
                    this.rootEl.classList.add('nav-link');
                    this.rootEl.innerText = 'User Profile';
                    this.hash = '#/userprofile';
                    break;
                case 'register':
                    this.rootEl.classList.add('btn-primary');
                    this.rootEl.innerText = 'Register';
                    this.hash = '#/register';
                    break;
                default:
                    console.log('button doesn\'t exist');
            }
        }
    }

    static createBtn(options) {
        const btn = new Button();
        btn.rootEl = document.createElement('button');
        btn.render(options);
        return btn;
    }
}

export default Button;
