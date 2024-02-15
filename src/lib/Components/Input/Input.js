import './Input.scss';
import AbstractView from '../../Abstracts/view';

class Input extends AbstractView {
    constructor(model) {
        super(model);
    }

    render(options) {
        const {mode} = options;
        this.rootEl.classList.add('input');
        if (mode) {
            this.rootEl.type = mode;
            this.rootEl.classList.add(`input__${mode}`);
        }
    }

    static createInput(options) {
        const input = new Input();
        input.rootEl = document.createElement('input');
        input.render(options);
        return input.rootEl;
    }
}

export default Input;
