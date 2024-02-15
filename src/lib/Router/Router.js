import LogInForm from '../Views/LogInForm';
import ForbiddenPage from '../Views/ForbiddenPage';
import PageNotFound from '../Views/PageNotFound';
import UserProfilePage from '../Views/UserProfilePage';

class Router {
    constructor(model) {
        this.model = model;
        this.NOT_PROTECTED = true;
        this.routes = [
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
                    return this.model.get('authorised');
                },
                component: UserProfilePage,
            },
        ];
    }

    resolveRoute(path) {
        const route = this.routes.find((route) => route.path === path);

        if (route) {
            console.log(route.middleware());
            if ((route.middleware(this.model))) {
                return route.component;
            }
            return ForbiddenPage;
        }
        return PageNotFound;
    }
}

export default Router;
