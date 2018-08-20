// @flow

import React from 'react';
import type { BodyProps } from '../types';

const Body = ({ theme, node, onClick, onKeyPress }: BodyProps) => (
  <span
    style={theme.nodeBodyStyle}
    onClick={onClick}
    onKeyPress={onKeyPress}
    role="button"
    tabIndex={0}
  >
    {node.name}
  </span>
);

export default Body;
