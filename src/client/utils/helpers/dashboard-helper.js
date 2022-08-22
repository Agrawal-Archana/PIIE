import { IconTypes } from '../../components/icon/icons-constants';

const NavigationList = [
  {
    id: 'home',
    label: 'Home',
    expandable: false,
    icon: IconTypes.HOME,
  },
  {
    id: 'dashboard',
    label: 'dashboard',
    expandable: true,
    icon: IconTypes.BAR_CHART,
    list: [
      {
        id: 'overview',
        label: 'Overview',
        expandable: false,
        icon: IconTypes.ACTIVITY,
      },
      {
        id: 'notification',
        label: 'Notification',
        expandable: false,
        icon: IconTypes.NOTIFICATIONS,
      },
      {
        id: 'saved-reports',
        label: 'Saved Reports',
        expandable: false,
        icon: IconTypes.STAR,
      },
    ],
  },
  {
    id: 'projects',
    label: 'Projects',
    expandable: false,
    icon: IconTypes.LAYERS,
  },
  {
    id: 'users',
    label: 'Users',
    expandable: false,
    icon: IconTypes.USERS,
  },
];

const NavigationFooterOptions = [
  {
    id: 'support',
    label: 'Support',
    expandable: false,
    icon: IconTypes.LIFEBUOY,
  },
  {
    id: 'settings',
    label: 'Settings',
    expandable: false,
    icon: IconTypes.SETTINGS,
  },
];

export {
  NavigationList,
  NavigationFooterOptions,
};
