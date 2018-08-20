// @flow

import React from 'react';
import type { ListProps } from '../types';

const List = (props: ListProps) => {
  const { theme, children } = props;
  return <ul style={theme.listStyle}>{children}</ul>;
};

export default List;
