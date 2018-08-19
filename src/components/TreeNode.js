// @flow

import React, { Component } from 'react';
import type { Node, TreeNodeProps } from '../types';
import { hasChildren } from '../util';
import DefaultIcon from './Icon';
import DefaultBody from './Body';
import DefaultCheckbox from './Checkbox';
import Animated from '../decorators/Animated';

@Animated()
class TreeNode extends Component<TreeNodeProps> {
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
          {hasChildren(node) ? (
            <span
              style={theme.nodeIconContainerStyle}
              onClick={() => toggle(node.id)}
              onKeyPress={e => onKeyToggle(e, node.id)}
              role="button"
              tabIndex={0}
            >
              <DefaultIcon
                theme={theme}
                node={node}
                onClick={toggle}
                onKeyPress={onKeyToggle}
              />
            </span>
          ) : (
            <span style={theme.nodeIconContainerStyle} /> /* placeholder */
          )}
          <DefaultCheckbox
            checked={node.selected}
            node={node}
            onChange={select}
            onKeyPress={onKeySelect}
          />
          <span
            style={theme.nodeBodyStyle}
            onClick={() => select(node.id)}
            onKeyPress={e => onKeySelect(e, node.id)}
            role="button"
            tabIndex={0}
          >
            <DefaultBody
              theme={theme}
              node={node}
              onClick={select}
              onKeyPress={onKeySelect}
            />
          </span>
        </div>
        <span style={theme.listContainerStyle}>
          <ul style={theme.listStyle}>
            {node.toggled &&
              hasChildren(node) &&
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
