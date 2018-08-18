// @flow

import React, { Component } from 'react';
import type { Node, Theme, Cache } from '../types';
import TreeNode from './TreeNode';

type State = {
  nodes: Array<Node>,
  cache: Cache,
};

type Props = {
  nodes: Array<Node>,
  theme: Theme,

  // optional redux state management overrides
  toggle?: Function,
  onKeyToggle?: Function,
  select?: Function,
  onKeySelect?: Function,
};

const populateCache = (cache: Cache, nodes: Array<Node>): Cache => {
  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i];
    cache[node.id] = node;
    const { children } = node;
    if (children && children.constructor === Array && children.length > 0) {
      populateCache(cache, children);
    }
  }
  return cache;
};

class Tree extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const cache = {};
    const { nodes } = props;
    populateCache(cache, nodes);

    this.state = {
      nodes,
      cache,
    };

    this.toggle = props.toggle || this.toggle;
    this.onKeyToggle = props.onKeyToggle || this.onKeyToggle;
    this.select = props.select || this.select;
    this.onKeySelect = props.onKeySelect || this.onKeySelect;
  }

  toggle = (nodeId: string): void => {
    const state = { ...this.state };
    state.cache[nodeId].toggled = !state.cache[nodeId].toggled;
    this.setState(state);
  };

  onKeyToggle = (e: Object, nodeId: string): void => {
    if (e.key === 'Enter') {
      this.toggle(nodeId);
    }
  };

  select = (nodeId: string): void => {
    const state = { ...this.state };
    state.cache[nodeId].selected = !state.cache[nodeId].selected;
    this.setState(state);
  };

  onKeySelect = (e: Object, nodeId: string): void => {
    if (e.key === 'Enter') {
      this.select(nodeId);
    }
  };

  render() {
    const { nodes, theme } = this.props;
    return (
      <ul style={theme.treeStyle}>
        {nodes.map((node: Node) => (
          <TreeNode
            key={node.id}
            node={node}
            depth={1}
            theme={theme}
            toggle={this.toggle}
            onKeyToggle={this.onKeyToggle}
            select={this.select}
            onKeySelect={this.onKeySelect}
          />
        ))}
      </ul>
    );
  }
}

export default Tree;
