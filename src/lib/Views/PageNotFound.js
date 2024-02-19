import AbstractView from '../Abstracts/view';

class PageNotFound extends AbstractView {
    constructor(model) {
        super(model);
        this.rootEl = this.render();
    }

    render() {
        const h = document.createElement('h1');
        h.classList.add('basicPage__header');
        h.innerText = 'Page not found';
        return h;
    }
}

export default PageNotFound;
