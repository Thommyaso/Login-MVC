import AbstractModel from '../Abstracts/model';

class FormModel extends AbstractModel {
    constructor() {
        super();
        this.properties = {
            loggedIn: false,
            loginDetails: {
                name: null,
                surname: null,
            },
        };
    }

    setLogin() {
        this.properties.loggedIn = !this.properties.loggedIn;
    }
}

export default FormModel;
