// @flow

import React from 'react';
import type { BodyProps } from '../types';

const Body = ({ theme, node, onClick, onKeyPress }: BodyProps) => (
  <div
    style={theme.nodeBodyStyle}
    onClick={() => onClick(node.id)}
    onKeyPress={e => onKeyPress(e, node.id)}
    role="button"
    tabIndex={0}
  >
    {node.name}
  </div>
);

export default Body;
