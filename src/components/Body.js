// @flow

import React from 'react';
import MUIListItemText from '@material-ui/core/ListItemText';
import type { BodyProps } from '../types';

const Body = ({ theme, node, onClick, onKeyPress }: BodyProps) => (
  <MUIListItemText
    style={theme.bodyStyle}
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyPress={onKeyPress}
    primary={node.name}
  />
);

export default Body;
