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
        if (mode === 'logIn') {
            this.rootEl.innerText = 'Log In';
            this.rootEl.classList.add('btn__primary');
        } else if (mode === 'logOut') {
            this.rootEl.innerText = 'Log Out';
            this.rootEl.classList.add('btn__primary');
        } else if (mode === 'navLink') {
            this.rootEl.classList.add('btn__navLink');
            switch (type) {
                case 'home':
                    this.rootEl.innerText = 'Home';
                    this.hash = '';
                    break;
                case 'logIn':
                    this.rootEl.innerText = 'Log In';
                    this.hash = '#/login';
                    break;
                case 'logOut':
                    this.rootEl.innerText = 'Log Out';
                    this.hash = '#/logout';
                    break;
                case 'userProfile':
                    this.rootEl.innerText = 'User Profile';
                    this.hash = '#/userprofile';
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
