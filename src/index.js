import './style.scss';
import './bootstrap.scss';
import Router from './lib/Router/Router';

const router = new Router();

router.resolveRoute(window.location.hash);
