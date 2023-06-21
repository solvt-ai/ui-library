import React from 'react';
import cn from 'classnames';

import styles from './Button.module.scss';

export enum ButtonSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

export enum ButtonIntent {
    Primary = 'primary',
    Outline = 'outline'
}

export interface ButtonProps {
    text: string;
    size?: ButtonSize;
    intent?: ButtonIntent;
    disabled?: boolean;
    onClick?: () => void;
}

const Button = ({
    text, size = ButtonSize.Medium, intent = ButtonIntent.Primary,
    disabled = false, onClick
}: ButtonProps) => {
    return (
        <button
            className={cn(styles[intent], styles[size], styles.button)}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;