import AbstractController from '../Abstracts/controller';
import LogOutFormService from '../Services/LogOutFormService';

class LogOutFormController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new LogOutFormService();
    }

    handleLogOutClick() {
        this.service.logOut()
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
