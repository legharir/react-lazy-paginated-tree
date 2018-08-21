// @flow

import React, { Component } from 'react';
import type { Node, TreeState, TreeProps, Event } from '../types';
import { hasChildren, isFullyFetched } from '../util';
import TreeNode from './TreeNode';

import defaultTheme from '../themes/default';
import DefaultList from './List';
import DefaultListItem from './ListItem';
import DefaultExpander from './Expander';
import DefaultCheckbox from './Checkbox';
import DefaultBody from './Body';
import DefaultPaginator from './Paginator';
import DefaultLoading from './Loading';

class Tree extends Component<TreeProps, TreeState> {
  constructor(props: TreeProps) {
    super(props);
    const { nodes } = props;
    this.state = { nodes };
    this.loadChildren = props.loadChildren || this.loadChildren;
  }

  loadChildren = async (
    node: Node,
    pageLimit?: number, // eslint-disable-line
  ): Promise<Array<Node>> => node.children;

  loadMore = async (e: Event, node: Node) => {
    const { pageLimit } = this.props;
    const state: TreeState = { ...this.state };
    if (!isFullyFetched(node)) {
      node.page += 1;
      const loadedChildren = await this.loadChildren(node, pageLimit);
      node.children = node.children.concat(loadedChildren);
    }
    this.setState(state);
  };

  onKeyLoadMore = async (e: Event, node: Node): Promise<void> => {
    if (e.key === 'Enter') {
      await this.loadMore(e, node);
    }
  };

  toggle = async (e: Event, node: Node): Promise<void> => {
    const { pageLimit } = this.props;
    const state: TreeState = { ...this.state };
    if (node.children.length === 0 && hasChildren(node)) {
      node.page += 1;
      const loadedChildren = await this.loadChildren(node, pageLimit);
      node.children = loadedChildren;
    }
    node.expanded = !node.expanded;
    this.setState(state);
  };

  onKeyToggle = async (e: Event, node: Node): Promise<void> => {
    if (e.key === 'Enter') {
      await this.toggle(e, node);
    }
  };

  select = (e: Event, node: Node): void => {
    const state: TreeState = { ...this.state };
    node.selected = !node.selected;
    this.setState(state);
  };

  onKeySelect = (e: Event, node: Node): void => {
    if (e.key === 'Enter') {
      this.select(e, node);
    }
  };

  render() {
    const {
      nodes,
      theme = defaultTheme,
      style,
      // method overrides
      toggle,
      onKeyToggle,
      select,
      onKeySelect,
      // component overrides
      List,
      ListItem,
      Expander,
      Checkbox,
      Body,
      Paginator,
      Loading,
    } = this.props;
    return (
      <ul style={{ ...theme.treeStyle, ...style }}>
        {nodes.map((node: Node) => (
          <TreeNode
            key={node.id}
            node={node}
            theme={theme}
            loadMore={this.loadMore}
            onKeyLoadMore={this.onKeyLoadMore}
            toggle={toggle || this.toggle}
            onKeyToggle={onKeyToggle || this.onKeyToggle}
            select={select || this.select}
            onKeySelect={onKeySelect || this.onKeySelect}
            List={List || DefaultList}
            ListItem={ListItem || DefaultListItem}
            Expander={Expander || DefaultExpander}
            Checkbox={Checkbox || DefaultCheckbox}
            Body={Body || DefaultBody}
            Paginator={Paginator || DefaultPaginator}
            Loading={Loading || DefaultLoading}
          />
        ))}
      </ul>
    );
  }
}

export default Tree;
