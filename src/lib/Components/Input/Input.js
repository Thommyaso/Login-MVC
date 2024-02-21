import './Input.scss';
import AbstractView from '../../Abstracts/view';

class Input extends AbstractView {
    constructor(model) {
        super(model);

        this.rootEl = null;
        this.input = null;
        this.label = null;
    }

    _renderRoot(isfloating) {
        const root = document.createElement('div');

        if (isfloating) {
            root.classList.add('form-floating', 'mb-3');
        } else {
            root.classList.add('mb-3');
        }
        this.rootEl = root;
    }

    _renderInput(inputType, id) {
        const input = document.createElement('input');

        input.classList.add('form-control', 'input-width-custom');
        input.id = id;
        input.placeholder = '';
        input.type = inputType;
        this.input = input;
    }

    _renderLabel(id, labelText) {
        const label = document.createElement('label');

        label.classList.add('label-custom');
        label.htmlFor = id;
        label.innerText = labelText;
        this.label = label;
    }

    render(options, isfloating = false) {
        const {inputType, id, labelText} = options;

        this._renderInput(inputType, id);
        this._renderLabel(id, labelText);
        if (isfloating) {
            this.rootEl.append(this.input, this.label);
            return;
        }
        this.rootEl.append(this.label, this.input);
    }

    static createRegularInput(options) {
        const input = new Input();
        input._renderRoot(false);
        input.render(options);
        return input;
    }

    static createFloatingInput(options) {
        const input = new Input();

        input._renderRoot(true);
        input.render(options, true);
        return input;
    }
}

export default Input;
