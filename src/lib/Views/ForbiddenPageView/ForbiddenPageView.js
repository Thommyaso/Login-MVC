import AbstractView from '../../Abstracts/view';

class ForbiddenPageView extends AbstractView {
    constructor(model) {
        super(model);
        this.rootEl = this.render();
    }

    render() {
        const h = document.createElement('h1');
        h.innerText = 'UNAUTHORISED ';
        return h;
    }
}

export default ForbiddenPageView;
