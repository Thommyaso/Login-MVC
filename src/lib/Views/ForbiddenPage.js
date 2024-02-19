import AbstractView from '../Abstracts/view';

class ForbiddenPage extends AbstractView {
    constructor(model) {
        super(model);
        this.rootEl = this.render();
    }

    render() {
        const h = document.createElement('h1');
        h.classList.add('basicPage__header');
        h.innerText = 'Unauthorised';
        return h;
    }
}

export default ForbiddenPage;
