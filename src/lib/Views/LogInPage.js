import AbstractView from '../Abstracts/view';
import LogInFormController from '../Controllers/LogInFormController';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';

class LogInForm extends AbstractView {
    constructor(model) {
        super(model);

        this.controller = new LogInFormController(this.model);
        this.usernameField = Input.createInput({mode: 'text'});
        this.passwordField = Input.createInput({mode: 'password'});
        this.submitBtn = Button.createBtn({mode: 'logIn'});
    }
    _createLabel(text) {
        const label = document.createElement('label');

        label.classList.add('logInForm__label');
        label.innerText = text;
        return label;
    }

    _submitForm() {
        const data = {};
        data.username = this.usernameField.value;
        data.password = this.passwordField.value;
        this.controller.handleLoginData(data);
    }

    _setEventListener() {
        this.submitBtn.rootEl.addEventListener('click', (event) => {
            event.preventDefault();
            this._submitForm();
        });
    }

    _renderBtnContainer() {
        const div = document.createElement('div');
        div.className = 'logInForm__btnContainer';
        div.appendChild(this.submitBtn.rootEl);
        return div;
    }

    _renderRoot() {
        const div = document.createElement('div');
        div.className = 'logInForm';
        div.append(
            this._createLabel('Username'),
            this.usernameField,
            this._createLabel('Password'),
            this.passwordField,
            this._renderBtnContainer(),
        );
        return div;
    }

    render() {
        this._setEventListener();
        this.rootEl = this._renderRoot();
    }
}

export default LogInForm;
