// @flow

import React from 'react';
import MUIListItem from '@material-ui/core/ListItem';
import MUIListItemText from '@material-ui/core/ListItemText';
import MUITypography from '@material-ui/core/Typography';
import type { LoadingProps, Theme } from '../types';

const Typography = ({ theme }: { theme: Theme }) => (
  <MUITypography style={theme.loadingTextStyle}>Loading...</MUITypography>
);

const Loading = ({ theme }: LoadingProps) => (
  <MUIListItem style={theme.loadingStyle}>
    <MUIListItemText disableTypography primary={<Typography theme={theme} />} />
  </MUIListItem>
);

export default Loading;
