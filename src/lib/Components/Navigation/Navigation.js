import './Navigation.scss';
import AbstractView from '../../Abstracts/view';
import Button from '../Button/Button';

class Navigation extends AbstractView {
    constructor(model) {
        super(model);

        this.rootEl = this._setupRoot();
        this.buttons = [
            Button.createBtn({mode: 'navLink', type: 'home'}),
            Button.createBtn({mode: 'navLink', type: 'userProfile'}),
        ];
        this.formButtons = [];
        this.navContainer = this._createNavigationContainer();
        this.logInContainer = this._renderFormContainer();
    }

    _createNavigationContainer() {
        const nav = document.createElement('div');

        nav.classList.add('container-fluid');
        nav.append(this._renderNavigationList());
        return nav;
    }

    _loginStatus(isLoggedIn) {
        this.logInContainer.innerHTML = '';
        if (isLoggedIn) {
            this.formButtons = [Button.createBtn({mode: 'navLink', type: 'logOut'})];
            return;
        }
        this.formButtons = [
            Button.createBtn({mode: 'navLink', type: 'logIn'}),
            Button.createBtn({mode: 'navLink', type: 'register'}),
        ];
    }

    _renderFormContainer() {
        const form = document.createElement('form');

        form.classList.add('container-fluid', 'justify-content-space-evenly', 'custom-container');
        return form;
    }

    _setupRoot() {
        const navbar = document.createElement('nav');

        navbar.classList.add('navbar', 'navbar-expand', 'bg-body-tertiary', 'navbar-custom');
        return navbar;
    }

    _renderNavigationList() {
        const container = document.createElement('div');

        container.classList.add('navbar-nav');
        container.innerHTML = '';

        this.buttons.forEach((button) => {
            button.rootEl.addEventListener('click', () => {
                if (window.location.hash !== button.hash) {
                    window.location.hash = button.hash;
                }
            });
            container.appendChild(button.rootEl);
        });
        return container;

    }

    renderFormButtons(isLoggedIn) {
        this._loginStatus(isLoggedIn);
        this.formButtons.forEach((button) => {
            button.rootEl.addEventListener('click', () => {
                if (window.location.hash !== button.hash) {
                    window.location.hash = button.hash;
                }
            });
            this.logInContainer.append(button.rootEl);
        });
    }

    static createNav(isLoggedIn = false) {
        const navBar = new Navigation();

        navBar.renderFormButtons(isLoggedIn);
        navBar.rootEl.append(navBar.navContainer, navBar.logInContainer);
        return navBar;
    }
}

export default Navigation;
