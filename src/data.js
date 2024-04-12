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
    name: 'Front End',
    items: [
      { icon: icon.SiHtml5, name: 'HTML' },
      { icon: icon.SiCss3, name: 'CSS' },
      { icon: icon.SiJavascript, name: 'Javascript' },
      { icon: icon.SiTypescript, name: 'Typescript' },
      { icon: icon.SiReact, name: 'React' },
      { icon: icon.SiRedux, name: 'Redux' },
      { icon: icon.SiMui, name: 'Material UI' },
      // { icon: icon.SiReactquery, name: 'React Query' }, // Agregado
      // { icon: icon.SiStyledcomponents, name: 'Styled Components' }, // Agregado
      // SiStyledcomponents y SiReactquery no son iconos estándar de SimpleIcons,
      // necesitas agregar los correspondientes o utilizar placeholders.
    ],
  },
  {
    name: 'Back End',
    items: [
      { icon: icon.SiNodedotjs, name: 'NodeJS' },
      { icon: icon.SiExpress, name: 'Express' }, // Agregado
      { icon: icon.SiDotnet, name: '.NET' }, // Agregado
      { icon: icon.SiCsharp, name: 'C#' }, // Agregado
      { icon: icon.SiPhp, name: 'PHP' }, // Agregado
      { icon: icon.SiLaravel, name: 'Laravel' }, // Agregado
      { icon: icon.SiSequelize, name: 'Sequelize' },
    ],
  },
  {
    name: 'Testing',
    items: [
      { icon: icon.SiJest, name: 'Jest' }, // Agregado
    ],
  },
  // {
  //   name: 'CI/CD',
  //   items: [
  //     // Necesitarás iconos o placeholders para SAM y GitHub Actions
  //   ],
  // },
  // {
  //   name: 'Cloud Services',
  //   items: [
  //     { icon: icon.SiAmazonaws, name: 'AWS' }, // Agregado
  //     // Podrías desglosar AWS en servicios específicos como Lambda, EC2, S3, etc.
  //   ],
  // },
  // {
  //   name: 'Databases',
  //   items: [
  //     // Agrega aquí bases de datos como DocumentDB si encuentras un ícono apropiado
  //   ],
  // },
]

const contact = {
  description:
    'Tenetur laudantium? Aliquid ipsum perferendis blanditiis non. Adipisci eos numquam reiciendis, rerum, quo similique reprehenderit. Adipisci eos numquam reiciendis',
  email: 'example@email.com',
}

export { social, work, stack, contact }
