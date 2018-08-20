// @flow

import React from 'react';
import type { ListProps } from '../types';

const List = ({ theme, children }: ListProps) => (
  <ul style={theme.listStyle}>{children}</ul>
);

export default List;
