// @flow

import React from 'react';
import MUICheckbox from '@material-ui/core/Checkbox';
import type { CheckboxProps } from '../types';

const Checkbox = ({ node, theme }: CheckboxProps) => (
  <MUICheckbox
    style={theme.checkboxStyle}
    type="checkbox"
    tabIndex={0}
    checked={node.selected}
    onChange={() => {}}
  />
);

export default Checkbox;
