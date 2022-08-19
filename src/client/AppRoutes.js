import URL from './utils/constants/URL';
import Home from './pages/home';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Signup from './pages/signup';

export default [
  {
    id: 'home',
    path: URL.HOME,
    component: Home,
    isProtected: false,
    index: false,
  },
  {
    id: 'log-in',
    path: URL.LOGIN,
    component: Login,
    isProtected: false,
    index: false,
  },
  {
    id: 'dashboard',
    path: URL.DASHBOARD,
    component: Dashboard,
    isProtected: false,
    index: false,
  },
  {
    id: 'signup',
    path: URL.SIGN_UP,
    component: Signup,
    isProtected: false,
    index: false,
  },
];
