// @flow

import React from 'react';
import type { CheckboxProps } from '../types';

const Checkbox = ({ value, node, onChange, onKeyPress }: CheckboxProps) => (
  <input
    type="checkbox"
    tabIndex={0}
    onChange={() => onChange(node.id)}
    value={value}
    onKeyPress={e => onKeyPress(e, node.id)}
  />
);

export default Checkbox;
