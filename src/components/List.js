// @flow

import React from 'react';
import type { ListProps } from '../types';

const List = ({ theme, children }: ListProps) => (
  <div style={theme.listStyle}>{children}</div>
);

export default List;
