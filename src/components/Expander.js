// @flow

import React from 'react';
import MUIListItemIcon from '@material-ui/core/ListItemIcon';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import type { ExpanderProps } from '../types';

const Expander = ({ theme, node, onClick, onKeyPress }: ExpanderProps) => (
  <MUIListItemIcon
    style={theme.expanderStyle}
    onClick={onClick}
    onKeyPress={onKeyPress}
  >
    {node.expanded ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
  </MUIListItemIcon>
);

export default Expander;
