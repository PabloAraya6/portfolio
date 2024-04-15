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
    name: 'Full Stack at MG Group, Financial Services',
    startDate: 'Sep 2021',
    endDate: 'Jan 2022',
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
    items: [
      { icon: icon.SiHtml5, name: 'HTML' },
      { icon: icon.SiCss3, name: 'CSS' },
      { icon: icon.SiJavascript, name: 'JavaScript' },
      { icon: icon.SiSass, name: 'SASS' },
    ],
  },
]

const contact = {
  description:
    'Tenetur laudantium? Aliquid ipsum perferendis blanditiis non. Adipisci eos numquam reiciendis, rerum, quo similique reprehenderit. Adipisci eos numquam reiciendis',
  email: 'example@email.com',
}

export { social, work, stack, contact }
