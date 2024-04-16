import * as icon from 'react-icons/si'

const social = [
  { icon: icon.SiGithub, link: 'https://github.com' },
  { icon: icon.SiCodepen, link: 'https://www.medium.com/' },
  { icon: icon.SiX, link: 'https://www.twitter.com/' },
  { icon: icon.SiInstagram, link: 'https://www.instagram.com/' },
]

const work = [
  {
    name: 'Todo app',
    description:
      'Phasellus metus mi, scelerisque eu volutpat non, posuere et massa. Nunc hendrerit, augue non fringilla mattis.',
    stack: [
      { icon: icon.SiHtml5, name: 'HTML' },
      { icon: icon.SiCss3, name: 'CSS' },
      { icon: icon.SiJavascript, name: 'Javascript' },
      { icon: icon.SiReact, name: 'ReactJS' },
    ],
    linkProject: 'https://example.com',
    linkGithub: 'https://github.com',
  },
  {
    name: 'Pokedex',
    description:
      'Etiam eget volutpat risus. Nam magna bibendum a metus dignissim, id eleifend libero luctus molestie eget.',
    stack: [
      { icon: icon.SiHtml5, name: 'HTML' },
      { icon: icon.SiCss3, name: 'CSS' },
      { icon: icon.SiJavascript, name: 'Javascript' },
      { icon: icon.SiReact, name: 'ReactJS' },
    ],
    linkProject: 'https://example.com',
    linkGithub: 'https://github.com',
  },
  {
    name: 'E-Commerce',
    description:
      'Nullam id mauris auctor, sollicitudin sapien id, sagittis turpis proin et nunc sempe, venenatis erat.',
    stack: [
      { icon: icon.SiHtml5, name: 'HTML' },
      { icon: icon.SiCss3, name: 'CSS' },
      { icon: icon.SiJavascript, name: 'Javascript' },
      { icon: icon.SiReact, name: 'ReactJS' },
    ],
    linkProject: 'https://example.com',
    linkGithub: 'https://github.com',
  },
  {
    name: 'Twitter clon',
    description:
      'Cras leo mauris, gravida vel lectus ac, congue luctus odio. Sed varius varius est eget convallis sagittis sit amet.',
    stack: [
      { icon: icon.SiHtml5, name: 'HTML' },
      { icon: icon.SiCss3, name: 'CSS' },
      { icon: icon.SiJavascript, name: 'Javascript' },
      { icon: icon.SiReact, name: 'ReactJS' },
    ],
    linkProject: 'https://example.com',
    linkGithub: 'https://github.com',
  },
]
const stack = [
  {
    name: 'Software Engineer at Xepelin, Financial Services',
    startDate: 'Jan 2022',
    endDate: 'Present',
    description: [
      'Developed robust financial applications using React and TypeScript within a monolithic architecture.',
      'Managed application state using Redux, react-query, and zustand.',
      'Contributed to a custom design system using styled-components.',
      'Integrated Sequelize ORM for relational database interactions.',
      'Conducted unit and integration testing using Jest.',
    ],
    items: [
      { icon: icon.SiTypescript, name: 'Typescript' },
      { icon: icon.SiReact, name: 'React' },
      { icon: icon.SiNodedotjs, name: 'Node' },
      { icon: icon.SiSequelize, name: 'Sequelize ORM' },
      { icon: icon.SiJest, name: 'Jest' },
      { icon: icon.SiReactquery, name: 'React Query' },
      { icon: icon.SiStyledcomponents, name: 'Styled Components' },
    ],
  },
  {
    name: 'Full Stack Developer at MG Group, Financial Services',
    startDate: 'Sep 2021',
    endDate: 'Jan 2022',
    description: [
      'Engineered microservices-based solutions with serverless architecture using .NET Core 3.1, Node.js with TypeScript, and React with Redux.',
      'Implemented CI/CD pipelines using SAM and GitHub Actions.',
      'Managed AWS cloud services including Lambda, Step-functions, SNS-SQS, and DocumentDB.',
    ],
    items: [
      { icon: icon.SiDotnet, name: '.NET CORE 3.1' },
      { icon: icon.SiCsharp, name: 'C#' },
      { icon: icon.SiNodedotjs, name: 'Node' },
      { icon: icon.SiRedux, name: 'React Redux' },
      { icon: icon.SiAmazonaws, name: 'AWS Services' },
      { icon: icon.SiServerless, name: 'Serverless' },
      { icon: icon.SiGithubactions, name: 'GitHub Actions' },
    ],
  },
  {
    name: 'Backend Developer at Folcode, Software Factory',
    startDate: 'Aug 2020',
    endDate: 'Aug 2021',
    description: [
      'Developed backend systems using PHP with Laravel, and Node.js with Express, focusing on both Eloquent and Sequelize ORMs.',
      'Deployed and managed servers on AWS EC2 and handled file storage solutions using AWS S3.',
    ],
    items: [
      { icon: icon.SiPhp, name: 'PHP - Laravel' },
      { icon: icon.SiNodedotjs, name: 'Node - Express' },
      { icon: icon.SiAmazonaws, name: 'AWS Services' },
      { icon: icon.SiAmazonec2, name: 'AWS EC2' },
      { icon: icon.SiAmazons3, name: 'AWS S3' },
    ],
  },
  {
    name: 'Web Developer at InAltum, Psychological Clinic',
    startDate: 'Jan 2020',
    endDate: 'Oct 2020',
    description: [
      'Developed interactive psychological assessment tools using JavaScript, with data visualization in HTML and CSS (SASS).',
    ],
    items: [
      { icon: icon.SiHtml5, name: 'HTML' },
      { icon: icon.SiCss3, name: 'CSS' },
      { icon: icon.SiJavascript, name: 'JavaScript' },
      { icon: icon.SiSass, name: 'SASS' },
    ],
  },
]

const contact = {
  description: `Feel free to reach out for any queries or collaborations. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.`,
  email: 'arayap812@email.com',
}

export { social, work, stack, contact }
