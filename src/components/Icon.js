// @flow

import React from 'react';
import type { IconProps } from '../types';

const Icon = ({ theme, node, onClick, onKeyPress }: IconProps) => (
  <div
    style={theme.nodeIconContainerStyle}
    onClick={() => onClick(node.id)}
    onKeyPress={e => onKeyPress(e, node.id)}
    role="button"
    tabIndex={0}
  >
    <svg height={theme.nodeIconStyle.height} width={theme.nodeIconStyle.height}>
      <polygon
        points={
          node.toggled
            ? `0,0 ${theme.nodeIconStyle.height},0
          ${theme.nodeIconStyle.height / 2},
          ${theme.nodeIconStyle.height}`
            : `0,0 0,${theme.nodeIconStyle.height}
          ${theme.nodeIconStyle.height},
          ${theme.nodeIconStyle.height / 2}`
        }
        style={theme.nodeIconStyle}
      />
    </svg>
  </div>
);

export default Icon;
