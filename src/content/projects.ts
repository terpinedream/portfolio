export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  stack: string[];
  repo: string;
  stars: number;
  featured: boolean;
  accent: string;
	image?: string;
	imageFit?: 'cover' | 'contain';
	gallery?: string[];
	links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "bashd",
    title: "Bashd",
    tagline: "Bulk file ops without leaving the CLI.",
    description:
      "Scripts that streamline file management from the command line - rename, organize, and analyze at scale for sysadmin and data work.",
    details: [
      "Bashd is a collection of bash helper scripts for everyday file management.",
      "Bashd started as a personal script collection I built to alleviate pain points I personally encountered while performing bulk data management via CLI.",
      "This collection quickly grew into something of its own framework; completely transforming how I interacted with files from the command line. This is an evergrowing project, and one that I am most proud of. ",
      "Anything from bulk renaming, categorization, indexing, and simply navigating directories - Bashd aims to make things efficent.",
    ],
    stack: ["Bash", "CLI", "Sysadmin"],
    repo: "https://github.com/terpinedream/Bashd",
    stars: 11,
    featured: true,
    accent: "#5c4a32",
    image: "projects/bashd.gif",
  },
  {
    slug: "meditrack",
    title: "MediTrack",
    tagline: "Live flight monitor for PD / EMS / FD.",
    description:
      "A live flight monitor built for public safety context - tracking relevant aircraft activity for PD, EMS, and fire departments.",
    details: [
      "MediTrack is a Police, Fire, and EMS aircraft tracker designed to identify emergency responses in real-time.",
      "Utilizing the OpenSky Network API, the FAA rleasable aircraft registry, and Broadcastify, MediTrack enables you to identify and emergency response and monitor both the live flight path and radio transmissions.",
      "Aircrafts are scored and filtered by model, owner keywords, and N-number. These are then tagged by registrant type (Police, EMS, Hospital, City, County, etc.), and added to the custom database.",
      "A monitoring dashboard pairs the active list with a map where users can see detailed flight information and find links to specific flights on FlightAware or FlightRadar24.",
      "Anomaly detection flags high speed, sudden acceleration, rapid climb or descent, emergency squaks, erratic heading, and multi-launch patterns. Geo context reduces false positives near airports and can enrich alerts with hospital proximity.",
      "Monitoring works by US region or selected states.",
    ],
    stack: ["Python"],
    repo: "https://github.com/terpinedream/MediTrack",
    stars: 0,
    featured: true,
    accent: "#2f4a3c",
    image: "projects/meditrack.png",
    imageFit: "contain",
    gallery: [
      "projects/mt-1.jpg",
      "projects/mt-2.png",
      "projects/mt-3.jpg",
    ],
  },
  {
    slug: "openreader",
    title: "OpenReader",
    tagline: "A lighter launcher for Kindle e-readers.",
    description:
      "A lightweight alternative launcher for Kindle devices - focused on speed, clarity, and getting back to reading.",
    details: [
      "OpenReader is the first direct replacement for KindleOS on Kindle e-readers.",
      "OpenReader is a proformance-first, barebones OS built from the ground up to revive your old e-reader and reclaim your hardware ownership.",
      "Kindle devices don't alow for users to outright own their books. Books are normally accuired by renting licenses from Amazon. OpenReader not only allows for direct PDF storage, it also cuts the idle RAM usage in half - idling at ~170mb. Memory efficency is especially important on legacy hardware where many of these devices would otherwise be borderline unusable with stock Amazon firmware.",
      "This was designed as a simple app launcher, with a full-featured settings menu, and portable touch controls. Touch calibration was completely rebuilt and designed to work across any kindle device. It installs as a KUAL extension with a precompiled touch binary and recovery paths if boot replacement needs to be undone. Users can choose to either suspend the stock firmware, or replace KindleOS entirely.",
      "To my knowledge, this is the first and only project to fully replace KindleOS.",
    ],
    stack: ["Shell", "Kindle"],
    repo: "https://github.com/terpinedream/OpenReader",
    stars: 19,
    featured: true,
    accent: "#3d4f63",
  },
  {
    slug: "tuxagotchi",
    title: "tuxagotchi",
    tagline: "Feed Tux in your terminal by shipping code.",
    description:
      "A CLI companion that encourages you to keep up with your projects. Push to GitHub and “feed” Tux - productivity with a TUI personality.",
    details: [
      "Tuxagotchi is a terminal companion that thrives on your GitHub activity. Built as a Textual TUI, it turns commit streaks into mood: keep shipping and Tux stays happy; go quiet and the hunger countdown starts ticking.",
      "A fun twist on Tamagotchi toys, this project aims to keep you actively coding in a fun and interactive way.",
      "The interface centers on an ASCII Tux with animated emotional states. Hook it to any repository you'd like, and monitor your coding frequency.",
    ],
    stack: ["Python", "TUI", "Git"],
    repo: "https://github.com/terpinedream/tuxagotchi",
    stars: 207,
    featured: true,
    accent: "#1a6b6b",
    image: "projects/tuxagotchi.png",
    links: [
      {
        label: "Reddit feature",
        href: "https://www.reddit.com/r/unixporn/s/xombTLHTOd",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
