/** @format */

import React from 'react';
import { InputProps } from './input.types';
import { PRIMARY } from '../../../constants';
import SingleDigitInput from './single-digit-input';
import StandardInput from './standard-input';
import EmailInviteInput from './email-invite-input';

export const Input: React.FC<InputProps> = (props) => {
  const { variant } = props;

  switch (variant) {
    case 'single-digit':
      return <SingleDigitInput {...props} />;
    case 'email-invite':
      return <EmailInviteInput {...props} />;
    case 'default':
    default:
      return <StandardInput {...props} />;
  }
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  variant: 'default',
  hintValidations: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  captureSingleDigitInputValue: (value: number) => {},
  border: PRIMARY,
  cursor: PRIMARY,
};

export default Input;
