import { Project } from '../types/Project'

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      "My portfolio website to provide access to projects I've worked on and insight into my background.",
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ExcitedDeveloper/portfolio',
    liveUrl: 'https://www.stevehunley.dev',
    imageSrc: 'Portfolio.PNG',
    imageAlt: 'Portfolio',
    maxWidth: '43.75rem'
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper Clone',
    description:
      'A clone of Minesweeper developed with <span class="highlighted-text">React</span>.',
    technologies: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ExcitedDeveloper/minesweeper',
    liveUrl: 'https://minesweeper.stevehunley.dev',
    imageSrc: 'MinesweeperClone.PNG',
    imageAlt: 'Minesweeper Clone',
    maxWidth: '22rem'
  },
  {
    id: 'codepen',
    title: 'Codepen Clone',
    description:
      'A clone of Codepen developed with <span class="highlighted-text">Svelte</span>.',
    technologies: ['Svelte', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ExcitedDeveloper/codepen',
    liveUrl: 'https://codepen.stevehunley.dev/',
    imageSrc: 'CodepenClone.PNG',
    imageAlt: 'Codepen Clone',
    maxWidth: '43.75rem'
  },
  {
    id: 'flashcards',
    title: 'Flashcards',
    description:
      'A flashcard desktop application developed with <span class="highlighted-text">Electron</span>.',
    technologies: ['Electron', 'React', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ExcitedDeveloper/flashcardsv2',
    imageSrc: '/Flashcards.png',
    imageAlt: 'Flashcards',
    maxWidth: '43.75rem'
  },
  {
    id: 'pxtorem',
    title: 'PX to REM',
    description: 'A website that allows users to convert from pixels to rem.',
    technologies: ['Vite', 'React', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/ExcitedDeveloper/pxtorem',
    liveUrl: 'https://pxtorem.stevehunley.dev',
    imageSrc: 'PxToRem.PNG',
    imageAlt: 'PxToRem',
    maxWidth: '43.75rem'
  },
  {
    id: 'weather',
    title: 'Weather',
    description:
      'A website that allows users to search for a city displaying the current weather and the forecast for the next seven days.',
    technologies: ['Vite', 'React', 'JavaScript', 'HTML', 'Tailwind CSS'],
    githubUrl: 'https://github.com/ExcitedDeveloper/weather-app',
    liveUrl: 'https://weather.stevehunley.dev',
    imageSrc: 'Weather.PNG',
    imageAlt: 'Weather',
    maxWidth: '43.75rem'
  }
]
