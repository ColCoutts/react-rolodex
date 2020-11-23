// making data for the about card to be passed in as a prop

const ABOUT_DATA = [
  {
    id: 1,
    title: 'Front End Dev',
    description: 'I like working on challenging projects that keep me growing, and producing beautiful sites for users to enjoy',
    heading1: 'Languages',
    heading2: 'Dev Tools',
    routeName: 'frontenddev',
    imgURL: 'someURLheremaybe',
    info: [
      {
        id: 0,
        info: 'HTML'
      },
      {
        id: 1,
        info: 'CSS'
      },
      {
        id: 2,
        info: 'Sass'
      },
      {
        id: 3,
        info: 'JavaScript'
      },
      {
        id: 4,
        info: 'React'
      },
      {
        id: 5,
        info: 'Node'
      },
    ],
    tools: [
      {
        id: 0,
        tool: 'Github'
      },
      {
        id: 1,
        tool: 'Terminal'
      },
      {
        id: 2,
        tool: 'Heroku'
      },
      {
        id: 3,
        tool: 'Netlify'
      },
    ]
  },
  {
    id: 2,
    title: 'Design',
    description: 'I like finding the thread that connects disparate ideas, and bringing that to life with engaging interactions and visuals',
    heading1: 'Things I like to make',
    heading2: 'Design Tools',
    routeName: 'design',
    imgURL: 'someURLheremaybe',
    info: [
      {
        id: 0,
        info: 'UI'
      },
      {
        id: 1,
        info: 'UX'
      },
      {
        id: 2,
        info: 'Web'
      },
      {
        id: 3,
        info: 'Illustration'
      },
      {
        id: 4,
        info: 'Logos'
      }
    ],
    tools: [
      {
        id: 0,
        tool: 'Balsamiq'
      },
      {
        id: 1,
        tool: 'Sketch'
      },
      {
        id: 2,
        tool: 'Pencil & Paper'
      },
      {
        id: 3,
        tool: 'Adobe Suite'
      },
    ]
  },
  {
    id: 3,
    title: 'Engineering Support',
    description: 'I’m always interested in helping customers find the best solution for their use-case, and in the process help them navigate the murky waters of IAM successfully.',
    heading1: 'Problems I solve',
    heading2: 'Tools I use',
    routeName: 'engineeringsupport',
    imgURL: 'someURLheremaybe',
    info: [
      {
        id: 0,
        info: 'Network Errors'
      },
      {
        id: 1,
        info: 'Authn Flows'
      },
      {
        id: 2,
        info: 'API woes'
      },
      {
        id: 3,
        info: 'DNS issues'
      },
      {
        id: 4,
        info: 'User Mgmt.'
      }
    ],
    tools: [
      {
        id: 0,
        tool: 'Postman'
      },
      {
        id: 1,
        tool: 'SDKs'
      },
      {
        id: 2,
        tool: '.HAR tracer'
      },
      {
        id: 3,
        tool: 'Charles Proxy'
      },
      {
        id: 4,
        tool: 'Kibana'
      },
      {
        id: 5,
        tool: 'SumoLogic'
      }
    ]
  },
];

export default ABOUT_DATA;