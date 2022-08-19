import {
  Image, AlertCircle, HelpCircle, Mail,
} from 'react-feather';

const IconsMap = {
  IMAGE: Image,
  ALERT_CIRCLE: AlertCircle,
  HELP_CIRCLE: HelpCircle,
  MAIL: Mail,
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
  GRAY_500: '#667085',
  ERROR_500: '#f04438',
};

export {
  IconsMap,
  IconTypes,
  IconSizes,
  IconColors,
};
