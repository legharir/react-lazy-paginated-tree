// @flow

import React from 'react';

const Animated = () => (WrappedComponent: any) =>
  class extends WrappedComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default Animated;
