import AbstractView from '../Abstracts/view';

class UserProfilePage extends AbstractView {
    constructor(model) {
        super(model);
        this.rootEl = this.render();
    }

    render() {
        const h = document.createElement('h1');
        h.innerText = 'HI YOU SUCCESFULLY LOGGED IN!';
        return h;
    }
}

export default UserProfilePage;
