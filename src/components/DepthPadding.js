// @flow

import React from 'react';
import type { DepthPaddingProps } from '../types';

const DepthPadding = (props: DepthPaddingProps) => {
  const { indentWidth, depth, children } = props;
  return <div style={{ paddingLeft: indentWidth * depth }}>{children}</div>;
};

export default DepthPadding;
