import { IconTypes } from '../../components/icon/icons-constants';

const NavigationList = [
  {
    id: 'home',
    label: 'Home',
    icon: IconTypes.HOME,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: IconTypes.BAR_CHART,
    nodes: [
      {
        id: 'overview',
        label: 'Overview',
        icon: IconTypes.ACTIVITY,
      },
      {
        id: 'notifications',
        label: 'Notification',
        icon: IconTypes.NOTIFICATIONS,
      },
      {
        id: 'saved-reports',
        label: 'Saved Reports',
        icon: IconTypes.STAR,
      },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    icon: IconTypes.LAYERS,
  },
  {
    id: 'users',
    label: 'Users',
    icon: IconTypes.USERS,
  },
];

const NavigationFooterOptions = [
  {
    id: 'support',
    label: 'Support',
    icon: IconTypes.LIFEBUOY,
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: IconTypes.SETTINGS,
  },
];

export {
  NavigationList,
  NavigationFooterOptions,
};
