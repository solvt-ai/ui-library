import React, { ReactNode, useState } from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

export enum InputType {
  Password = 'password',
  Email = 'email',
  Default = 'default'
  
}

export enum InputSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export enum IconPosition {
  Left = 'left',
  Right = 'right',
  None = 'none'
}

export interface InputProps {
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  type?: InputType;
  size?: InputSize;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  onChange?: (value: string) => void;
}

const Input = ({
  type = InputType.Default, size = InputSize.Medium,
  value, icon, iconPosition = IconPosition.None, onChange, ...rest
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value || '');
  
  const handleInput = (event) => {
    const { target: { value } } = event;
    setInputValue(value);
    
    if (onChange) {
      onChange(value);
    }
  };
  
  return (
    <div className={styles.inputWrapper}>
      <input
        type={type}
        className={cn(styles.input, styles[size])}
        onInput={handleInput}
        value={inputValue}
        {...rest}
      />
      {icon && (
        <div className={cn(styles.icon, { [styles[iconPosition]]: iconPosition })}>
          {icon}
        </div>
      )}
    </div>
  );
}

export default Input;
