// @flow

import React, { Component } from 'react';
import type { Node, TreeState, TreeProps, Event } from '../types';
import { hasChildren, isFullyFetched } from '../util';
import TreeNode from './TreeNode';

import defaultTheme from '../theme';
import DefaultList from './List';
import DefaultListItem from './ListItem';
import DefaultExpander from './Expander';
import DefaultCheckbox from './Checkbox';
import DefaultBody from './Body';
import DefaultPaginator from './Paginator';
import DefaultLoading from './Loading';
import DefaultDepthPadding from './DepthPadding';

import '../animations/index.css';

const DEFAULT_INDENT_WIDTH = 20;
const DEFAULT_DEPTH = 0;

class Tree extends Component<TreeProps, TreeState> {
  constructor(props: TreeProps) {
    super(props);
    const { nodes, parse } = props;
    this.state = {
      nodes: parse ? parse(nodes) : nodes,
    };
    this.loadChildren = props.loadChildren || this.loadChildren;
  }

  setBroadcastedState = (state: TreeState) => {
    this.setState(state);
    const { onUpdate } = this.props;
    if (onUpdate) {
      onUpdate(state);
    }
  };

  loadChildren = async (
    node: Node,
    pageLimit?: number, // eslint-disable-line
  ): Promise<Array<Node>> => node.children;

  loadMore = async (e: Event, node: Node) => {
    const { pageLimit, parse } = this.props;
    const state: TreeState = { ...this.state };
    if (!isFullyFetched(node) && pageLimit) {
      node.page += 1;
      const loadedChildren = await this.loadChildren(node, pageLimit);
      node.children = node.children.concat(
        parse ? parse(loadedChildren) : loadedChildren,
      );
    }
    this.setBroadcastedState(state);
  };

  onKeyLoadMore = async (e: Event, node: Node): Promise<void> => {
    if (e.key === 'Enter') {
      await this.loadMore(e, node);
    }
  };

  toggle = async (e: Event, node: Node): Promise<void> => {
    const { pageLimit, parse } = this.props;
    const state: TreeState = { ...this.state };
    if (node.children.length === 0 && hasChildren(node)) {
      node.page += 1;
      const loadedChildren = await this.loadChildren(node, pageLimit);
      node.children = parse ? parse(loadedChildren) : loadedChildren;
    }
    node.expanded = !node.expanded;
    this.setBroadcastedState(state);
  };

  onKeyToggle = async (e: Event, node: Node): Promise<void> => {
    if (e.key === 'Enter') {
      await this.toggle(e, node);
    }
  };

  select = (e: Event, node: Node): void => {
    const state: TreeState = { ...this.state };
    node.selected = !node.selected;
    this.setBroadcastedState(state);
  };

  onKeySelect = (e: Event, node: Node): void => {
    if (e.key === 'Enter') {
      this.select(e, node);
    }
  };

  render() {
    const {
      style,
      theme = defaultTheme,
      indentWidth,
      toggle,
      onKeyToggle,
      select,
      onKeySelect,
      List,
      ListItem,
      Expander,
      Checkbox,
      Body,
      Paginator,
      Loading,
      DepthPadding,
    } = this.props;

    const { nodes } = this.state;

    return (
      <ul style={{ ...theme.treeStyle, ...style }}>
        {nodes.map((node: Node) => (
          <TreeNode
            key={node.id}
            depth={DEFAULT_DEPTH}
            node={node}
            theme={theme}
            indentWidth={indentWidth || DEFAULT_INDENT_WIDTH}
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
            DepthPadding={DepthPadding || DefaultDepthPadding}
          />
        ))}
      </ul>
    );
  }
}

export default Tree;
