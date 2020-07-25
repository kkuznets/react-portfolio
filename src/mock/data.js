import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
   title: 'Kirill Kuznetsov Portfolio',
   lang: 'en',
   description: 'Simple portfolio website',
};

// HERO DATA
export const heroData = {
   title: 'Hi, my name is',
   name: 'Kirill Kuznetsov',
   subtitle: "I'm a full stack developer",
   cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
   img: 'profile.jpg',
   paragraphOne:
      'Enthusiastic web developer with a constant desire for learning and self-improvement. I am extremely passionate about implementing latest, most stable technologies and paying meticulous attention to user experience. I believe in user-centered approach, mobile-first design and personalised experience.',
   paragraphTwo:
      "Recently, I've completed a full stack development bootcamp, and am ready to prove myself in the real world. I view myself as an approachable, hard-working and reliable person.",
   paragraphThree:
      'If you are interested in working together, or just feel like connecting, please view through this page.',
   resume:
      'https://drive.google.com/file/d/1oHnbe_ndi0V4m01lRxov9kbDi6NY2z6N/view',
};

// PROJECTS DATA
export const projectsData = [
   {
      id: nanoid(),
      img: 'coinchange.png',
      title: 'Coinchange Crypto Tracker',
      info:
         'Lightweight web application to track cryptocurrency stock market, featuring online converter and market overview for each coin.',
      info2: 'Built with love, Bootstrap, jQuery, APIs and frontend libraries.',
      repo: 'https://github.com/kkuznets/Coinchange-Crypto-Tracker',
      url: 'https://kkuznets.github.io/Coinchange-Crypto-Tracker/',
   },
   {
      id: nanoid(),
      img: 'eatdaburger.png',
      title: 'Eat Da Burger!',
      info:
         'Full-stack application that alows users to play a game and eat, throw away and reorder burgers from a restaurant. Yummy!',
      info2:
         'Utilises Node.js, MySQL, custom ORM, Express.js, Handlebars and a grain of zeal.',
      repo: 'https://github.com/kkuznets/Eat-Da-Burger-App',
      url: 'https://eat-da-burger-app-kkuznets.herokuapp.com/',
   },
   {
      id: nanoid(),
      img: 'employeecms.png',
      title: 'Employee Management System',
      info:
         'Terminal application enabling businesses to track, manage and update their employee-related information privately.',
      info2:
         'Features Node.js, Chalk, Inquirer, MySQL and a little bit of passion.',
      repo: 'https://github.com/kkuznets/Employee-Management-System',
      url: '',
   },
   {
      id: nanoid(),
      img: 'googlebookssearch.png',
      title: 'React Google Books Search',
      info:
         'Agile full-stack web application that allows users to search, track and save books for reading list using Google Books library.',
      info2:
         'Runs on React, Express, MongoDB, Google Books API and your attention,',
      repo: 'https://github.com/kkuznets/google-books-search',
      url: 'https://google-books-search-kkuznets.herokuapp.com/',
   },
];

// CONTACT DATA
export const contactData = {
   cta: 'Would you like to work with me? Awesome!',
   btn: "Let's build together!",
   email: 'kirill@kkuznets.dev',
};

// FOOTER DATA
export const footerData = {
   networks: [
      {
         id: nanoid(),
         name: 'linkedin',
         url: 'https://www.linkedin.com/in/kkuznets/',
      },
      {
         id: nanoid(),
         name: 'github',
         url: 'https://github.com/kkuznets',
      },
   ],
};
