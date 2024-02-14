import FormView from '../Views/FormView/FormView';
import ForbiddenPageView from '../Views/ForbiddenPageView/ForbiddenPageView';
import PageNotFoundView from '../Views/PageNotFoundView/PageNotFoundView';

class Router {
    constructor() {
        this.NOT_PROTECTED = false;
        this.loggedIn = false;
        this.routes = [
            {
                path: '#/login',
                middleware: this.NOT_PROTECTED,
                component: FormView,
            },
            {
                path: '#/forbidden',
                middleware: this.canView(),
                component: ForbiddenPageView,
            },
            {
                path: '#/pagenotfound',
                middleware: this.NOT_PROTECTED,
                component: PageNotFoundView,
            },
        ];
    }

    canView() {
        return !this.loggedIn;
    }

    resolveRoute(path) {
        const route = this.routes.find((route) => route.path === path);

        if (route) {
            if (!route.middleware) {
                return route.component;
            }
            return ForbiddenPageView;
        }
        return PageNotFoundView;
    }
}

export default Router;
