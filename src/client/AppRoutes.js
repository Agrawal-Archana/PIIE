import { lazy } from 'react';
import URL from './utils/constants/URL';

const Home = lazy(() => import('./pages/home'));
const Login = lazy(() => import('./pages/login'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Signup = lazy(() => import('./pages/signup'));
const ForgotPassword = lazy(() => import('./pages/forgot-password'));
const PageNotFound = lazy(() => import('./pages/page-not-found'));

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
    children: [
      {
        id: 'overview',
        path: URL.OVERVIEW,
        component: PageNotFound,
        isProtected: false,
        index: false,
      },
      {
        id: 'notifications',
        path: URL.NOTIFICATIONS,
        component: PageNotFound,
        isProtected: false,
        index: false,
      },
      {
        id: 'saved_reports',
        path: URL.SAVED_REPORTS,
        component: PageNotFound,
        isProtected: false,
        index: false,
      },
    ],
  },
  {
    id: 'signup',
    path: URL.SIGN_UP,
    component: Signup,
    isProtected: false,
    index: false,
  },
  {
    id: 'forgot-password',
    path: URL.FORGOT_PASSWORD,
    component: ForgotPassword,
    isProtected: false,
    index: false,
  },
  {
    id: 'route_wildcard',
    path: '/*',
    index: false,
    label: 'Wildcard',
    component: PageNotFound,
  },
];
