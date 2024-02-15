import AbstractModel from '../Abstracts/model';

class RouterModel extends AbstractModel {
    constructor() {
        super();
        this.properties = {
            authorised: false,
            loginDetails: {
                name: null,
                surname: null,
            },
        };
    }

    updateLoginStatus() {
        this.properties.authorised = !this.properties.authorised;
    }
}

export default RouterModel;
