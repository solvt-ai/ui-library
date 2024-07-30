import React, { ReactNode } from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

export enum ButtonSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

export enum ButtonIntent {
    Primary = 'primary',
    Outline = 'outline',
    Alert = 'alert',
    Danger = 'danger'
}

export interface ButtonProps {
    text: string;
    size?: ButtonSize;
    intent?: ButtonIntent;
    disabled?: boolean;
    onClick?: () => void;
    fluid?: boolean;
    type?: 'button' | 'submit',
    icon?: ReactNode
}

const Button = ({
    text, size = ButtonSize.Medium, intent = ButtonIntent.Primary,
    disabled = false, onClick, fluid = false, type = 'button', icon
}: ButtonProps) => {
    return (
        <button
            className={cn(styles[intent], styles[size], styles.button, { [styles.fluid]: fluid })}
            disabled={disabled}
            onClick={onClick}
            type={type}
        >
            { icon && <div className={styles.icon}>{icon}</div> }
            {text}
        </button>
    );
}

export default Button;
