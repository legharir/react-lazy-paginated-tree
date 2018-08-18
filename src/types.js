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
