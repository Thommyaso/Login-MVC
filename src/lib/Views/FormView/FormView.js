import './FormView.scss';
import AbstractView from '../../Abstracts/view';
import FormController from '../../Controllers/FormController';
import FormModel from '../../Models/FormModel';
import Input from '../../Components/Input/Input';
import Button from '../../Components/Button/Button';

class FormView extends AbstractView {
    constructor(model) {
        super(model);

        this.model = new FormModel();
        this.controller = new FormController(this.model);
        this.loginField = Input.createInput({mode: 'text'});
        this.passwordField = Input.createInput({mode: 'password'});
        this.submitBtn = Button.createBtn({mode: 'submit'});
        this.render();
    }

    _submitForm() {
        const data = {};
        data.login = this.loginField.value;
        data.password = this.passwordField.value;
        this.controller.handleLoginData(data);
    }

    _renderLogin() {
        console.log(this.model.properties);
    }

    _setEventListener() {
        this.submitBtn.addEventListener('click', (event) => {
            event.preventDefault();
            this._submitForm();
        });
    }

    _renderBtnContainer() {
        const div = document.createElement('div');
        div.className = 'form__btnContainer';
        div.appendChild(this.submitBtn);
        return div;
    }

    _renderRoot() {
        const div = document.createElement('div');
        div.className = 'form';
        div.appendChild(this.loginField);
        div.appendChild(this.passwordField);
        div.appendChild(this._renderBtnContainer());
        return div;
    }

    render() {
        this._setEventListener();
        this.rootEl = this._renderRoot();
        this.model.addObserver('login', this._renderLogin.bind(this));
    }
}

export default FormView;
