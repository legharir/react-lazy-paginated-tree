// @flow

import React from 'react';
import MUIListItem from '@material-ui/core/ListItem';
import MUIListItemText from '@material-ui/core/ListItemText';
import type { ExpanderProps } from '../types';

const Paginator = ({ theme, onClick, onKeyPress }: ExpanderProps) => (
  <MUIListItem
    button
    onClick={onClick}
    onKeyPress={onKeyPress}
    style={theme.paginatorStyle}
  >
    <MUIListItemText style={theme.paginatorTextStyle} primary="Load More" />
  </MUIListItem>
);

export default Paginator;
