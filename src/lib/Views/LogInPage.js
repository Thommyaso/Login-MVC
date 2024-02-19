import AbstractView from '../Abstracts/view';
import LogInFormController from '../Controllers/LogInFormController';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';

class LogInForm extends AbstractView {
    constructor(model) {
        super(model);

        this.controller = new LogInFormController(this.model);
        this.loginField = Input.createInput({mode: 'text'});
        this.passwordField = Input.createInput({mode: 'password'});
        this.submitBtn = Button.createBtn({mode: 'logIn'});
    }

    _submitForm() {
        const data = {};
        data.login = this.loginField.value;
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
        div.appendChild(this.loginField);
        div.appendChild(this.passwordField);
        div.appendChild(this._renderBtnContainer());
        return div;
    }

    render() {
        this._setEventListener();
        this.rootEl = this._renderRoot();
    }
}

export default LogInForm;
