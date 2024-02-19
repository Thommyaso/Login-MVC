import AbstractView from '../Abstracts/view';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import RegisterFormController from '../Controllers/RegisterFormCongroller';

class RegisterPage extends AbstractView {
    constructor(model) {
        super(model);
        this.controller = new RegisterFormController(this.model);
        this.nameInput = Input.createInput({mode: 'text'});
        this.surnameInput = Input.createInput({mode: 'text'});
        this.usernameInput = Input.createInput({mode: 'text'});
        this.ageInput = Input.createInput({mode: 'number'});
        this.passwordInput = Input.createInput({mode: 'password'});
        this.repeatPasswordInput = Input.createInput({mode: 'password'});
        this.submitBtn = Button.createBtn({mode: 'submit'});

        this.submitBtn.rootEl.addEventListener('click', (event) => {
            event.preventDefault();
            this._handleSubmitClick();
        });
    }

    _createLabel(text) {
        const label = document.createElement('label');

        label.classList.add('form__label');
        label.innerText = text;
        return label;
    }

    _createForm() {
        const form = document.createElement('form');

        form.classList.add('form__container');
        form.append(
            this._createLabel('Name'),
            this.nameInput,
            this._createLabel('Surname'),
            this.surnameInput,
            this._createLabel('Age'),
            this.ageInput,
            this._createLabel('Username'),
            this.usernameInput,
            this._createLabel('Password'),
            this.passwordInput,
            this._createLabel('Repeat Password'),
            this.repeatPasswordInput,
            this.submitBtn.rootEl,
        );
        return form;
    }

    _handleSubmitClick() {
        if (this.passwordInput.value === this.repeatPasswordInput.value) {
            const user = {
                name: this.nameInput.value,
                surname: this.surnameInput.value,
                age: this.ageInput.value,
                username: this.usernameInput.value,
                password: this.passwordInput.value,
            };

            this.controller.handleRegistrationData(user);
        }
    }

    render() {
        this.rootEl = document.createElement('div');
        this.rootEl.classList.add('form');
        this.rootEl.appendChild(this._createForm());
    }
}

export default RegisterPage;
