import React, { FocusEvent, ReactNode, useState } from 'react';
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

export enum InputIntent {
  Primary = 'primary',
  Outline = 'outline',
}

export interface InputProps {
  value?: string;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  type?: InputType;
  size?: InputSize;
  icon?: ReactNode;
  invalid?: boolean;
  iconPosition?: IconPosition;
  onChange?: (value: string) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => unknown;
  intent?: InputIntent;
}

const Input = ({
  name, type = InputType.Default, size = InputSize.Medium,
  invalid = false, intent = InputIntent.Outline, value, icon,
  iconPosition = IconPosition.None, onChange, onBlur, ...rest
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value || '');
  
  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    onBlur?.(event);
  }
  
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
        name={name}
        className={cn(styles.input, styles[size], styles[intent], { [styles.invalid]: invalid })}
        onInput={handleInput}
        onBlur={handleBlur}
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
