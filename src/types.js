// @flow

export type Node = {
  id: string,
  name: string,
  description: string,
  children: Array<Node>,
  loaded: boolean,
  count: number,
};

export type Theme = {
  treeStyle: Object,
  listContainerStyle: Object,
  listStyle: Object,
  nodeContainerStyle: Object,
  nodeStyle: Object,
};
