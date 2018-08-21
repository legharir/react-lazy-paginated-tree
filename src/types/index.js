// @flow

export type Node = {
  id: string,
  name: string,
  description: string,
  children: Array<Node>,
  numChildren: number,
  page: number,
  expanded: boolean,
  selected: boolean,
};

export type Theme = {
  treeStyle: Object,
  listContainerStyle: Object,
  listStyle: Object,
  nodeStyle: Object,
  nodeIconContainerStyle: Object,
  nodeIconStyle: Object,
  nodeBodyStyle: Object,
  nodeHighlightStyle: Object,
  expanderStyle: Object,
  expanderIconStyle: Object,
  loadingStyle: Object,
};

export type Cache = Object;

export type Event = Object;

export type TreeState = {
  nodes: Array<Node>,
};

export type TreeProps = {
  style?: Object,
  nodes: Array<Node>,
  theme?: Theme,
  pageLimit?: number,
  List?: any,
  ListItem?: any,
  Expander?: any,
  Checkbox?: any,
  Body?: any,
  Paginator?: any,
  Loading?: any,
  toggle?: Function,
  onKeyToggle?: Function,
  select?: Function,
  onKeySelect?: Function,
  loadChildren?: Function,
};

export type TreeNodeProps = {
  node: Node,
  theme: Theme,
  List: any,
  ListItem: any,
  Expander: any,
  Checkbox: any,
  Body: any,
  Paginator: any,
  Loading: any,
  loadMore: Function,
  onKeyLoadMore: Function,
  toggle: Function,
  onKeyToggle: Function,
  select: Function,
  onKeySelect: Function,
};

export type TreeNodeState = {
  expanderLoading: boolean,
  paginatorLoading: boolean,
};

export type CheckboxProps = {
  checked: boolean,
  theme: Theme,
  node: Node,
  onChange: Function,
  onKeyPress: Function,
};

export type BodyProps = {
  theme: Theme,
  node: Node,
  onClick: Function,
  onKeyPress: Function,
};

export type ExpanderProps = {
  theme: Theme,
  node: Node,
  onClick: Function,
  onKeyPress: Function,
};

export type ListItemProps = {
  theme: Theme,
  node: Node,
  children: any,
};

export type ListProps = {
  theme: Theme,
  node: Node,
  children: any,
};

export type LoadingProps = {
  theme: Theme,
  node: Node,
};
