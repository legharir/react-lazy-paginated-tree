// @flow

import React from 'react';
import type { CheckboxProps } from '../types';

const Checkbox = ({ checked, node, onChange, onKeyPress }: CheckboxProps) => (
  <input
    type="checkbox"
    tabIndex={0}
    onChange={() => onChange(node.id)}
    checked={checked}
    onKeyPress={e => onKeyPress(e, node.id)}
  />
);

export default Checkbox;
