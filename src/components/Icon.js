// @flow

import React from 'react';
import type { IconProps } from '../types';

const stripPx = val => parseInt(val, 10);

const Icon = ({ theme, node }: IconProps) => {
  const height = stripPx(theme.nodeIconStyle.height);
  return (
    <svg height={height} width={height}>
      <polygon
        points={
          node.toggled
            ? `0,0 ${height},0
          ${height / 2},
          ${height}`
            : `0,0 0,${height}
          ${height},
          ${height / 2}`
        }
        style={theme.nodeIconStyle}
      />
    </svg>
  );
};

export default Icon;
