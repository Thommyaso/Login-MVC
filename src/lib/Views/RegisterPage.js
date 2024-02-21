import AbstractView from '../Abstracts/view';
import Input from '../Components/Input/Input';
import Button from '../Components/Button/Button';
import RegisterFormController from '../Controllers/RegisterFormCongroller';

class RegisterPage extends AbstractView {
    constructor(model) {
        super(model);
        this.controller = new RegisterFormController(this.model);
        this.nameInput = Input.createRegularInput({
            id: 'RegularNameInput',
            labelText: 'Name:',
            inputType: 'text',
        });
        this.surnameInput = Input.createRegularInput({
            id: 'RegularSurnameInput',
            labelText: 'Surname:',
            inputType: 'text',
        });
        this.usernameInput = Input.createRegularInput({
            id: 'RegularUsernameInput',
            labelText: 'Username:',
            inputType: 'text',
        });
        this.ageInput = Input.createRegularInput({
            id: 'RegularAgeInput',
            labelText: 'Age:',
            inputType: 'number',
        });
        this.passwordInput = Input.createRegularInput({
            id: 'RegularPasswordInput',
            labelText: 'Password:',
            inputType: 'password',
        });
        this.repeatPasswordInput = Input.createRegularInput({
            id: 'RegularRepeatPasswordInput',
            labelText: 'Repeat Password:',
            inputType: 'password',
        });
        this.submitBtn = Button.createBtn({mode: 'submit'});

        this.submitBtn.rootEl.addEventListener('click', (event) => {
            event.preventDefault();
            this._handleSubmitClick();
        });
    }

    _renderHeader() {
        const header = document.createElement('h1');

        header.classList.add('h3', 'mb-3', 'fw-normal', 'header-custom');
        header.innerText = 'Please register:';
        return header;
    }

    _createForm() {
        const form = document.createElement('form');
        const container = document.createElement('div');

        container.classList.add('formInputContainer');
        container.append(
            this._renderHeader(),
            this.nameInput.rootEl,
            this.surnameInput.rootEl,
            this.ageInput.rootEl,
            this.usernameInput.rootEl,
            this.passwordInput.rootEl,
            this.repeatPasswordInput.rootEl,
            this.submitBtn.rootEl,
        );

        form.classList.add('container-fluid', 'formContainer-custom');
        form.append(container);
        return form;
    }

    _handleSubmitClick() {
        if (this.passwordInput.value === this.repeatPasswordInput.value) {

            const user = {
                name: this.nameInput.input.value,
                surname: this.surnameInput.input.value,
                age: this.ageInput.input.value,
                username: this.usernameInput.input.value,
                password: this.passwordInput.input.value,
            };
            this.controller.handleRegistrationData(user);
        }
    }

    render() {
        this.rootEl = this._createForm();
    }
}

export default RegisterPage;
