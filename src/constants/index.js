import {
  salttalentpool,
  onchainbet,
  backend,
  blockchain,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  solidity,
  web3,
  threemesh,
  threejs,
  enics,
  ethereum,
  salt,
  githubpreview,
  leetcode,
  lightblock,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },

  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Blockchain Developer',
    icon: blockchain,
  },
];

const technologies = [
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'solidity',
    icon: solidity,
  },
];

const experiences = [
  {
    title: 'Software development consultant',
    company_name: '<SALT/>',
    icon: salt,
    iconBg: '#E6DEDD',
    date: 'May 2023 - Present',
    points: [
      'Collaborating with clients to assess their software needs, business goals, and technical requirements.',
      'Assisting in the evaluation and integration of third-party tools and technologies.',
      'Collaborating with development teams to contribute to coding, debugging, and testing tasks.',
      'Applying software architecture principles and best practices.',
    ],
  },
  {
    title: 'Product owner / Founder',
    company_name: 'Ethereum',
    icon: ethereum,
    iconBg: '#E6DEDD',
    date: 'Sep 2021 - May 2023',
    points: [
      'Conceptualizing, planning, and overseeing the development of decentralized applications (DApps) and products on the Ethereum blockchain.',
      'Collaborating with blockchain developers, smart contract engineers, and UI/UX designers to bring the Ethereum-based product to life.',
      'Engaging with the Ethereum community, networking with potential users, investors, and collaborators to promote the product and gather feedback.',
      'Defining and tracking key performance indicators (KPIs) to measure the success and adoption of the Ethereum-based solution.',
    ],
  },
  {
    title: 'Sourcing quote leader',
    company_name: 'Enics',
    icon: enics,
    iconBg: '#E6DEDD',
    date: 'Sep 2020 - Sep 2021',
    points: [
      'Collaborating closely with procurement, engineering, and finance teams to understand project requirements and cost drivers.',
      'Reviewing supplier proposals and negotiating pricing, terms, and contracts to achieve cost savings and favorable agreements.',
      'Analyzing supplier capabilities, capacity, and financial stability to mitigate risks and ensure a reliable supply chain.',
      'Monitoring market trends, industry dynamics, and regulatory changes to inform sourcing strategies and optimize supplier partnerships.',
    ],
  },
  {
    title: 'CSO',
    company_name: 'Enics',
    icon: enics,
    iconBg: '#E6DEDD',
    date: 'Sep 2017 - Sep 2020',
    points: [
      'Managing end-to-end supply chain operations to ensure timely and efficient delivery of products.',
      'Collaborating with suppliers, vendors, and distributors to optimize inventory levels and maintain adequate stock.',
      'Coordinating order processing, shipment tracking, and delivery scheduling to meet customer requirements.',
      'Monitoring and analyzing supply chain performance metrics to identify areas for improvement and implement strategic enhancements.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Lightblock',
    description:
      'Basic blockchain explorer to track address balance & activity as well as price data feeds for cryptocurrencies and NFTs',
    tags: [
      {
        name: 'tailwind',
        color: 'purple-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'purple-text-gradient',
      },
      {
        name: 'react',
        color: 'purple-text-gradient',
      },
    ],
    image: lightblock,
    source_code_link: 'https://github.com/allanheremi/lightblock',
  },
  {
    name: 'onChainBet',
    description:
      'Simple gambling app using web3 metamask extension or demo play if no web3 wallet (Co-founded with Rasmus Eklund & Jou-Fang Wang)',
    tags: [
      {
        name: 'web3.js',
        color: 'purple-text-gradient',
      },
      {
        name: 'nextjs',
        color: 'purple-text-gradient',
      },
      {
        name: 'blockchain',
        color: 'purple-text-gradient',
      },
    ],
    image: onchainbet,
    source_code_link: 'https://github.com/allanheremi/onchainbet',
  },
  {
    name: 'Salttalentpool',
    description:
      'Search engine for querying and displaying available talentpool at <SALT/> (Co-founded with Rasmus Eklund & Jou-Fang Wang).',
    tags: [
      {
        name: 'search engine',
        color: 'purple-text-gradient',
      },
      {
        name: 'logic',
        color: 'purple-text-gradient',
      },
      {
        name: 'meilisearch',
        color: 'purple-text-gradient',
      },
    ],
    image: salttalentpool,
    source_code_link: 'https://github.com/rasmus-eklund/SaltTalentPool',
  },
  {
    name: 'Web3 price tracker',
    description:
      "Discover a React-based app tracking cryptocurrency prices in real-time via Coingecko's API. Stay updated effortlessly on diverse cryptocurrencies.",
    tags: [
      {
        name: 'react',
        color: 'purple-text-gradient',
      },
      {
        name: 'API',
        color: 'purple-text-gradient',
      },
      {
        name: 'zustand',
        color: 'purple-text-gradient',
      },
    ],
    image: web3,
    source_code_link: 'https://github.com/allanheremi/web3PriceTracker',
  },
  {
    name: 'Three Mesh',
    description:
      'Experience an interactive 3D web app, exploring & creating geometries in a vibrant virtual environment. Begin your 3D programming journey with Three.js!',
    tags: [
      {
        name: 'css',
        color: 'purple-text-gradient',
      },
      {
        name: 'three',
        color: 'purple-text-gradient',
      },
      {
        name: 'javascript',
        color: 'purple-text-gradient',
      },
    ],
    image: threemesh,
    source_code_link: 'https://github.com/allanheremi/threeMesh',
  },

  {
    name: 'Github profile',
    description:
      'Link to my Github profile, here you will be able to find all my previous and upcoming projects as well as the source code.',
    tags: [
      {
        name: 'code',
        color: 'purple-text-gradient',
      },
      {
        name: 'social',
        color: 'purple-text-gradient',
      },
      {
        name: 'collab',
        color: 'purple-text-gradient',
      },
    ],
    image: githubpreview,
    source_code_link: 'https://github.com/allanheremi',
  },
];

export { services, technologies, experiences, testimonials, projects };
