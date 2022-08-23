import React from 'react';

import styled from 'styled-components';
import {Label, LabelProps} from '../typography/label/label';
import Input from '../input/input';

export interface InputFieldProps extends LabelProps {
  bg?: string;
  color?: string;
  label: string;
  placeholder?: string;
  fontSize?: string | number;
  name?: string;
  id?: string;
  type?: string;
  inputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
  textTransform?: 'uppercase' | 'none';
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputField = (props: InputFieldProps) => {

  return (
    <Div>
      <Label marginBottom="0.875rem" variant="formLabel" {...props}>
        {props.label}
      </Label>
      <Input
        color={props.color}
        borderBottomColor={props.color}
        placeholder={props.placeholder || props.label}
        fontSize={props.fontSize}
        name={props.name}
        value={props.value || ''}
        onChange={props.inputChange}
        onBlur={props.inputBlur}
        id={props.id}
        type={props.type}
        textTransform={props.textTransform}
      />
    </Div>
  );
};

InputField.defaultProps = {
  fontSize: '0.75rem',
  color: 'neutral.4',
};

export default InputField;
