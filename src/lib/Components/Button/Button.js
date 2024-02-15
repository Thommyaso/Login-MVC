import './Button.scss';
import AbstractView from '../../Abstracts/view';

class Button extends AbstractView {
    constructor(model) {
        super(model);
        this.rootEl = document.createElement('button');
    }

    render(options) {
        const {mode} = options;
        this.rootEl.classList.add('btn');
        if (mode === 'submit') {
            this.rootEl.innerText = 'Submit';
            this.rootEl.classList.add('btn__submit');
        }
    }

    static createBtn(options) {
        const btn = new Button();
        btn.rootEl = document.createElement('button');
        btn.render(options);
        return btn.rootEl;
    }
}

export default Button;
