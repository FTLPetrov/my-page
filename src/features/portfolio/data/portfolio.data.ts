import type { Post, Work, NavLink } from '../types/portfolio.types'

export const navLinks: NavLink[] = [
  { label: 'Hobbies', href: '#hobbies' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const services: Post[] = [
  {
    id: '1',
    title: 'Software Development',
    category: 'Paid Service',
    description:
      'I offer software development services to help you build your next project. I freelance development as a part of my journey in the IT industry. If you are interested feel free to contact me any time.',
  },
  {
    id: '2',
    title: 'Cybersecurity',

    category: 'Paid Service',
    description:
      'Before you even think about it - Yes I can breach passwords and NO I won\'t provide that as a service because it is illegal. I offer solutions related to security matters of your computer and network.',
  },
  {
    id: '3',
    title: 'IT Solutions and Consulting',

    category: 'Over a coffee',
    description:
      'I offer IT solutions and consulting services to help you solve your problems. I am a quick learner and I am always willing to help you with your problems.',
  },
  {
    id: '4',
    title: 'PC Troubleshooting',
    category: 'Over a coffee',
    description:
      'I offer PC troubleshooting services to investigate PC concerns. Scanning for malware and viruses, optimizing your PC for better performance, and more.',
  },
]

export const hobbies: Work[] = [
  {
    id: '1',
    title: 'Gaming',
    category: 'Rare',
    description:
      'As most of the IT enthusiasts, I was really into gaming in my childhood. I still am doing that as a hobby, yet not as much as I used to be. We could compete some time.',
    icon: 'SportsEsports',
  },
  {
    id: '2',
    title: 'Martial Arts',

    category: 'Often',
    description:
      'Lately I was more into martial arts as it became a part of my lifestyle. I am not competing, I do it for the sake of health and self-defense.',
    icon: 'SportsMma',
  },
  {
    id: '3',
    title: 'Music',

    category: 'Often',
    description:
      'Music became a solid part of my life. I even play guitar, never took lessons and I am a self-taught. I love listening to music and I am always open to new music.',
    icon: 'Headphones',
  },
  {
    id: '4',
    title: 'Coffee Lover',
    category: 'Daily',
    description:
      'I love coffee. I drink it every day. I love the smell of coffee and the taste of it. Not only that, I love the social aspect of it. I love to hang out with my friends and colleagues over a coffee and have a nice chat.',
    icon: 'LocalCafe',
  },
]
