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
  nodeIconStyle: {
    fill: '#9DA5AB',
    strokeWidth: 0,
    height: 10,
  },
  nodeBodyStyle: {
    display: 'inline-block',
    maxWidth: '100%',
    wordWrap: 'break-word',
    paddingLeft: 5,
  },
  listContainerStyle: {},
  listStyle: {},
};

export default theme;
