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

    _renderHeader() {
        const header = document.createElement('h1');
        header.classList.add('h3', 'mb-3', 'fw-normal', 'header-custom');
        header.innerText = `Hi ${this.model.get('username')}, here are your details:`;
        return header;
    }

    _renderInfo(type) {
        const nameDiv = document.createElement('div');
        const label = document.createElement('div');
        const input = document.createElement('div');
        const header = document.createElement('h5');
        const paragraph = document.createElement('h5');

        paragraph.innerText = `${type}:`;
        paragraph.classList.add('userPage__p');

        header.innerText = this.model.get(type);

        label.append(paragraph);
        label.classList.add('userPage__label');

        input.append(header);
        input.classList.add('userPage__input');

        nameDiv.classList.add('userPage__info');
        nameDiv.append(
            label,
            input,
        );
        return nameDiv;
    }

    async render() {
        await this.controller.initialize()
            .then(() => {
                const containerDiv = document.createElement('div');

                containerDiv.classList.add('userInfo');
                containerDiv.append(
                    this._renderHeader(),
                    this._renderInfo('name'),
                    this._renderInfo('surname'),
                    this._renderInfo('age'),
                );
                this.rootEl = containerDiv;
            });
    }
}

export default UserProfilePage;
