// @flow

import React from 'react';
import MUIList from '@material-ui/core/List';
import type { ListProps } from '../types';

const List = ({ theme, children }: ListProps) => (
  <MUIList style={theme.listStyle}>{children}</MUIList>
);

export default List;
