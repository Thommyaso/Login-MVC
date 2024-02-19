import AbstractView from '../Abstracts/view';

class UserProfilePage extends AbstractView {
    constructor(model) {
        super(model);
        this.rootEl = this.render();

        history.replaceState(null, null, '#/userprofile');
    }

    render() {
        const h = document.createElement('h1');
        h.classList.add('basicPage__header');
        h.innerText = 'Hi, you succesfully logged in!';
        return h;
    }
}

export default UserProfilePage;
