// @flow

import React, { Component } from 'react';
import type { Node, TreeState, TreeProps, Event } from '../types';
import { populateCache } from '../util';
import TreeNode from './TreeNode';

class Tree extends Component<TreeProps, TreeState> {
  constructor(props: TreeProps) {
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

  onKeyToggle = (e: Event, nodeId: string): void => {
    if (e.key === 'Enter') {
      this.toggle(nodeId);
    }
  };

  select = (nodeId: string): void => {
    const state = { ...this.state };
    state.cache[nodeId].selected = !state.cache[nodeId].selected;
    this.setState(state);
  };

  onKeySelect = (e: Event, nodeId: string): void => {
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
