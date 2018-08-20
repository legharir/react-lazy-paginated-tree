// @flow

import React, { Component } from 'react';
import type { ListProps } from '../types';

class List extends Component<ListProps> {
  render() {
    const { theme, children } = this.props;
    return <ul style={theme.listStyle}>{children}</ul>;
  }
}

export default List;
