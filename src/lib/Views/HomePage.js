import AbstractView from '../Abstracts/view';

class HomePage extends AbstractView {
    constructor(model) {
        super(model);
    }

    render() {
        const h = document.createElement('h1');
        h.classList.add('basicPage__header');
        h.innerText = 'Welcome to home page';
        this.rootEl = h;
    }
}

export default HomePage;
