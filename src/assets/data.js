import IMG1 from './portfolio1.jpg';
import IMG2 from './portfolio2.jpg';
import IMG3 from './portfolio3.jpg';
import IMG4 from './portfolio4.jpg';

export const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: 'Titolo 1',
    github: 'url',
    demo: 'url',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Titolo 2',
    github: 'url',
    demo: 'url',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Titolo 3',
    github: 'url',
    demo: 'url',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Titolo 4',
    github: 'url',
    demo: 'url',
  },
];

export const aboutData = {
  firstTitle: 'Esperienza',
  firstDesc: '3+ Anni',
  secondTitle: 'Lavorato con',
  secondDesc: '2+ Team',
  thirdTitle: 'Aiutato a sviluppare',
  thirdDesc: '3+ Progetti',
  descrizione: 'description',
};

// level - beginner,good,expert
export const experienceData = [
  {
    id: 1,
    title: 'Frontend Development',
    skills: [
      {
        id: 1,
        title: 'HTML',
        level: 'Expert',
      },
      {
        id: 2,
        title: 'CSS',
        level: 'expert',
      },
      {
        id: 3,
        title: 'JavaScript',
        level: 'Expert',
      },

      {
        id: 4,
        title: 'React',
        level: 'Expert',
      },
    ],
  },
  {
    id: 2,
    title: 'Backend Development',
    skills: [
      {
        id: 1,
        title: 'Java',
        level: 'Expert',
      },
      {
        id: 2,
        title: 'MySql',
        level: 'Expert',
      },
      {
        id: 3,
        title: 'Spring Boot',
        level: 'Expert',
      },
    ],
  },
  {
    id: 3,
    title: 'Others',
    skills: [],
  },
];
