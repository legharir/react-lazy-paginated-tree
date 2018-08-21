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
      this.setState({ expanderDisabled: true });
      await callable(e, node);
      this.setState({ expanderDisabled: false });
    }
  };

  handleLoadMore = async (
    e: Event,
    node: Node,
    callable: Function,
    disabled: boolean,
  ) => {
    if (!disabled) {
      this.setState({ paginatorDisabled: true });
      await callable(e, node);
      this.setState({ paginatorDisabled: false });
    }
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
          onClick={e => select(e, node)}
          onKeyPress={e => onKeySelect(e, node)}
        >
          {hasChildren(node) && (
            <Expander
              theme={theme}
              node={node}
              onClick={e =>
                this.handleToggle(e, node, toggle, expanderDisabled)
              }
              onKeyPress={e =>
                this.handleToggle(e, node, onKeyToggle, expanderDisabled)
              }
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
                    theme={theme}
                    node={node}
                    onClick={e =>
                      this.handleLoadMore(e, node, loadMore, paginatorDisabled)
                    }
                    onKeyPress={e =>
                      this.handleLoadMore(
                        e,
                        node,
                        onKeyLoadMore,
                        paginatorDisabled,
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
