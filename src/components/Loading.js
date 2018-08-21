// @flow

import React from 'react';
import type { LoadingProps } from '../types';

const Loading = ({ theme }: LoadingProps) => (
  <div style={theme.loadingStyle}>loading...</div>
);

export default Loading;
