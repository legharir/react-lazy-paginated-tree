// @flow

import React, { Component } from 'react';
import type { Node, Theme } from '../types';

type Props = {
  node: Node,
  theme: Theme,
  depth: number,
  toggle: Function,
  onKeyToggle: Function,
  select: Function,
  onKeySelect: Function,
};

class TreeNode extends Component<Props> {
  hasChildren = (): boolean => {
    const { node } = this.props;
    return (
      node.children &&
      node.children.constructor === Array &&
      node.children.length > 0
    );
  };

  render() {
    const {
      node,
      depth,
      theme,
      toggle,
      onKeyToggle,
      select,
      onKeySelect,
    } = this.props;
    return (
      <li style={theme.nodeContainerStyle}>
        <div
          style={{
            ...theme.nodeStyle,
            ...(node.selected ? theme.nodeHighlightStyle : {}),
          }}
        >
          {this.hasChildren() && (
            <div
              style={theme.nodeIconContainerStyle}
              onClick={() => toggle(node.id)}
              onKeyPress={e => onKeyToggle(e, node.id)}
              role="button"
              tabIndex={0}
            >
              <svg
                height={theme.nodeIconStyle.height}
                width={theme.nodeIconStyle.height}
              >
                <polygon
                  points={
                    node.toggled
                      ? `0,0 ${theme.nodeIconStyle.height},0
                    ${theme.nodeIconStyle.height / 2},
                    ${theme.nodeIconStyle.height}`
                      : `0,0 0,${theme.nodeIconStyle.height}
                    ${theme.nodeIconStyle.height},
                    ${theme.nodeIconStyle.height / 2}`
                  }
                  style={theme.nodeIconStyle}
                />
              </svg>
            </div>
          )}
          <div
            style={theme.nodeBodyStyle}
            onClick={() => select(node.id)}
            onKeyPress={e => onKeySelect(e, node.id)}
            role="button"
            tabIndex={0}
          >
            {node.name}
          </div>
        </div>
        <span style={theme.listContainerStyle}>
          <ul style={theme.listStyle}>
            {node.toggled &&
              this.hasChildren() &&
              node.children.map((childNode: Node) => (
                <TreeNode
                  key={childNode.id}
                  node={childNode}
                  depth={depth + 1}
                  theme={theme}
                  toggle={toggle}
                  onKeyToggle={onKeyToggle}
                  select={select}
                  onKeySelect={onKeySelect}
                />
              ))}
          </ul>
        </span>
      </li>
    );
  }
}

export default TreeNode;
