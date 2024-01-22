// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jg2kpy', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
    },
  },
  seo: {
    title: 'José Luis Junior Gutiérrez Agüero',
    description: 'Portfolio of José Luis Junior Gutiérrez Agüero',
    imageURL: '',
  },
  social: {
    linkedin: 'jose-luis-junior-gutierrez-aguero',
    twitter: 'jg2kpy',
    stackoverflow: 'jg2kpy', // example: '1/jeff-atwood'
    website: 'https://www.juniorgutierrez.com',
    email: 'jlgutierrez2000@hotmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.usercontent.google.com/download?id=1CeGSlWwQ4hrlW9XkUXWfV6JbcFa6EIIj&export=download&authuser=1', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C/C++',
    'Java',
    'Python',
    'Javascript',
    'Typescript',
    'Spring',
    'Django',
    'Node.js',
    'Flutter',
    'Dart',
    'SQL',
    'Linux',
    'Docker',
  ],
  experiences: [
    {
      company: 'Itaipu Binacional (Paraguay-Brazil)',
      position: 'IT Intern',
      from: 'December 2016',
      to: 'January 2017',
      companyLink: 'https://itaipu.gov.py',
    },
  ],
  certifications: [
    {
      name: 'English Certificate 70/100 (C1 Advanced)',
      body: 'EF SET',
      year: 'May 2023',
      link: 'https://www.efset.org/cert/w5jb56',
    },
    {
      name: 'Electron From Scratch: Build Desktop Apps With JavaScript',
      body: 'Udemy',
      year: 'December 2022',
      link: 'https://www.udemy.com/certificate/UC-351b48cf-0a88-471d-a56b-d52bbd095e48/',
    },
    {
      name: 'Curso de Docker',
      body: 'Platzi',
      year: 'July 2022',
      link: 'https://platzi.com/p/jg2kpy/curso/2066-docker/diploma/detalle/',
    },
    {
      name: 'Curso de Backend con Node.js: API REST con Express.js',
      body: 'Platzi',
      year: 'February 2022',
      link: 'https://platzi.com/p/jg2kpy/curso/2485-backend-nodejs/diploma/detalle/',
    },
    {
      name: 'Curso de Frameworks y Librerías de JavaScript',
      body: 'Platzi',
      year: 'February 2022',
      link: 'https://platzi.com/p/jg2kpy/curso/2239-frameworks-javascript/diploma/detalle/',
    },
    {
      name: 'Automate the Boring Stuff with Python Programming',
      body: 'Udemy',
      year: 'January 2022',
      link: 'https://www.udemy.com/certificate/UC-7978203b-ead3-4de9-b9bd-e76c121888de/',
    },
    {
      name: 'Master en Python: Aprender Python 3, Django, Flask y Tkinter',
      body: 'Udemy',
      year: 'January 2022',
      link: 'https://www.udemy.com/certificate/UC-37976721-5340-400c-9946-6d90b63ec7d3/',
    },
    {
      name: 'The Complete Java Certification Course',
      body: 'Udemy',
      year: 'May 2020',
      link: 'https://www.ude.my/UC-f24116f6-a8fb-4c3f-b29a-d1d922068c1f',
    },
  ],
  educations: [
    {
      institution: 'Facultad Politécnica - Universidad Nacional de Asunción',
      degree: 'Ingeniería en Informática (Computer Science)',
      from: '2019',
      to: 'now',
    },
    {
      institution: 'Wichita State University (one-semester study abroad)',
      degree: 'Computer Science',
      from: 'August 2023',
      to: 'December 2023',
    },
    {
      institution: 'Colegio Salesianito',
      degree: 'Bachillerato técnico en Informática',
      from: '2005',
      to: '2017',
    },
  ],
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
