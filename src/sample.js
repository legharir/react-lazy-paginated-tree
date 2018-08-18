export default [
  {
    id: 1,
    name: 'one',
    description: 'one',
    children: [
      {
        id: 2,
        name: 'two',
        description: 'two',
        children: [
          {
            id: 7,
            name: 'seven',
            description: 'seven',
            children: [
              {
                id: 8,
                name: 'eight',
                description: 'eight',
                children: [],
                loaded: true,
                count: 0,
              },
            ],
            loaded: true,
            count: 1,
          },
        ],
        loaded: true,
        count: 0,
      },
      {
        id: 3,
        name: 'three',
        description: 'three',
        children: [],
        loaded: true,
        count: 0,
      },
      {
        id: 4,
        name: 'four',
        description: 'four',
        children: [],
        loaded: true,
        count: 0,
      },
    ],
    loaded: true,
    count: 3,
  },
  {
    id: 5,
    name: 'five',
    description: 'five',
    children: [
      {
        id: 6,
        name: 'six',
        description: 'six',
        children: [],
        loaded: true,
        count: 0,
      },
    ],
    loaded: true,
    count: 1,
  },
];
