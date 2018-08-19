// @flow

import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';
import type { Theme } from '../types';

const prefixer = postcssJs.sync([autoprefixer]);

const theme: Theme = prefixer({
  treeStyle: {
    padding: 0,
  },
  nodeContainerStyle: {
    listStyle: 'none',
  },
  nodeStyle: {
    display: 'flex',
    width: '100%',
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
    flex: 1,
    wordWrap: 'break-word',
    paddingLeft: 5,
  },
  nodeHighlightStyle: {
    backgroundColor: '#ccffcc',
  },
  listContainerStyle: {},
  listStyle: { paddingLeft: 20 },
});

export default theme;
