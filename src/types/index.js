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
  bodyStyle: Object,
  checkboxStyle: Object,
  checkboxIconStyle: Object,
  checkboxIconCheckedStyle: Object,
  expanderStyle: Object,
  listItemStyle: Object,
  paginatorStyle: Object,
  paginatorTextStyle: Object,
  loadingStyle: Object,
  loadingTextStyle: Object,
  listStyle: Object,
};

export type Cache = Object;

export type Event = Object;

export type TreeState = {
  nodes: Array<Node>,
};

export type TreeProps = {
  /* required props */
  nodes: Array<Node>, // nested object of type: Node (unless you specified parse method)
  /* optional props for pagination */
  pageLimit?: number, // page limit for pagination
  parse?: Function, // method to convert an array of entities to node entities
  /* optional props */
  style?: Object, // equivalent to overriding theme.treeStyle
  theme?: Theme,
  indentWidth?: number,
  List?: any,
  ListItem?: any,
  Expander?: any,
  Checkbox?: any,
  Body?: any,
  Paginator?: any,
  Loading?: any,
  DepthPadding?: any,
  toggle?: Function,
  onKeyToggle?: Function,
  select?: Function,
  onKeySelect?: Function,
  loadChildren?: Function,
  onUpdate?: Function,
};

export type TreeNodeProps = {
  depth: number,
  node: Node,
  theme: Theme,
  indentWidth: number,
  List: any,
  ListItem: any,
  Expander: any,
  Checkbox: any,
  Body: any,
  Paginator: any,
  Loading: any,
  DepthPadding: any,
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
  onClick: Function,
  onKeyPress: Function,
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

export type DepthPaddingProps = {
  indentWidth: number,
  depth: number,
  children: any,
};
