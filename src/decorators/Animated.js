// @flow

import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Animated = () => (WrappedComponent: any) =>
  class extends WrappedComponent {
    render() {
      return (
        <ReactCSSTransitionGroup
          transitionName="tree-list"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <WrappedComponent {...this.props} />
        </ReactCSSTransitionGroup>
      );
    }
  };

export default Animated;
