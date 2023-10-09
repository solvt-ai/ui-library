import React, {FocusEvent, ReactNode, useState} from 'react';

import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import styles from './Picker.module.scss';
import cn from "classnames";

export enum PickerType {
  Default = 'default',
  Time = 'time',
  Date = 'date'
}

export type PickerProps = {
  value?: string | Date;
  name?: string;
  placeholder?: string;
  type?: PickerType;
  icon?: ReactNode;
  onChange?: (value: string | Date) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => unknown;
  invalid?: boolean;
}

const Wrapper = ({ children, icon, invalid }: Partial<PickerProps>) => (
  <div className={cn(styles.wrapper, { [styles.invalid]: invalid })}>
    {children}
    {icon && (
      <div className={styles.icon}>{icon}</div>
    )}
  </div>
);

const Picker = ({
  value, type = PickerType.Default, icon, placeholder, name, onChange, onBlur, invalid
}: PickerProps) => {
  const [selectedValue, setSelectedValue] = useState<Date | string | undefined>(value ?? '');
  
  const handleValueChange = (e) => {
    setSelectedValue(e.currentTarget.value);
    if (onChange) {
      onChange(e.currentTarget.value);
    }
  }
  
  const handleDateChange = (value: Date) => {
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  }
  
  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    onBlur?.(event);
  }
  
  switch (type) {
    case PickerType.Time:
      return (
        <Wrapper icon={icon} invalid={invalid}>
          <input
            name={name}
            type={PickerType.Time}
            placeholder={placeholder}
            value={selectedValue}
            onChange={handleValueChange}
            onBlur={handleBlur}
          />
        </Wrapper>
      );
    case PickerType.Date:
      return (
        <Wrapper icon={icon} invalid={invalid}>
          <DatePicker
            name={name}
            selected={selectedValue}
            className={styles.customDateInput}
            onChange={handleDateChange}
            onBlur={onBlur}
            placeholderText={placeholder}
          />
        </Wrapper>
      );
    default:
      return (
        <Wrapper invalid={invalid}>
          <input
            type="text"
            name={name}
            value={selectedValue}
            placeholder={placeholder}
            onChange={handleValueChange}
            onBlur={handleBlur}
          />
        </Wrapper>
      );
  }
}

export default Picker;
