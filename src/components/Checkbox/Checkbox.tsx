import React, {ChangeEvent, FocusEvent, useEffect, useMemo, useState} from 'react';

import styles from './Checkbox.module.scss';
import cn from "classnames";

export interface CheckboxProps {
  value: boolean;
  name: string;
  label?: string;
  onValueChange?: (value: boolean) => unknown;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => unknown;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => unknown;
  disabled?: boolean;
  invalid?: boolean;
}

const Checkbox = ({
  value, name, label, onValueChange, onBlur, onFocus, disabled = false, invalid = false, ...props
}: CheckboxProps) => {
  const [isChecked, setChecked] = useState(value || false);
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { checked } } = event;
    if (disabled) {
      return;
    }
    setChecked(checked);
    onValueChange?.(checked);
  }
  
  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    onBlur?.(event);
  }
  
  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    onFocus?.(event);
  }
  
  return (
    <div className={cn(styles.checkbox, {[styles.disabled]: disabled, [styles.invalid]: invalid })}>
      <label htmlFor={name}>
        <input
          name={name}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          {...props}
        />
        { label && (
          <span>{label}</span>
        )}
      </label>
    </div>
  );
}

export default Checkbox;
