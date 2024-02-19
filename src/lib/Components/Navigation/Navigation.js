import './Navigation.scss';
import AbstractView from '../../Abstracts/view';
import Button from '../Button/Button';
import Cookies from 'js-cookie';

class Navigation extends AbstractView {
    constructor(model) {
        super(model);
        this.nav = this.createNavContainer();
        this.buttons = [
            Button.createBtn({mode: 'navLink', type: 'home'}),
            Button.createBtn({mode: 'navLink', type: 'userProfile'}),
            null,
        ];
        this.rootEl = document.createElement('div');
        this.rootEl.classList.add('nav');
    }

    createNavContainer() {
        const nav = document.createElement('div');
        nav.classList.add('nav__container');
        return nav;
    }

    setEventListener() {
        this.rootEl.addEventListener('click', () => {
            if (window.location.hash !== this.hash) {
                window.location.hash = this.hash;
                return;
            }
        });
    }

    authorised() {
        if (Cookies.get('MVC-LogInApp')) {
            this.buttons[2] = Button.createBtn({mode: 'navLink', type: 'logOut'});
            if (this.buttons.length === 4) {
                this.buttons.splice(3, 1);
            }
            return;
        }
        this.buttons[2] = Button.createBtn({mode: 'navLink', type: 'logIn'});
        this.buttons[3] = (Button.createBtn({mode: 'navLink', type: 'register'}));
    }

    renderButtons() {
        this.nav.innerHTML = '';
        this.authorised();
        this.buttons.forEach((button) => {
            button.rootEl.addEventListener('click', () => {
                if (window.location.hash !== button.hash) {
                    window.location.hash = button.hash;
                }
            });
            this.nav.appendChild(button.rootEl);
        });
        this.rootEl.appendChild(this.nav);
    }

    static createNav() {
        const nav = new Navigation();
        nav.renderButtons();
        return nav;
    }
}

export default Navigation;
