// @flow

import React, { Component } from 'react';
import type { Node, Theme } from './types';

type State = {};

type Props = {
  node: Node,
  theme: Theme,
  depth: number,
  toggle: Function,
  onKeyToggle: Function,
};

class TreeNode extends Component<Props, State> {
  render() {
    const { node, depth, theme, toggle, onKeyToggle } = this.props;
    return (
      <li style={theme.nodeContainerStyle}>
        <div
          style={theme.nodeStyle}
          onClick={() => toggle(node.id)}
          onKeyPress={e => onKeyToggle(e, node.id)}
          role="button"
          tabIndex={0}
        >
          {node.name}
        </div>
        <span style={theme.listContainerStyle}>
          <ul style={theme.listStyle}>
            {node.toggled &&
              node.children &&
              node.children.map((childNode: Node) => (
                <TreeNode
                  key={childNode.id}
                  node={childNode}
                  depth={depth + 1}
                  theme={theme}
                  toggle={toggle}
                  onKeyToggle={onKeyToggle}
                />
              ))}
          </ul>
        </span>
      </li>
    );
  }
}

export default TreeNode;
