import LogInPage from '../Views/LogInPage';
import ForbiddenPage from '../Views/ForbiddenPage';
import PageNotFound from '../Views/PageNotFound';
import UserProfilePage from '../Views/UserProfilePage';
import HomePage from '../Views/HomePage';
import Navigation from '../Components/Navigation/Navigation';
import LogOutPage from '../Views/LogOutPage';
import RegisterPage from '../Views/RegisterPage';
import logger from '../utils/logger';

class Router {
    constructor() {
        this.rootEl = document.querySelector('#app');
        this.nav = null;
        this.appBody = null;
        this.NOT_PROTECTED = true;
        this.currentObject = new HomePage();

        /*

            Each route is associated with a specific middleware method that
            performs checks tailored to the path requirements.
            If these checks fail, the user will be redirected to the address
            specified by the 'redirectTo' property within that route object.
            Routes that do not require any checks have their middleware method
            set to the 'this.NOT_PROTECTED' flag.

        */

        this.routes = [
            {
                path: '',
                middleware: () => this.NOT_PROTECTED,
                component: HomePage,
            },
            {
                path: '#/login',
                redirectTo: '#/userprofile',
                middleware: () => !(this._authorised()),
                component: LogInPage,
            },
            {
                path: '#/forbidden',
                middleware: () => this.NOT_PROTECTED,
                component: ForbiddenPage,
            },
            {
                path: '#/pagenotfound',
                middleware: () => this.NOT_PROTECTED,
                component: PageNotFound,
            },
            {
                path: '#/userprofile',
                redirectTo: '#/forbidden',
                middleware: () => this._authorised(),
                component: UserProfilePage,
            },
            {
                path: '#/logout',
                redirectTo: '#/login',
                middleware: () => this._authorised(),
                component: LogOutPage,
            },
            {
                path: '#/register',
                redirectTo: '#/userprofile',
                middleware: () => !(this._authorised()),
                component: RegisterPage,
            },
        ];

        this._renderApp();

        window.addEventListener('hashchange', () => {
            this.nav.renderFormButtons(this._authorised());
            this.resolveRoute(window.location.hash);
        });
    }

    _renderApp() {
        this.nav = (Navigation.createNav(this._authorised()));
        this.rootEl.prepend(this.nav.rootEl);
        this.appBody = document.createElement('div');
        this.appBody.classList.add('appBody');
        this.rootEl.appendChild(this.appBody);
    }

    _authorised() {
        return window.localStorage.isLoggedIn === 'true';
    }

    resolveRoute(path) {
        const route = this.routes.find((route) => route.path === path);
        if (route) {
            if ((route.middleware())) {
                this.render(route.component);
                return;
            }
            window.location.hash = route.redirectTo;
            return;
        }
        window.location.hash = '#/pagenotfound';
    }

    async render(SelectedClass) {
        this.currentObject.destroy();
        this.currentObject = new SelectedClass();


        this.appBody.innerHTML = '';
        await this.currentObject.render()
            .then(() => {
                this.appBody.appendChild(this.currentObject.rootEl);
            })
            .catch((err) => {
                logger.error(err);
            });
    }
}

export default Router;
