import AbstractController from '../Abstracts/controller';
import {logOut} from '../Service/service';

class LogOutFormController extends AbstractController {
    constructor(model) {
        super(model);
    }

    handleLogOutClick() {
        logOut()
            .then(() => {
                window.localStorage.isLoggedIn = false;
                window.location.hash = '';
            })
            .catch((res) => {
                console.error(res);
            });
    }
}

export default LogOutFormController;
