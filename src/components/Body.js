// @flow

import React from 'react';
import MUIListItemText from '@material-ui/core/ListItemText';
import type { BodyProps, Node } from '../types';

const BodyText = ({ node }: { node: Node }) => (
  <span>
    {node.name}
    &nbsp;
    {node.description ? <i>({node.description})</i> : ''}
  </span>
);

const Body = ({ theme, node, onClick, onKeyPress }: BodyProps) => (
  <MUIListItemText
    style={theme.bodyStyle}
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyPress={onKeyPress}
    primary={<BodyText node={node} />}
  />
);

export default Body;
