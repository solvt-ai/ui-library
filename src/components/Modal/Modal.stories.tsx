import React, { useState } from 'react';

import { Meta } from '@storybook/react';
import Button from '../Button/Button';
import Modal, { ModalProps, ModalSize } from "./Modal";

export default {
    title: 'components/Modal',
    component: Modal,
    argTypes: {
        size: {
            options: [ModalSize.Small, ModalSize.Medium, ModalSize.Large],
            control: { type: 'select' }
        },
        title: {
            control: { type: 'text' }
        },
        open: {
            disable: true
        }
    },
    args: {
        size: ModalSize.Medium,
        title: "Title",
        open: false
    }
} as Meta<ModalProps>

export const ModalStoryTemplate = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div style={{ width: '560px', display: 'flex', justifyContent: 'center', margin: '80px auto'}}>
            <Button text="Click me to open Modal" onClick={() => setOpen(true)} />
            <Modal title="Title" open={isOpen} onClose={() => setOpen(false)}>Empty Modal Content</Modal>
        </div>
    );
}

ModalStoryTemplate.storyName = 'Modal';
