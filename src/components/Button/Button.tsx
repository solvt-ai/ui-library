import React from 'react';

import styles from './Button.module.css';

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
}

const Button = ({ text, size = ButtonSize.Medium, intent = ButtonIntent.Primary }: ButtonProps) => {
    switch (intent) {
        case ButtonIntent.Primary:
            return (
                <button className={styles.primary}>Primary</button>
            );
        case ButtonIntent.Outline:
            return (
                <button className={styles.outline}>Outline</button>
            )
    }
}

export default Button;