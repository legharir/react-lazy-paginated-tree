// @flow

import postcssJs from 'postcss-js';
import autoprefixer from 'autoprefixer';
import type { Theme } from '../types';

const prefixer = postcssJs.sync([autoprefixer]);

const theme: Theme = prefixer({
  treeStyle: {
    padding: 0,
  },
  bodyStyle: {
    padding: 0,
  },
  checkboxStyle: {},
  expanderStyle: {
    width: '20px',
    display: 'inline-block',
    textAlign: 'center',
    marginRight: 0,
  },
  listItemStyle: {
    backgroundColor: '#f3f3f3',
    margin: '2px 0',
    paddingTop: 0,
    paddingBottom: 0,
  },
  paginatorStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    color: '#106EBE',
  },
  paginatorTextStyle: {
    textAlign: 'center',
  },
  loadingStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    color: '#106EBE',
  },
  loadingTextStyle: {
    textAlign: 'center',
  },
  listStyle: {
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default theme;
