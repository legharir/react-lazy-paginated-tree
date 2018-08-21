// @flow

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import type { Node, TreeNodeProps, TreeNodeState } from '../types';
import { hasChildren, shouldShowMore } from '../util';

class TreeNode extends Component<TreeNodeProps, TreeNodeState> {
  state = {
    expanderDisabled: false,
    paginatorDisabled: false,
  };

  render() {
    const {
      node,
      theme,
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
    }: TreeNodeProps = this.props;

    const { expanderDisabled, paginatorDisabled } = this.state;

    let children = [];
    if (node.expanded && hasChildren(node)) {
      children = node.children.map((childNode: Node) => (
        <TreeNode
          key={childNode.id}
          node={childNode}
          theme={theme}
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
        />
      ));
    }

    return (
      <React.Fragment>
        <ListItem
          theme={theme}
          node={node}
          onClick={() => select(node)}
          onKeyPress={e => onKeySelect(e, node)}
        >
          {hasChildren(node) && (
            <Expander
              disabled={expanderDisabled}
              theme={theme}
              node={node}
              onClick={e => {
                e.stopPropagation();
                return toggle(node);
              }}
              onKeyPress={e => {
                e.stopPropagation();
                return onKeyToggle(e, node);
              }}
            />
          )}
          <Checkbox theme={theme} node={node} checked={node.selected} />
          <Body theme={theme} node={node} />
        </ListItem>
        <List theme={theme}>
          <ReactCSSTransitionGroup
            transitionName="slide"
            transitionEnterTimeout={200}
            transitionLeaveTimeout={200}
          >
            {children.length > 0 && (
              <div key={node.id}>
                {children}
                {shouldShowMore(node) && (
                  <Paginator
                    disabled={paginatorDisabled}
                    theme={theme}
                    node={node}
                    onClick={() => loadMore(node)}
                    onKeyPress={e => onKeyLoadMore(e, node)}
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
