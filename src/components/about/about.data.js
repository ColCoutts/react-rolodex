// making data for the about card to be passed in as a prop

const ABOUT_DATA = [
  {
    id: 1,
    title: 'Front End Dev',
    routeName: 'frontenddev',
    imgURL: 'someURLheremaybe',
    info: [
      {
        id: 1,
        info: 'HTML'
      },
      {
        id: 2,
        info: 'CSS'
      },
      {
        id: 3,
        info: 'Sass'
      },
      {
        id: 4,
        info: 'JavaScript'
      },
      {
        id: 5,
        info: 'React'
      },
      {
        id: 6,
        info: 'Node'
      },
    ],
    tools: [
      {
        id: 1,
        tool: 'Github'
      },
      {
        id: 2,
        tool: 'Terminal'
      },
      {
        id: 3,
        tool: 'Heroku'
      },
      {
        id: 4,
        tool: 'Netlify'
      },
    ]
  },
  {
    id: 2,
    title: 'Design',
    routeName: 'design',
    imgURL: 'someURLheremaybe',
    info: [
      {
        id: 1,
        info: 'UI'
      },
      {
        id: 2,
        info: 'UX'
      },
      {
        id: 3,
        info: 'Web'
      },
      {
        id: 4,
        info: 'Illustration'
      },
      {
        id: 5,
        info: 'Logos'
      }
    ],
    tools: [
      {
        id: 1,
        tool: 'Balsamiq'
      },
      {
        id: 2,
        tool: 'Sketch'
      },
      {
        id: 3,
        tool: 'Pencil & Paper'
      },
      {
        id: 4,
        tool: 'Adobe Suite'
      },
    ]
  },
  {
    id: 3,
    title: 'Engineering Support',
    routeName: 'engineeringsupport',
    imgURL: 'someURLheremaybe',
    info: [
      {
        id: 1,
        info: 'Network Errors'
      },
      {
        id: 2,
        info: 'Authn Flows'
      },
      {
        id: 3,
        info: 'API woes'
      },
      {
        id: 4,
        info: 'DNS issues'
      },
      {
        id: 5,
        info: 'User Mgmt.'
      }
    ],
    tools: [
      {
        id: 1,
        tool: 'Postman'
      },
      {
        id: 2,
        tool: 'SDKs'
      },
      {
        id: 3,
        tool: '.HAR tracer'
      },
      {
        id: 4,
        tool: 'Charles Proxy'
      },
      {
        id: 5,
        tool: 'Kibana'
      },
      {
        id: 6,
        tool: 'SumoLogic'
      }
    ]
  },
];

export default ABOUT_DATA;