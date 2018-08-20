// @flow

import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import type { Node, TreeNodeProps } from '../types';
import { hasChildren } from '../util';

class TreeNode extends Component<TreeNodeProps> {
  render() {
    const {
      node,
      theme,
      toggle,
      onKeyToggle,
      select,
      onKeySelect,
      List,
      ListItem,
      Icon,
      Checkbox,
      Body,
    } = this.props;

    let children = [];
    if (node.expanded && hasChildren(node)) {
      children = node.children.map((childNode: Node) => (
        <TreeNode
          key={childNode.id}
          node={childNode}
          theme={theme}
          toggle={toggle}
          onKeyToggle={onKeyToggle}
          select={select}
          onKeySelect={onKeySelect}
          List={List}
          ListItem={ListItem}
          Icon={Icon}
          Checkbox={Checkbox}
          Body={Body}
        />
      ));
    }

    return (
      <React.Fragment>
        <ListItem
          theme={theme}
          node={node}
          onClick={() => select(node.id)}
          onKeyPress={e => onKeySelect(e, node.id)}
        >
          {hasChildren(node) && (
            <Icon
              theme={theme}
              node={node}
              onClick={e => {
                e.stopPropagation();
                return toggle(node.id);
              }}
              onKeyPress={e => {
                e.stopPropagation();
                return onKeyToggle(e, node.id);
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
            {children}
          </ReactCSSTransitionGroup>
        </List>
      </React.Fragment>
    );
  }
}

export default TreeNode;
