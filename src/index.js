import './style.scss';
import Router from './lib/Router/router';

const app = document.querySelector('#app');
const router = new Router();

window.addEventListener('hashchange', () => {
    const SelectedClass = router.resolveRoute(window.location.hash);

    const view = new SelectedClass();
    app.innerHTML = '';
    app.appendChild(view.rootEl);
});

