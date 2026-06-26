export type Project = {
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  detailsUrl: string;
};

export const projects: Project[] = [
  {
    title: 'H.A.N.N.A.H Portfolio',
    category: 'Personal Portfolio',
    year: '2025',
    description:
      'A personal portfolio website showcasing my projects, skills, and frontend development experience.',
    image: '/images/Portfolio.png', 
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    githubUrl: 'https://github.com/HannahElsayed/H-A-N-N-A-H-PORFTFOLIO',
    demoUrl: 'https://hannahelsayed.github.io/H-A-N-N-A-H-PORFTFOLIO/',
    detailsUrl: '#',
  },
  {
    title: 'Competition CSS',
    category: 'Frontend Project',
    year: '2025',
    description:
      'A responsive website built using HTML and CSS with a modern and clean user interface.',
    image: '/images/CompetitionCSS.png', 
        tags: ['HTML', 'CSS'],
    githubUrl: 'https://github.com/HannahElsayed/Competion-css',
    demoUrl: 'https://hannahelsayed.github.io/Competion-css/',
    detailsUrl: '#',
  },
{
  title: 'Ran Shi',
  category: 'Frontend Website',
  year: '2025',
  description:
    'A responsive frontend website built with HTML, CSS, and JavaScript featuring a clean and modern user interface.',
  image: '/images/Ran_Shi.png',
  tags: ['HTML', 'CSS', 'JavaScript'],
  githubUrl: 'https://github.com/HannahElsayed/Ran-Shi-',
  demoUrl: 'https://hannahelsayed.github.io/Ran-Shi-/',
  detailsUrl: '#',
},
{
  title: 'Websmiths Project',
  category: 'Frontend Website',
  year: '2025',
  description:
    'A responsive web project focused on clean layouts, responsive design, and modern frontend development.',
  image: '/images/Shop.png',
  tags: ['HTML', 'CSS', 'JavaScript'],
  githubUrl: 'https://github.com/HannahElsayed/websmiths-project7',
  demoUrl: 'https://hannahelsayed.github.io/websmiths-project7/',
  detailsUrl: '#',
},
{
  title: 'Expression Processor',
  category: 'Java Application',
  year: '2025',
  description:
    'A Java application that parses and evaluates mathematical expressions using object-oriented programming concepts.',
  image: '/images/JavaApplication.png',
  tags: ['Java', 'OOP'],
  githubUrl: 'https://github.com/HannahElsayed/Expression-Processor-Java',
  demoUrl: '#',
  detailsUrl: '#',
},
];
