import React, {useEffect, useState} from 'react';
import cn from "classnames";

import styles from './Toast.module.scss';
import {ErrorIcon, InfoIcon, SuccessIcon, WarningIcon} from "../../icons";

export enum ToastStatus {
  Success = 'success',
  Info = 'info',
  Error = 'error',
  Warning = 'warning'
}

export type ToastProps = {
  status: ToastStatus;
  title: string;
  description: string;
  shouldCloseWithin?: number;
}

const getIcon = (status: ToastStatus | undefined) => {
  switch (status) {
    case ToastStatus.Info:
      return <InfoIcon fill="#fff" />
    case ToastStatus.Success:
      return <SuccessIcon fill="#fff" />
    case ToastStatus.Warning:
      return <WarningIcon fill="#fff" />
    case ToastStatus.Error:
      return <ErrorIcon fill="#fff" />
    default:
      return null;
  }
}

const Toast = ({ status = ToastStatus.Info, title, description, shouldCloseWithin }: ToastProps) => {
  const [isOpen, setOpen] = useState(true);
  
  useEffect(() => {
    if (shouldCloseWithin) {
      setTimeout(() => {
        setOpen(false);
      }, shouldCloseWithin)
    }
  }, []);
  
  const icon = getIcon(status);
  
  if (!isOpen) {
    return null;
  }
  
  return (
    <div className={cn(styles.toast, styles[status])}>
      <div  className={styles.content}>
        {icon}
        <div className={styles.text}>
          <div className={styles.title}>
            {title}
          </div>
          <div className={styles.description}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toast;
