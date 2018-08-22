// @flow

import React from 'react';
import MUIListItem from '@material-ui/core/ListItem';
import MUIListItemText from '@material-ui/core/ListItemText';
import type { LoadingProps } from '../types';

const Loading = ({ theme }: LoadingProps) => (
  <MUIListItem style={theme.loadingStyle}>
    <MUIListItemText style={theme.loadingTextStyle} primary="Loading..." />
  </MUIListItem>
);

export default Loading;
