export const header = {
  homepage: 'https://Jason-Ng00.github.io',
  title: 'JN.',
};

export const about = {
  name: 'Jason Ng',
  role: 'Fullstack Software Engineer / Quant Developer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  sourceCode: string;
  livePreview: string;
};

export const projects: Project[] = [
  {
    name: 'Light Copilot',
    description:
      'A Desktop Application that allows users to chat with AI models anywhere on their computer. Activating via hotkey, it reads in the current highlgihted text and provides a seamless user experience.',
    stack: ['Electronjs', 'TypeScript', 'React', 'LLM Integration'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Trading Ideation',
    description:
      'A strategy backtesting system with dashboard and analysis from AI models simulating different views from trading experts',
    stack: ['Streamlit', 'LLM Integration', 'Python', 'Data Engineering', 'Finance'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Low Latency Data Pipeline',
    description:
      'Simulating a low latency data pipeline for financial data from exchanges to a system. Optimizing the efficiency of data fetching and order processing.',
    stack: ['C++', 'Python', 'React', 'Low Latency System', 'Finance'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
];

export const skills: string[] = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
];

export const contact = {
  email: 'jasonng1000w@gmail.com',
};
