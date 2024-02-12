import './style.scss';

import FormView from './lib/Views/FormView/FormView';
import FormController from './lib/Controllers/FormController';
import FormModel from './lib/Models/FormModel';

const formModel = new FormModel();
const abc = new FormView(formModel);
abc.controller = new FormController(formModel);
abc.rootEl = document.querySelector('.form');
abc.render();

