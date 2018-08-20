// @flow

import React from 'react';
import type { IconProps } from '../types';

const stripPx = val => parseInt(val, 10);

const Icon = ({ theme, node, onClick, onKeyPress }: IconProps) => {
  const height = stripPx(theme.nodeIconStyle.height);
  return (
    <span
      style={theme.nodeIconContainerStyle}
      onClick={onClick}
      onKeyPress={onKeyPress}
      role="button"
      tabIndex={0}
    >
      <svg height={height} width={height}>
        <polygon
          points={
            node.expanded
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
    </span>
  );
};

export default Icon;
