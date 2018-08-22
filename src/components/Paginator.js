// @flow

import React from 'react';
import MUIListItem from '@material-ui/core/ListItem';
import MUIListItemText from '@material-ui/core/ListItemText';
import MUITypography from '@material-ui/core/Typography';
import type { ExpanderProps, Theme } from '../types';

const Typography = ({ theme }: { theme: Theme }) => (
  <MUITypography style={theme.paginatorTextStyle}>Load More</MUITypography>
);

const Paginator = ({ theme, onClick, onKeyPress }: ExpanderProps) => (
  <MUIListItem
    button
    onClick={onClick}
    onKeyPress={onKeyPress}
    style={theme.paginatorStyle}
  >
    <MUIListItemText disableTypography primary={<Typography theme={theme} />} />
  </MUIListItem>
);

export default Paginator;
