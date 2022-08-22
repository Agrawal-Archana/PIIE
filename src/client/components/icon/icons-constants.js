import {
  Image, AlertCircle, HelpCircle, Mail, BarChart, Home, Layers, Users, Settings,
  Activity, ChevronDown, ChevronRight, LifeBuoy, Star, CloudRain, Bell,
} from 'react-feather';

const IconsMap = {
  IMAGE: Image,
  ALERT_CIRCLE: AlertCircle,
  HELP_CIRCLE: HelpCircle,
  MAIL: Mail,
  BAR_CHART: BarChart,
  HOME: Home,
  LAYERS: Layers,
  USERS: Users,
  SETTINGS: Settings,
  ACTIVITY: Activity,
  CHEVRON_DOWN: ChevronDown,
  CHEVRON_RIGHT: ChevronRight,
  LIFEBUOY: LifeBuoy,
  STAR: Star,
  CLOUD_RAIN: CloudRain,
  NOTIFICATIONS: Bell,
};

const IconTypes = Object.keys(IconsMap).reduce((acc, key) => ({ ...acc, [key]: key }), {});

const IconSizes = {
  X_SMALL: 12,
  SMALL: 16,
  MEDIUM: 20,
  LARGE: 24,
  X_LARGE: 28,
};

const IconColors = {
  LIGHT: 'color-white',
  DARK: 'color-dark',
  GREY: 'color-grey',
  LIGHT_GREY: 'color-light-grey',
  PRIMARY: 'color-primary',
  DISABLED: 'color-disabled',
  SUCCESS: 'color-success',
  WARNING: 'color-warning',
  ERROR: 'color-error',
};

export {
  IconsMap,
  IconTypes,
  IconSizes,
  IconColors,
};
