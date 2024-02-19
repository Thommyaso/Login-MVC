import AbstractView from '../Abstracts/view';
import Button from '../Components/Button/Button';
import Cookies from 'js-cookie';

class LogOutPage extends AbstractView {
    constructor(model) {
        super(model);
        this.btn = Button.createBtn({mode: 'logOut'});
        console.log(this.btn);
        this.btn.rootEl.addEventListener('click', () => {
            Cookies.remove('MVC-LogInApp');
            window.location.hash = '';
        });
        this.rootEl = this.render();
    }

    render() {
        const div = document.createElement('div');
        const h = document.createElement('h3');

        div.classList.add('logOutContainer');
        h.classList.add('logOutContainer__header');
        h.innerText = 'Would you like to log out?';
        div.appendChild(h);
        div.appendChild(this.btn.rootEl);
        return div;
    }
}

export default LogOutPage;
