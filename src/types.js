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
  indentation: number,
  listStyle: Object,
  nodeStyle: Object,
};
