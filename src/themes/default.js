// @flow

import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';
import type { Theme } from '../types';

const prefixer = postcssJs.sync([autoprefixer]);

const theme: Theme = prefixer({
  treeStyle: {
    padding: '0',
  },
  nodeContainerStyle: {
    listStyle: 'none',
  },
  nodeStyle: {
    display: 'flex',
    padding: '5px',
    margin: '2px 0',
    backgroundColor: '#f3f3f3',
  },
  nodeIconContainerStyle: {
    width: '20px',
    display: 'inline-block',
    textAlign: 'center',
  },
  nodeIconStyle: {
    fill: '#9DA5AB',
    strokeWidth: '0',
    height: '12px',
  },
  nodeBodyStyle: {
    flex: 1,
    wordWrap: 'break-word',
    paddingLeft: '5px',
  },
  nodeHighlightStyle: {
    backgroundColor: '#ccffcc',
  },
  listContainerStyle: {},
  listStyle: { paddingLeft: '20px' },
});

export default theme;
