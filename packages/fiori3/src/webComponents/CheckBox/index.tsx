import React, { FC } from 'react';
import { ValueState } from '../../lib/ValueState';
import { Event } from '@fiori-for-react/utils';
import UI5CheckBox from '@ui5/webcomponents/dist/CheckBox';
import { withWebComponent, WithWebComponentPropTypes } from '../../internal/withWebComponent';

export interface CheckBoxPropTypes extends WithWebComponentPropTypes {
  disabled?: boolean; // @generated
  readonly?: boolean; // @generated
  checked?: boolean; // @generated
  text?: string; // @generated
  valueState?: ValueState; // @generated
  wrap?: boolean; // @generated
  name?: string; // @generated
  onChange?: (event: Event) => void; // @generated
}

const CheckBox: FC<CheckBoxPropTypes> = withWebComponent<CheckBoxPropTypes>(UI5CheckBox);

CheckBox.displayName = 'CheckBox';

CheckBox.defaultProps = {
  valueState: ValueState.None // @generated
};

export { CheckBox };
