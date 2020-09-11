import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Vassil Yanakiev',
  subtitle: 'I am RNO engineer who is passionate about Front-end development',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Telecommunications engineer with background in development of custom auxiliary tools, lately with intensive focus on front-end development.',
  paragraphTwo:
    'I have been persistantly focused in building a solid base of front-end programming skills through dedicated courses, masterclasses and some own projects.',
  paragraphThree:
    'Currently I am highly motivated and looking forward building on top of that as part of a team of professionls where I could develop, contribute and invest my motivation',
  resume: 'https://1drv.ms/b/s!AjZAJ8dl5aoY1W5iQNDYDJVKlY5c?e=PZ7gyg', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'logo-infinity-scroll.png',
    title: 'Infinity scroll',
    info: 'This project applies infinite scroll to load images from Unsplash API.',
    info2: 'CSS / Javascript ',
    url: 'https://vassilyanakiev.github.io/vy-infinity-scroll/',
    repo: 'https://github.com/vassilYanakiev/vy-infinity-scroll', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'logo-nasa-apod.png',
    title: 'Nasa Picture Of The Day',
    info:
      'Showing images from NASA APOD API. Different tabs and functionolity for adding to favourites in localstorage',
    info2: 'CSS / Javascript',
    url: 'https://vassilyanakiev.github.io/vy-nasa-apod/',
    repo: 'https://github.com/vassilYanakiev/vy-nasa-apod', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'logo-dragndrop.png',
    title: 'Drag and Drop',
    info:
      'Adding/Removing elements and moving them around categories with mouse drag and drop functionality in browser. Lists are saved in localstorage',
    info2: 'CSS / Javascript ',
    url: 'https://vassilyanakiev.github.io/vy-drag-n-drop/',
    repo: 'https://github.com/vassilYanakiev/vy-drag-n-drop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'logo-quote-generator.png',
    title: 'Quote Generator',
    info: 'Random quote fetch from API',
    info2: 'CSS / Javascript ',
    url: 'https://vassilyanakiev.github.io/vy-quote-generator/',
    repo: 'https://github.com/vassilYanakiev/vy-quote-generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'logo-dynamic-tables.png',
    title: 'Dynamic tables',
    info:
      'Custom built API with Flask and served on Heroku. Front-end is displaying different categories of data in dynamic tables - sortable and filterable by all fields.',
    info2: 'React / React Router / React Bootstrap / Python / Flask',
    url: 'https://vassilyanakiev.github.io/Outages-frontend/',
    repo: 'https://github.com/vassilYanakiev/Outages-frontend', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'vassil.yanakiev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vassil-yanakiev-4b38203/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vassilYanakiev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
