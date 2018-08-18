// @flow

import type { Theme } from '../types';

const theme: Theme = {
  treeStyle: {
    padding: 0,
  },
  nodeContainerStyle: {
    listStyle: 'none',
  },
  nodeStyle: {
    padding: 5,
    backgroundColor: '#f3f3f3',
    marginTop: 2,
    marginBottom: 2,
  },
  nodeIconContainerStyle: {
    width: 20,
    display: 'inline-block',
    textAlign: 'center',
  },
  nodeIconStyle: {
    fill: '#9DA5AB',
    strokeWidth: 0,
    height: 10,
  },
  nodeBodyStyle: {
    width: 'calc(100% - 25px)',
    display: 'inline-block',
    wordWrap: 'break-word',
    paddingLeft: 5,
  },
  nodeHighlightStyle: {
    backgroundColor: 'lightgreen',
  },
  listContainerStyle: {},
  listStyle: {},
};

export default theme;
