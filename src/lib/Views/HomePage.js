import AbstractView from '../Abstracts/view';

class HomePage extends AbstractView {
    constructor(model) {
        super(model);
        this.rootEl = this.render();
    }

    render() {
        const h = document.createElement('h1');
        h.innerText = 'Welcome to home page';
        return h;
    }
}

export default HomePage;
