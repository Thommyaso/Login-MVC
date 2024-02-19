import AbstractView from '../Abstracts/view';
import UserProfileController from '../Controllers/UserProfileController';
import UserProfileModel from '../Models/UserProfileModel';

class UserProfilePage extends AbstractView {
    constructor(model) {
        super(model);
        this.model = new UserProfileModel();
        this.controller = new UserProfileController(this.model);

        history.replaceState(null, null, '#/userprofile');
    }

    _renderInfo(type) {
        const nameDiv = document.createElement('div');
        const label = document.createElement('h4');
        const value = document.createElement('h3');

        nameDiv.classList.add('userInfo__Container');

        label.classList.add('userInfo__label');
        label.innerText = `${type}:`;

        value.classList.add('userInfo__value');
        value.innerText = this.model.get(type);

        nameDiv.append(
            label,
            value,
        );
        return nameDiv;
    }

    async render() {
        await this.controller.initialize()
            .then(() => {
                const containerDiv = document.createElement('div');

                containerDiv.classList.add('userInfo');
                containerDiv.append(
                    this._renderInfo('name'),
                    this._renderInfo('surname'),
                    this._renderInfo('age'),
                );
                this.rootEl = containerDiv;
            });
    }
}

export default UserProfilePage;
