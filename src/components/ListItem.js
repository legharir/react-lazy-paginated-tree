// @flow

import React from 'react';
import MUIListItem from '@material-ui/core/ListItem';
import type { ListItemProps } from '../types';

const ListItem = ({ theme, onClick, onKeyPress, children }: ListItemProps) => (
  <MUIListItem
    button
    onClick={onClick}
    onKeyPress={onKeyPress}
    style={theme.listItemStyle}
  >
    {children}
  </MUIListItem>
);

export default ListItem;
