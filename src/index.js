import './style.scss';
import Router from './lib/Router/Router';

const router = new Router();

router.resolveRoute(window.location.hash);
