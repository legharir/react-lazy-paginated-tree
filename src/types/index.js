// @flow

export type Node = {
  id: string,
  name: string,
  description: string,
  children: Array<Node>,
  loaded: boolean,
  count: number,
  toggled: boolean,
  selected: boolean,
};

export type Theme = {
  treeStyle: Object,
  listContainerStyle: Object,
  listStyle: Object,
  nodeContainerStyle: Object,
  nodeStyle: Object,
  nodeIconContainerStyle: Object,
  nodeIconStyle: Object,
  nodeBodyStyle: Object,
  nodeHighlightStyle: Object,
};

export type Cache = Object;

export type Event = Object;

export type TreeState = {
  nodes: Array<Node>,
  cache: Cache,
};

export type TreeProps = {
  nodes: Array<Node>,
  theme: Theme,

  // optional redux state management overrides
  toggle?: Function,
  onKeyToggle?: Function,
  select?: Function,
  onKeySelect?: Function,
  lazyLoad?: Function,
};

export type TreeNodeProps = {
  node: Node,
  theme: Theme,
  depth: number,
  toggle: Function,
  onKeyToggle: Function,
  select: Function,
  onKeySelect: Function,
};

export type IconProps = {
  theme: Theme,
  node: Node,
  onClick: Function,
  onKeyPress: Function,
};

export type BodyProps = {
  theme: Theme,
  node: Node,
  onClick: Function,
  onKeyPress: Function,
};
