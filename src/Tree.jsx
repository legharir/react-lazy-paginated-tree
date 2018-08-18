// @flow

import React, { Component } from 'react';
import type { Node, Theme } from './types';
import TreeNode from './TreeNode';

type State = {};

type Props = {
  nodes: Array<Node>,
  theme: Theme,
};

class Tree extends Component<Props, State> {
  render() {
    const { nodes, theme } = this.props;
    return (
      <ul style={theme.treeStyle}>
        {nodes.map((node: Node) => (
          <TreeNode node={node} level={1} theme={theme} />
        ))}
      </ul>
    );
  }
}

export default Tree;
