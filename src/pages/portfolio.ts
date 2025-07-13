export const header = {
  homepage: 'https://Jason-Ng00.github.io',
  title: 'JN.',
};

export const about = {
  name: 'Jason Ng',
  role: 'Fullstack Software Engineer / Quant Developer',
  description:
    'A passionate software engineer specializing in full-stack development and quantitative finance, dedicated to crafting innovative solutions at the intersection of technology and finance. Experienced in designing low-latency systems and seamlessly integrating AI to drive impactful results.',
  // resume: 'https://example.com',
  // social: {
  //   linkedin: 'https://linkedin.com',
  //   github: 'https://github.com',
  // },
};

export type Project = {
  name: string;
  description: string;
  stack: string[];
  sourceCode?: string;
  livePreview?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: 'Light Copilot',
    description:
      'A Desktop Application that allows users to chat with AI models anywhere on their computer. Activating via hotkey, it reads in the current highlgihted text and provides a seamless user experience.',
    stack: ['Electronjs', 'TypeScript', 'React', 'LLM Integration'],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
    demo: "https://drive.google.com/file/d/1ogvxz4vu0GQexcPXHiTQztq34zO18Oc3/view?usp=sharing"
  },
  {
    name: 'Trading Ideation',
    description:
      'A strategy backtesting system with dashboard and analysis from AI models simulating different views from trading experts',
    stack: ['Streamlit', 'LLM Integration', 'Python', 'Data Engineering', 'Finance'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://trade-ideation.streamlit.app/',
  },
  {
    name: 'Low Latency Data Pipeline',
    description:
      'Simulating a low latency data pipeline for financial data from exchanges to a system. Optimizing the efficiency of data fetching and order processing.',
    stack: ['C++', 'Python', 'React', 'Low Latency System', 'Finance'],
    sourceCode: 'https://huggingface.co/spaces/JasonNg00/low-latency-data-flow/tree/main',
    livePreview: 'https://huggingface.co/spaces/JasonNg00/low-latency-data-flow',
  },
];

export const skills: string[] = [
  'Python',
  'C++',
  'Java',
  'C#',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Node.js',
  'MySQL',
  'MongoDB',
];

export const cloudExperience: string[] = [
  'AWS',
  'Azure',
  'Firebase',
  'Vercel',
  'Cloudflare',
];

export const contact = {
  email: 'jasonng1000w@gmail.com',
};
