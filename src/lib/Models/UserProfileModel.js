import AbstractModel from '../Abstracts/model';

class UserProfileModel extends AbstractModel {
    constructor() {
        super();
        this.properties = {
            name: null,
            surname: null,
            age: null,
        };
    }

    handleData(data) {
        this.set('name', data.name);
        this.set('surname', data.surname);
        this.set('age', data.age);
    }
}

export default UserProfileModel;
