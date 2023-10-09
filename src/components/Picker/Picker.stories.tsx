import React from 'react';

import {Meta} from '@storybook/react';

import Picker, {PickerProps, PickerType} from "./Picker";

import {CalendarIcon, ClockIcon} from "../../icons";

import styles from './Picker.module.scss';

export default {
  title: 'components/Picker',
  component: Picker,
} as Meta<PickerProps>

export const PickerStoryTemplate = (props: PickerProps) => (
  <div className={styles.pickers}>
    <Picker icon={<CalendarIcon fill="#262C3CCC" />} type={PickerType.Date} placeholder="Date" />
    <Picker type={PickerType.Time} placeholder="Time" />
    <Picker invalid placeholder="Text" />
  </div>
);

PickerStoryTemplate.storyName = 'Picker'
