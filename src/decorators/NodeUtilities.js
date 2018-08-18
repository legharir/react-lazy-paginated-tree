// @flow

const NodeUtilities = () => (WrappedComponent: any) =>
  class extends WrappedComponent {
    hasChildren = (): boolean => {
      const { node } = this.props;
      return (
        node.children &&
        node.children.constructor === Array &&
        node.children.length > 0
      );
    };
  };

export default NodeUtilities;
