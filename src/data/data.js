// src/data/cvData.js
export const cvData = {
  personalInfo: {
    name: 'Shubham Sharma',
    email: 'shubham@react.com',
    phone: '9899663498',
    address: 'A66, Guragon, Haryana, 122001',
  },
  education: {
    institution: 'College of Engineering Rookee',
    degree: 'Bachelor of Science in Computer Science',
    year: '2016 - 2020',
  },
  summary: {
    detail: `Experienced React Developer with a proven track record of delivering high-quality web applications. With three years of hands-on experience in front-end development using React.js, I have developed a deep understanding of modern web technologies and best practices. I excel in building responsive and interactive user interfaces that enhance the overall user experience.`,
    expertise: [
      'Proficiency in React.js, including functional components, hooks, and Redux for state management.',
      'Strong understanding of HTML5, CSS3, and JavaScript, with experience in using modern frameworks and libraries such as Bootstrap, Material-UI, and styled-components',
      'Experience in building RESTful APIs and integrating them into React applications using Axios or Fetch',
      'Familiarity with front-end build tools like Webpack, Babel, and npm for package management',
      'Knowledge of version control systems such as Git and proficiency in collaborating with teams using platforms like GitHub or GitLab',
      'Experience with testing frameworks like Jest and Enzyme for unit and integration testing, ensuring code reliability and maintainability',
      'Ability to work in an Agile development environment, collaborating closely with cross-functional teams to deliver projects on time and within scope',
      'Strong problem-solving skills and a passion for learning new technologies and staying updated with industry trends',
    ],
  },
  workExperience: [
    {
      company: 'TCS',
      position: 'Senior Developer',
      duration: '2021 - Present',
      responsibilities: [
        'Led development of a large-scale e-commerce platform using React, Redux, and Node.js.',
        'Designed and implemented reusable UI components for improved code maintainability.',
        'Mentored junior developers and conducted code reviews to ensure code quality.',
        'Collaborated with cross-functional teams to deliver high-quality software solutions.',
      ],
    },
    {
      company: 'Evontech',
      position: 'Associate Developer',
      duration: '2020 - 2021',
      responsibilities: [
        'Developed responsive web applications using React, HTML, CSS, and JavaScript.',
        'Integrated RESTful APIs and GraphQL endpoints for data retrieval and manipulation.',
        'Optimized application performance through code refactoring and performance tuning.',
        'Participated in Agile Scrum ceremonies and sprint planning meetings.',
      ],
    },
  ],
  projects: [
    {
      name: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform using React, Node.js, and MongoDB.',
      duration: '2019 - Present',
    },
    {
      name: 'Surfhub',
      description: 'Developed a responsive dashboard for monitoring social media analytics using React and Redux.',
      duration: '2018 - 2019',
    },
  ],
  certifications: [
    {
      name: 'React Developer Certification',
      issuer: 'React Training',
      year: '2019',
    },
    {
      name: 'Node.js Certification',
      issuer: 'NodeSource',
      year: '2020',
    },
  ],
  skills: ['JavaScript', 'React.js', 'Node.js', 'HTML', 'CSS', 'Redux', 'RESTful APIs', 'GraphQL', 'Git'],
};
