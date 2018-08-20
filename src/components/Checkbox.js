// @flow

import React from 'react';
import type { CheckboxProps } from '../types';

const Checkbox = ({ node }: CheckboxProps) => (
  <input
    type="checkbox"
    tabIndex={0}
    checked={node.selected}
    onChange={() => {}} // prevent React from rendering check-box as read-only
  />
);

export default Checkbox;
