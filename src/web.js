// @flow

import React from 'react'; // eslint-disable-line
import { render } from 'react-dom';
import axios from 'axios';
import ReactLazyPaginatedTree from './components/Tree';
import SimpleTree from './sample/SimpleTree';
import customTheme from './theme/minimalTheme';

import type { Node, TreeState } from './types';

const defaultElem = document.getElementById('default');
const lazyElem = document.getElementById('lazy');
const paginatedElem = document.getElementById('paginated');
const customElem = document.getElementById('custom');

const parse = (response: Array<Object>): Array<Node> => {
  /* this method assumes that the endpoint orders the response */
  const parsedResponse = [];
  for (let i = 0; i < response.length; i += 1) {
    const { id, name, alias, numChildren } = response[i];
    const transformedNode: Node = {
      id,
      name,
      description: alias,
      children: [],
      numChildren,
      page: 0,
      expanded: false,
      selected: false,
    };
    parsedResponse.push(transformedNode);
  }
  return parsedResponse;
};

const onUpdate = (state: TreeState) => {
  console.log(state);
};

const loadChildren = (node: Node, pageLimit: number = 500) => {
  const { id, page } = node;
  // make request
  return axios({
    method: 'get',
    url: `https://mdo.vena.io/api/models/643944054354083840/dimensions/1/members/${id}/children?limit=${pageLimit}&page=${page}&_=1534781755460`,
    headers: {
      Authorization:
        'VenaBasic NTEyMDIwMDE5MzEyMzI4NzA0LjUxMjAxOTA2NzQ2OTU2MTg1Njo2MjhhNjRhZDJjMTc0NTM1YWI4M2I3NjA1ZmRiMmJkMw==',
      'Content-Type': 'application/json',
    },
  }).then(response => response.data);
};

axios({
  method: 'get',
  url:
    'https://mdo.vena.io/api/models/643944054354083840/dimensions/1/members/root/children?_=1534781755460',
  headers: {
    Authorization:
      'VenaBasic NTEyMDIwMDE5MzEyMzI4NzA0LjUxMjAxOTA2NzQ2OTU2MTg1Njo2MjhhNjRhZDJjMTc0NTM1YWI4M2I3NjA1ZmRiMmJkMw==',
    'Content-Type': 'application/json',
  },
}).then(response => {
  if (paginatedElem) {
    render(
      <ReactLazyPaginatedTree
        nodes={response.data}
        loadChildren={loadChildren}
        parse={parse}
        pageLimit={5}
        onUpdate={onUpdate}
      />,
      paginatedElem,
    );
  }
});

axios({
  method: 'get',
  url:
    'https://mdo.vena.io/api/models/643944054354083840/dimensions/1/members/root/children?_=1534781755460',
  headers: {
    Authorization:
      'VenaBasic NTEyMDIwMDE5MzEyMzI4NzA0LjUxMjAxOTA2NzQ2OTU2MTg1Njo2MjhhNjRhZDJjMTc0NTM1YWI4M2I3NjA1ZmRiMmJkMw==',
    'Content-Type': 'application/json',
  },
}).then(response => {
  if (customElem) {
    render(
      <ReactLazyPaginatedTree
        nodes={response.data}
        theme={customTheme}
        loadChildren={loadChildren}
        parse={parse}
        pageLimit={5}
        onUpdate={onUpdate}
      />,
      customElem,
    );
  }
});

axios({
  method: 'get',
  url:
    'https://mdo.vena.io/api/models/643944054354083840/dimensions/1/members/root/children?_=1534781755460',
  headers: {
    Authorization:
      'VenaBasic NTEyMDIwMDE5MzEyMzI4NzA0LjUxMjAxOTA2NzQ2OTU2MTg1Njo2MjhhNjRhZDJjMTc0NTM1YWI4M2I3NjA1ZmRiMmJkMw==',
    'Content-Type': 'application/json',
  },
}).then(response => {
  if (lazyElem) {
    render(
      <ReactLazyPaginatedTree
        nodes={response.data}
        loadChildren={loadChildren}
        parse={parse}
      />,
      lazyElem,
    );
  }
});

if (defaultElem) {
  render(<ReactLazyPaginatedTree nodes={SimpleTree} />, defaultElem);
}

export default ReactLazyPaginatedTree;
