// @flow

import React, { Component } from 'react';
import type { Node, TreeState, TreeProps, Event } from '../types';
import { populateCache } from '../util';
import TreeNode from './TreeNode';

import DefaultList from './List';
import DefaultListItem from './ListItem';
import DefaultIcon from './Icon';
import DefaultCheckbox from './Checkbox';
import DefaultBody from './Body';

class Tree extends Component<TreeProps, TreeState> {
  constructor(props: TreeProps) {
    super(props);
    const cache = {};
    const { nodes } = props;
    populateCache(cache, nodes);
    this.state = { nodes, cache };
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
    const {
      nodes,
      theme,
      style,
      // method overrides
      toggle,
      onKeyToggle,
      select,
      onKeySelect,
      // component overrides
      List,
      ListItem,
      Icon,
      Checkbox,
      Body,
    } = this.props;
    return (
      <ul style={{ ...theme.treeStyle, ...style }}>
        {nodes.map((node: Node) => (
          <TreeNode
            key={node.id}
            node={node}
            theme={theme}
            toggle={toggle || this.toggle}
            onKeyToggle={onKeyToggle || this.onKeyToggle}
            select={select || this.select}
            onKeySelect={onKeySelect || this.onKeySelect}
            List={List || DefaultList}
            ListItem={ListItem || DefaultListItem}
            Icon={Icon || DefaultIcon}
            Checkbox={Checkbox || DefaultCheckbox}
            Body={Body || DefaultBody}
          />
        ))}
      </ul>
    );
  }
}

export default Tree;
