// @flow

export type Node = {
  id: string,
  name: string,
  description: string,
  children: Array<Node>,
  fullyFetched: boolean,
  page: number,
  toggled: boolean,
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
};

export type Cache = Object;

export type Event = Object;

export type TreeState = {
  nodes: Array<Node>,
  cache: Cache,
};

export type TreeProps = {
  style?: Object,
  nodes: Array<Node>,
  theme?: Theme,
  List?: any,
  ListItem?: any,
  Icon?: any,
  Checkbox?: any,
  Body?: any,
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
  Icon: any,
  Checkbox: any,
  Body: any,
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
