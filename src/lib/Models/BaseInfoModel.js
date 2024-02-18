import AbstractModel from '../Abstracts/model';

class BaseInfoModel extends AbstractModel {
    constructor() {
        super();
        this.properties = {
            loginDetails: {
                name: null,
                surname: null,
            },
        };
    }
}

export default BaseInfoModel;
