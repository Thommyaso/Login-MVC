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
            this.handleSubmitClick();
        });
    }

    createLabel(text) {
        const label = document.createElement('label');

        label.classList.add('form__label');
        label.innerText = text;
        return label;
    }

    createForm() {
        const form = document.createElement('form');

        form.classList.add('form__container');
        form.append(
            this.createLabel('Name'),
            this.nameInput,
            this.createLabel('Surname'),
            this.surnameInput,
            this.createLabel('Age'),
            this.ageInput,
            this.createLabel('Username'),
            this.usernameInput,
            this.createLabel('Password'),
            this.passwordInput,
            this.createLabel('Repeat Password'),
            this.repeatPasswordInput,
            this.submitBtn.rootEl,
        );
        return form;
    }

    setUpBtn() {
        const btn = Button.createBtn({mode: 'submit'});

        btn.rootEl.addEventListener('click', () => {
            this.handleSubmitClick();
        });
        return btn.rootEl;
    }

    handleSubmitClick() {
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
        this.rootEl.appendChild(this.createForm());
    }
}

export default RegisterPage;
