import AbstractView from '../Abstracts/view';

class ForbiddenPage extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {
        const h = document.createElement('h1');
        h.classList.add('basicPage__header');
        h.innerText = 'Unauthorised';
        this.rootEl = h;
    }
}

export default ForbiddenPage;
