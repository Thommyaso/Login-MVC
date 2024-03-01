import AbstractView from '../Abstracts/view';

class PageNotFound extends AbstractView {
    constructor(model) {
        super(model);
    }

    async render() {
        const h = document.createElement('h1');

        h.classList.add('basicPage__header');
        h.innerText = 'Page not found';
        this.rootEl = h;
        return Promise.resolve();
    }
}

export default PageNotFound;
