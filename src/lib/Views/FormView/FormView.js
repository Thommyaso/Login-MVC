import './FormView.scss';
import AbstractView from '../../Abstracts/view';
import FormController from '../../Controllers/FormController';
import FormModel from '../../Models/FormModel';

class FormView extends AbstractView {
    constructor(model) {
        super(model);

        this.model = new FormModel();
        this.controller = new FormController(this.model);
        this.loginField = null;
        this.passwordField = null;
        this.submitBtn = null;
        this.render();
    }

    renderElement(el, classString, type) {
        const element = document.createElement(el);
        element.className = classString;
        element.type = type;
        return element;
    }

    renderRoot() {
        const div = document.createElement('div');
        div.className = 'form';
        div.appendChild(this.loginField);
        div.appendChild(this.passwordField);
        div.appendChild(this.submitBtn);
        return div;
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
        this.loginField = this.renderElement('input', 'form__login', 'text');
        this.passwordField = this.renderElement('input', 'form__password', 'password');
        this.submitBtn = this.renderElement('button', 'form__submitBtn', 'submit');
        this.submitBtn.innerText = 'submit';
        this._setEventListener();
        this.rootEl = this.renderRoot();
        this.model.addObserver('login', this._renderLogin.bind(this));
    }
}

export default FormView;
