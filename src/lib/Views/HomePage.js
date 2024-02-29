import AbstractView from '../Abstracts/view';

class HomePage extends AbstractView {
    constructor(model) {
        super(model);
    }

    destroy() {

    }

    async render() {
        const h = document.createElement('h1');
        h.classList.add('basicPage__header');
        h.innerText = 'Welcome to the home page';
        this.rootEl = h;
        return Promise.resolve();
    }
}

export default HomePage;
