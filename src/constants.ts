import { Project, Skill } from './types';

export const SKILLS: Skill[] = [
  // Programming
  { name: 'Java', category: 'programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Python', category: 'programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Node.js', category: 'programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'JavaScript', category: 'programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'C#', category: 'programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'Express.js', category: 'programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'React', category: 'programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vue.js', category: 'programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'MongoDB', category: 'programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  
  // Mobile & Web
  { name: 'Flutter', category: 'mobile-web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Dart', category: 'mobile-web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  { name: 'Next.js', category: 'mobile-web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Tailwind CSS', category: 'mobile-web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },

  // Database
  { name: 'MSSQL', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  { name: 'Firebase', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'Tableau', category: 'database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-plain.svg' },

  // Design & Management
  { name: 'Canva', category: 'design-management', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  { name: 'Management', category: 'design-management', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'HealthTrack MERN Application',
    description: 'A comprehensive healthcare management system built with the MERN stack.',
    longDescription: 'HealthTrack is a sophisticated healthcare platform designed to streamline patient data management. It features real-time monitoring of vital signs, secure appointment scheduling, and automated billing integration. The application utilizes MongoDB for scalable data storage, Express and Node for a robust backend API, and React for a dynamic, responsive user interface.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'web',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
    ],
    github: 'https://github.com',
  },
  {
    id: '2',
    title: 'EduPulse Mobile App',
    description: 'A cross-platform educational app developed with Flutter and Firebase.',
    longDescription: 'EduPulse provides students with a seamless mobile learning experience. Developed using Flutter, it offers high performance across both iOS and Android. Integration with Firebase enables real-time synchronization of study materials, interactive quizzes, and offline access to course content. The app also includes progress tracking and notification systems for personalized learning.',
    tags: ['Flutter', 'Firebase', 'Dart'],
    category: 'mobile',
    imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800'
    ],
    link: 'https://example.com',
  },
  {
    id: '3',
    title: 'BankCore System v2.0',
    description: 'A high-performance banking core backend service implemented in Java.',
    longDescription: 'BankCore System v2.0 is a mission-critical backend solution for financial institutions. Built with Java and Spring Boot, it handles complex transactional logic with high throughput. The system utilizes Microsoft SQL Server (MSSQL) with strict ACID compliance to ensure maximum data integrity and security. Features include audit logging, real-time fraud detection hooks, and support for thousands of concurrent users.',
    tags: ['Java', 'MSSQL', 'Spring Boot'],
    category: 'other',
    imageUrl: 'https://images.unsplash.com/photo-1550565118-3d1428df732f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'TechVision Brand Identity',
    description: 'Full graphic design suite and brand guidelines created for TechVision.',
    longDescription: 'The TechVision project involved creating a cohesive visual identity for a modern technology firm. Using tools like Canva and Adobe Creative Suite, I developed a complete brand kit including logos, typography, color palettes, and social media templates. The resulting identity led to a significant increase in brand recognition and social engagement, fostering a professional yet innovative market presence.',
    tags: ['Canva', 'Branding', 'Graphic Design'],
    category: 'design',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: 'SmartCity IoT Dashboard',
    description: 'Real-time dashboard for monitoring city-wide IoT sensors.',
    longDescription: 'This project showcases a sophisticated data visualization platform for urban management. Python scripts handle the ingestion and processing of data from thousands of IoT sensors across the city. The frontend, built with React and Tailwind CSS, presents this data through interactive maps and charts, allowing city officials to monitor traffic patterns, air quality, and energy usage in real-time.',
    tags: ['Python', 'React', 'Tailwind'],
    category: 'web',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    title: 'DeliveryX Rider App',
    description: 'Bespoke mobile application for logistics personnel.',
    longDescription: 'DeliveryX is designed specifically for last-mile delivery riders to optimize their daily operations. Built with Flutter, the app provides turn-by-turn navigation using Google Maps API integration. Riders can manage their delivery queues, scan packages, and provide photographic proof of delivery. The app automatically recalculates routes based on live traffic, ensuring peak efficiency for logistics networks.',
    tags: ['Flutter', 'Google Maps', 'Firebase'],
    category: 'mobile',
    imageUrl: 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800',
  }
];
