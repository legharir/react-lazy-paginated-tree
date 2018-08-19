// @flow

import React, { Component } from 'react';
import type { Node, TreeState, TreeProps, Event } from '../types';
import { populateCache } from '../util';
import TreeNode from './TreeNode';

class Tree extends Component<TreeProps, TreeState> {
  constructor(props: TreeProps) {
    super(props);
    const cache = {};
    const {
      nodes,
      toggle,
      onKeyToggle,
      select,
      onKeySelect,
      loadChildren,
    } = props;
    populateCache(cache, nodes);

    this.state = {
      nodes,
      cache,
    };

    this.toggle = toggle || this.toggle;
    this.onKeyToggle = onKeyToggle || this.onKeyToggle;
    this.select = select || this.select;
    this.onKeySelect = onKeySelect || this.onKeySelect;
    this.loadChildren = loadChildren || this.loadChildren;
  }

  loadChildren = (nodeId: string): Array<Node> => {
    console.log(nodeId);
    return [];
  };

  toggle = async (nodeId: string): Promise<void> => {
    const state: TreeState = { ...this.state };
    const node: Node = state.cache[nodeId];
    if (!node.fullyFetched) {
      node.children = await this.loadChildren(nodeId);
    }
    node.toggled = !node.toggled;
    this.setState(state);
  };

  onKeyToggle = async (e: Event, nodeId: string): Promise<void> => {
    if (e.key === 'Enter') {
      await this.toggle(nodeId);
    }
  };

  select = (nodeId: string): void => {
    const state: TreeState = { ...this.state };
    const node: Node = state.cache[nodeId];
    node.selected = !node.selected;
    this.setState(state);
  };

  onKeySelect = (e: Event, nodeId: string): void => {
    if (e.key === 'Enter') {
      this.select(nodeId);
    }
  };

  render() {
    const { nodes, theme, style } = this.props;
    return (
      <ul style={{ ...theme.treeStyle, ...style }}>
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
