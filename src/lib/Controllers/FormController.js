import AbstractController from '../Abstracts/controller';

class FormController extends AbstractController {
    constructor(model) {
        super(model);

    }

    handleLoginData(data) {
        // server request needs to be set up here
        console.log(data);
        this.updateModel({
            name: 'Alexander',
            surname: 'Volkanowski',
        });

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
