import AbstractView from '../Abstracts/view';

class PageNotFound extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {
        const h = document.createElement('h1');
        h.classList.add('basicPage__header');
        h.innerText = 'Page not found';
        this.rootEl = h;
    }
}

export default PageNotFound;
