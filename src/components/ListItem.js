// @flow

import React from 'react';
import type { ListItemProps } from '../types';

const ListItem = (props: ListItemProps) => {
  const { theme, node, children } = props;
  return (
    <div
      {...props}
      style={{
        ...theme.nodeStyle,
        ...(node.selected ? theme.nodeHighlightStyle : {}),
      }}
    >
      {children}
    </div>
  );
};

export default ListItem;
