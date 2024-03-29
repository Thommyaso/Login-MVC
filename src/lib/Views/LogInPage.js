import AbstractView from '../Abstracts/view';
import LogInFormController from '../Controllers/LogInFormController';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';

class LogInForm extends AbstractView {
    constructor(model) {
        super(model);

        this.controller = new LogInFormController(this.model);
        this.usernameField = Input.createFloatingInput({
            id: 'floatingLogInInput',
            labelText: 'Username',
            inputType: 'text',
        });
        this.passwordField = Input.createFloatingInput({
            id: 'floatingLogInPassword',
            labelText: 'Password',
            inputType: 'password',
        });
        this.submitBtn = Button.createBtn({mode: 'logIn'});
    }

    _renderHeader() {
        const header = document.createElement('h1');

        header.classList.add('h3', 'mb-3', 'fw-normal');
        header.innerText = 'Please sign in:';
        return header;
    }

    _createLabel(text) {
        const label = document.createElement('label');

        label.classList.add('logInForm__label');
        label.innerText = text;
        return label;
    }

    _setEventListener() {
        this.submitBtn.rootEl.addEventListener('click', this._handleSubmitClick.bind(this));
    }

    _handleSubmitClick(event) {
        event.preventDefault();
        const data = {};
        data.username = this.usernameField.input.value;
        data.password = this.passwordField.input.value;
        this.controller.handleLoginData(data);
    }

    _renderBtnContainer() {
        const div = document.createElement('div');

        div.className = 'logInForm__btnContainer';
        div.appendChild(this.submitBtn.rootEl);
        return div;
    }

    _renderRoot() {
        const div = document.createElement('form');

        div.classList.add('container-fluid', 'logInForm');
        div.append(
            this._renderHeader(),
            this.usernameField.rootEl,
            this.passwordField.rootEl,
            this._renderBtnContainer(),
        );
        return div;
    }

    destroy() {
        this.submitBtn.rootEl.removeEventListener('click', this._handleSubmitClick.bind(this));

    }

    async render() {
        this._setEventListener();
        this.rootEl = this._renderRoot();
        return Promise.resolve();
    }
}

export default LogInForm;
