export type ToolkitItem = {
  id: string;
  name: string;
  category: string;
  summary: string;
};

export const toolkit: ToolkitItem[] = [
  {
    id: "python",
    name: "Python",
    category: "Programming Language",
    summary:
      "My first and most used language. I've used python and its many frameworks and libraries for everything from web development to data analysis in my professional career.",
  },
  {
    id: "C",
    name: "C",
    category: "Programming Language",
    summary:
      "The C programming language is a foundational language that shaped my programming style as a whole. The constraints with C made me value code efficiency and clarity. C is an incredibly powerful language for low-level programming and embedded systems that I've used in embedded applications and TUI tools.",
  },
  {
    id: "TypeScript",
    name: "TypeScript",
    category: "Programming Language",
    summary:
      "TypeScript is a language I learned more recently. TypeScript has quickly found its place in my stack for many different applications. It has started becoming my go-to language for larger applications.",
  },
  {
    id: "Cursor",
    name: "Cursor",
    category: "IDE",
    summary:
      "Cursor is my first-choice for code editors. I believe that AI is a powerful tool that can make great programmers more efficient. Cursor gives me the ability to automate reduntant coding tasks and intelligently instruct agents to build within strict constraints with manual code review.",
  },
  {
    id: "Blender",
    name: "Blender",
    category: "Software",
    summary:
      "Blender is my personal choice for 3D modeling and animations. Anything from 2D animations for web development to 3D models for product prototyping, Blender serves me as a powerful open-source tool in my stack.",
  },
  {
    id: "OpenShot",
    name: "OpenShot",
    category: "Video Editing",
    summary:
      "I use OpenShot to edit various videos and audio tracks for documentary-style tech videos or promotional content for my projects.",
  },
  {
    id: "Pandas",
    name: "Pandas/Jupyter",
    category: "Data",
    summary:
      "I've used pandas, geopandas, jupyter notebooks and supporting frameworks in my professional career for data analysis and statistical figure generation.",
  },
  {
    id: "Linux",
    name: "Linux",
    category: "Operating System",
    summary:
      "I have deep experience and understanding of Linux and the many distrobutions that come with it. I am an active contributor for Arch Linux, and frequently develop Linux-specific tooling for many of my projects. Linux serves as my sandbox dev environment and OS of choice.",
  },
];

/** Editorial palette — cycles if you add more than 8 items. */
export const toolkitColors = [
  "#1a6b6b",
  "#3d4f63",
  "#5c4a32",
  "#2f4a3c",
  "#4a5560",
  "#6b4f3a",
  "#2c5a6b",
  "#4a3f55",
];
