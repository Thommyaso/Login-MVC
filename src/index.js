import './style.scss';
import RouterModel from './lib/Models/RouterModel';
import Page from './lib/Views/App';

const routerModel = new RouterModel();
const page = new Page(routerModel);

page.initialize();
