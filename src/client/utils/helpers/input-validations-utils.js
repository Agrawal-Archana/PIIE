const ValidationTypes = {
  REQUIRED: 'required',
  MIN: 'min',
  MAX: 'max',
  MIN_LENGTH: 'minLength',
  MAX_LENGTH: 'maxLength',
  PATTERN: 'pattern',
  VALIDATE: 'validate',
};

const validate = (errors, label) => {
  if (!Object.keys(errors).length) {
    return null;
  }

  const { message } = errors;
  switch (errors.type) {
    case ValidationTypes.REQUIRED:
      if (label) return `${label} is required`;
      return 'This field is required';

    case ValidationTypes.MIN:
      return `Minimum ${message} length is required`;

    case ValidationTypes.MAX:
      return `Maximum ${message} length is allowed`;

    case ValidationTypes.MIN_LENGTH:
      return `Must be at least ${message} characters`;

    case ValidationTypes.MAX_LENGTH:
      return `Maximum ${message} characters are allowed`;

    case ValidationTypes.PATTERN:
    case ValidationTypes.VALIDATE:
      return `Please enter correct value for ${label}`;

    default:
      return '';
  }
};

export {
  validate,
  ValidationTypes,
};
