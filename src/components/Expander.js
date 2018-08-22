// @flow

import React from 'react';
import MUIListItemIcon from '@material-ui/core/ListItemIcon';
import Folder from '@material-ui/icons/Folder';
import FolderOpen from '@material-ui/icons/FolderOpen';
import type { ExpanderProps } from '../types';

const Expander = ({ theme, node, onClick, onKeyPress }: ExpanderProps) => (
  <MUIListItemIcon
    style={theme.expanderStyle}
    onClick={onClick}
    onKeyPress={onKeyPress}
  >
    {node.expanded ? <FolderOpen /> : <Folder />}
  </MUIListItemIcon>
);

export default Expander;
