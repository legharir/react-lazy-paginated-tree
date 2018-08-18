// @flow

import React, { Component } from 'react';
import type { Node, Theme } from './types';

type State = {};

type Props = {
  node: Node,
  theme: Theme,
  level: number,
};

class TreeNode extends Component<Props, State> {
  render() {
    const { node, level, theme } = this.props;
    const childLevel = level + 1;
    return (
      <li style={theme.listStyle}>
        <div style={theme.nodeStyle}>{node.name}</div>
        <span>
          <ul>
            {node.children &&
              node.children.map((childNode: Node) => (
                <TreeNode node={childNode} level={childLevel} theme={theme} />
              ))}
          </ul>
        </span>
      </li>
    );
  }
}

export default TreeNode;
