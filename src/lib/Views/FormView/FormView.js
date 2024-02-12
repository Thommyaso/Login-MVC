import AbstractView from '../../Abstracts/view';
import './FormView.scss';

class FormView extends AbstractView {
    constructor(model) {
        super(model);

        this.loginField = null;
        this.passwordField = null;
        this.submitBtn = null;
        this.model.addObserver('login', this._renderLogin.bind(this));
    }

    _renderLogin() {
        console.log(this.model.properties);
    }

    _submitForm() {
        const data = {};
        data.login = this.loginField.value;
        data.password = this.passwordField.value;
        this.controller.handleLoginData(data);
    }

    _setEventListener() {
        this.submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this._submitForm();
        });
    }

    render() {
        this.loginField = this.rootEl.querySelector('.form__login');
        this.passwordField = this.rootEl.querySelector('.form__password');
        this.submitBtn = this.rootEl.querySelector('.form__submitBtn');
        this._setEventListener();
    }
}

export default FormView;
