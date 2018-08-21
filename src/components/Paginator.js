// @flow

import React from 'react';
import type { ExpanderProps } from '../types';

const Paginator = ({ theme, onClick, onKeyPress }: ExpanderProps) => (
  <div
    style={theme.expanderStyle}
    onClick={onClick}
    onKeyPress={onKeyPress}
    role="button"
    tabIndex={0}
  >
    load more...
  </div>
);

export default Paginator;
