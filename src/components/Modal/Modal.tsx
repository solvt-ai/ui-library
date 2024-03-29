import React, { ReactNode, useCallback } from 'react';
import cn from 'classnames';

import styles from './Modal.module.scss';

export enum ModalSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large'
}

export interface ModalProps {
    children: ReactNode | string;
    title?: string;
    open?: boolean;
    onClose?: () => void;
    size?: ModalSize;
    withHeader?: boolean
}


const Modal = ({ open, size = ModalSize.Medium, children, onClose, title, withHeader = false }: ModalProps) => {

    const handleClick = useCallback((event) => {
        event.stopPropagation(true);
        const isOverlayClick = event.target.classList.contains(styles.darkBackground);

        if (onClose && isOverlayClick) {
            onClose();
        }
    }, [])
    
    const handleKeyPress = useCallback((event) => {
        if (event.key === 'Esc' && onClose) {
            onClose();
        }
    }, [])

    if (open) {
        return (
            <div className={styles.darkBackground} onClick={handleClick}>
                <div className={styles.modalWrapper} onKeyPress={handleKeyPress}>
                    <div className={cn(styles.modal, styles[size])}>
                        { title && (
                          <div className={withHeader ? styles.header : styles.heading}>{title}</div>
                        )}
                        <div className={styles.content}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return null;
}

export default Modal;
