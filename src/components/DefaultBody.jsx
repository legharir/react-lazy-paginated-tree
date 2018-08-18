// @flow

import React from 'react';
import type { Node, Theme } from '../types';

type Props = {
  theme: Theme,
  node: Node,
  onClick: Function,
  onKeyPress: Function,
};

const DefaultIcon = ({ theme, node, onClick, onKeyPress }: Props) => (
  <div
    style={theme.nodeBodyStyle}
    onClick={() => onClick(node.id)}
    onKeyPress={e => onKeyPress(e, node.id)}
    role="button"
    tabIndex={0}
  >
    {node.name}
  </div>
);

export default DefaultIcon;
