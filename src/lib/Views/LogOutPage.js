import AbstractView from '../Abstracts/view';
import Button from '../Components/Button/Button';
import LogOutFormController from '../Controllers/LogOutFormController';

class LogOutPage extends AbstractView {
    constructor(model) {
        super(model);
        this.controller = new LogOutFormController(this.model);
        this.btn = Button.createBtn({mode: 'logOut'});
        this.btn.rootEl.addEventListener('click', () => {
            this.controller.handleLogOutClick();
        });
    }

    render() {
        const div = document.createElement('div');
        const h = document.createElement('h3');

        div.classList.add('logOutContainer');
        h.classList.add('logOutContainer__header');
        h.innerText = 'Would you like to log out?';
        div.appendChild(h);
        div.appendChild(this.btn.rootEl);
        this.rootEl = div;
    }
}

export default LogOutPage;
