import AbstractController from '../Abstracts/controller';
import Service from '../Services/Service';

class FormController extends AbstractController {
    constructor(model) {
        super(model);
        this.service = new Service();
    }

    handleLoginData(data) {
        // server request needs to be set up here
        this.service.login(data)
            .then((res) => {
                console.log(res);
            })
            .catch((res) => {
                console.log(res);
            });
        // console.log(data);
    }

    updateModel(data) {
        // data from server will be used to set up model
        this.model.set('loginDetails', {
            name: data.name,
            surname: data.surname,
        });
        this.model.setLogin();
        this.model.fireEvent('login');
    }
}

export default FormController;
