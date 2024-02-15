import AbstractView from '../Abstracts/view';
import Router from '../Router/Router';

class Page extends AbstractView {
    constructor(model) {
        super(model);
        this.router = new Router(this.model);
        this.app = document.querySelector('#app');

        window.addEventListener('hashchange', () => {
            this.render(this.router.resolveRoute(window.location.hash));
        });
        this.model.addObserver('loginUpdate', (hash) => {
            console.log(hash);
            this.render(this.router.resolveRoute(hash));
        });
    }

    initialize() {
        const SelectedClass = this.router.resolveRoute(window.location.hash);
        const view = new SelectedClass(this.model);

        this.app.innerHTML = '';
        this.app.appendChild(view.rootEl);
    }

    render(SelectedClass) {
        const view = new SelectedClass(this.model);

        this.app.innerHTML = '';
        this.app.appendChild(view.rootEl);
    }
}

export default Page;
