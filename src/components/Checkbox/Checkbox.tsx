import React, { useEffect, useState } from 'react';

import styles from './Checkbox.module.scss';
import cn from "classnames";

export interface CheckboxProps {
  value: boolean;
  name: string;
  label?: string;
  onChange?: () => void;
  disabled?: boolean;
}

const Checkbox = ({ value, name, label, onChange, disabled = false, ...props }: CheckboxProps) => {
  const [isChecked, setChecked] = useState(value);
  
  useEffect(() => {
    setChecked(value);
  }, [value]);
  
  const handleChange = () => {
    setChecked((prev) => !prev);
    
    if (onChange) {
      onChange();
    }
  }
  
  return (
    <div className={cn(styles.checkbox, {[styles.disabled]: disabled })}>
      <label htmlFor={name}>
        <input disabled={disabled} type="checkbox" checked={isChecked} onChange={handleChange} {...props} />
        { label && (
          <span>{label}</span>
        )}
      </label>
    </div>
  );
}

export default Checkbox;
