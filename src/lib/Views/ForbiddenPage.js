import AbstractView from '../Abstracts/view';

class ForbiddenPage extends AbstractView {
    constructor(model) {
        super(model);
    }

    async render() {
        const h = document.createElement('h1');

        h.classList.add('basicPage__header');
        h.innerText = 'Unauthorised';
        this.rootEl = h;
        return Promise.resolve();
    }
}

export default ForbiddenPage;
