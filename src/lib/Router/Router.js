import LogInForm from '../Views/LogInForm';
import ForbiddenPage from '../Views/ForbiddenPage';
import PageNotFound from '../Views/PageNotFound';
import UserProfilePage from '../Views/UserProfilePage';
import Cookies from 'js-cookie';
import BaseInfoModel from '../Models/BaseInfoModel';
import HomePage from '../Views/HomePage';

class Router {
    constructor() {
        this.rootEl = document.querySelector('#app');
        this.model = new BaseInfoModel();
        this.NOT_PROTECTED = true;
        this.routes = [
            {
                path: '',
                middleware: () => {
                    return this.NOT_PROTECTED;
                },
                component: HomePage,
            },
            {
                path: '#/login',
                middleware: () => {
                    return this.NOT_PROTECTED;
                },
                component: LogInForm,
            },
            {
                path: '#/forbidden',
                middleware: () => {
                    return this.NOT_PROTECTED;
                },
                component: ForbiddenPage,
            },
            {
                path: '#/pagenotfound',
                middleware: () => {
                    return this.NOT_PROTECTED;
                },
                component: PageNotFound,
            },
            {
                path: '#/userprofile',
                middleware: () => {
                    return this.authorised();
                },
                component: UserProfilePage,
            },
        ];

        window.addEventListener('hashchange', () => {
            this.resolveRoute(window.location.hash);
        });
    }

    authorised() {
        if (Cookies.get('MVC-LogInApp')) {
            return true;
        }
        return false;
    }

    resolveRoute(path) {
        const route = this.routes.find((route) => route.path === path);

        if (route) {
            if ((route.middleware())) {
                this.render(route.component);
                return;
            }
            window.location.hash = '#/forbidden';
            return;
        }
        window.location.hash = '#/pagenotfound';
        return;
    }

    render(SelectedClass) {
        const view = new SelectedClass(this.model);

        this.rootEl.innerHTML = '';
        this.rootEl.appendChild(view.rootEl);
    }
}

export default Router;
