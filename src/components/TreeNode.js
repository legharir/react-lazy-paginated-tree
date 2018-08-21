// @flow

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import type { Node, TreeNodeProps, TreeNodeState } from '../types';
import { hasChildren, hasLoadedChildren, shouldShowMore } from '../util';

class TreeNode extends Component<TreeNodeProps, TreeNodeState> {
  state = {
    expanderLoading: false,
    paginatorLoading: false,
  };

  stopPropagation = (e: Event) => {
    e.stopPropagation();
  };

  handleToggle = async (
    e: Event,
    node: Node,
    callable: Function,
    disabled: boolean,
  ) => {
    this.stopPropagation(e);
    if (!disabled) {
      if (!node.expanded && !hasLoadedChildren(node)) {
        this.setState({ expanderLoading: true });
        await callable(e, node);
        this.setState({ expanderLoading: false });
      } else {
        await callable(e, node);
      }
    }
  };

  handleLoadMore = async (
    e: Event,
    node: Node,
    callable: Function,
    disabled: boolean,
  ) => {
    if (!disabled) {
      this.setState({ paginatorLoading: true });
      await callable(e, node);
      this.setState({ paginatorLoading: false });
    }
  };

  render() {
    const {
      depth,
      node,
      theme,
      indentWidth,
      loadMore,
      onKeyLoadMore,
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
    }: TreeNodeProps = this.props;

    const { expanderLoading, paginatorLoading } = this.state;

    let children = [];
    if (node.expanded && hasChildren(node)) {
      children = node.children.map((childNode: Node) => (
        <TreeNode
          key={childNode.id}
          depth={depth + 1}
          node={childNode}
          theme={theme}
          indentWidth={indentWidth}
          loadMore={loadMore}
          onKeyLoadMore={onKeyLoadMore}
          toggle={toggle}
          onKeyToggle={onKeyToggle}
          select={select}
          onKeySelect={onKeySelect}
          List={List}
          ListItem={ListItem}
          Expander={Expander}
          Checkbox={Checkbox}
          Body={Body}
          Paginator={Paginator}
          Loading={Loading}
          DepthPadding={DepthPadding}
        />
      ));
    }
    return (
      <React.Fragment>
        <ListItem
          theme={theme}
          node={node}
          onClick={e => select(e, node)}
          onKeyPress={e => onKeySelect(e, node)}
        >
          <Checkbox theme={theme} node={node} checked={node.selected} />
          <DepthPadding indentWidth={indentWidth} depth={depth} />
          {hasChildren(node) && (
            <Expander
              theme={theme}
              node={node}
              onClick={e => this.handleToggle(e, node, toggle, expanderLoading)}
              onKeyPress={e =>
                this.handleToggle(e, node, onKeyToggle, expanderLoading)
              }
            />
          )}
          <Body theme={theme} node={node} />
        </ListItem>
        <List theme={theme}>
          <ReactCSSTransitionGroup
            transitionName="slide"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            {expanderLoading && <Loading theme={theme} node={node} />}
            {children.length > 0 && (
              <div key={node.id}>
                {children}
                {paginatorLoading && <Loading theme={theme} node={node} />}
                {!paginatorLoading &&
                  shouldShowMore(node) && (
                    <Paginator
                      theme={theme}
                      node={node}
                      onClick={e =>
                        this.handleLoadMore(e, node, loadMore, paginatorLoading)
                      }
                      onKeyPress={e =>
                        this.handleLoadMore(
                          e,
                          node,
                          onKeyLoadMore,
                          paginatorLoading,
                        )
                      }
                    />
                  )}
              </div>
            )}
          </ReactCSSTransitionGroup>
        </List>
      </React.Fragment>
    );
  }
}

export default TreeNode;
