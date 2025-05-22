type Skills = {
  name: string
  link: string
  id: string
}

type Project = {
  name: string
  link: string
  image: string
  id: string
}

type PersonalProject = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
}

type Education = {
  degree: string
  school: string
  start: string
  end: string
  id: string
}

type Languages = {
  name: string
  description: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const SKILLS: Skills[] = [
  {
    name: 'HTML',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    id: 'html',
  },
  {
    name: 'CSS',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    id: 'css',
  },
  {
    name: 'SCSS',
    link: 'https://sass-lang.com/',
    id: 'scss',
  },
  {
    name: 'Bootstrap',
    link: 'https://getbootstrap.com/',
    id: 'bootstrap',
  },
  {
    name: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    id: 'javascript',
  },
  {
    name: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    id: 'typescript',
  },
  {
    name: 'Vue.js',
    link: 'https://vuejs.org/',
    id: 'vue',
  },
  {
    name: 'Nuxt.js',
    link: 'https://nuxt.com/',
    id: 'nuxt',
  },
  {
    name: 'React',
    link: 'https://reactjs.org/',
    id: 'react',
  },
  {
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    id: 'tailwind',
  },
  {
    name: 'Vuex',
    link: 'https://vuex.vuejs.org/',
    id: 'vuex',
  },
  {
    name: 'Pinia',
    link: 'https://pinia.vuejs.org/',
    id: 'pinia',
  },
  {
    name: 'Node.js',
    link: 'https://nodejs.org/en/',
    id: 'node',
  },
  {
    name: 'NestJS',
    link: 'https://nestjs.com/',
    id: 'nestjs',
  },
  {
    name: 'DjangoCMS',
    link: 'https://www.django-cms.org/',
    id: 'djangocms',
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Profuse',
    link: 'https://www.profuse.com.br/',
    image: '/images/works/profuse.png',
    id: 'project1',
  },
  {
    name: 'Acquamotion',
    link: 'https://acquamotion.com.br/',
    image: '/images/works/acquamotion.png',
    id: 'project2',
  },
  {
    name: 'Ritmoneuran',
    link: 'https://ritmoneuran.com.br/',
    image: '/images/works/ritmoneuran.png',
    id: 'project3',
  },
]

export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    name: 'Wonder-Tasks Tracker',
    description:
      'Task tracker app using Vue.js, Tailwind and Vuex.',
    link: 'https://wondertasks-tracker.vercel.app/',
    image: '/images/projects/wondertasks.png',
    id: 'project1',
  },
  {
    name: 'Nutriação',
    description:
      'An API for ONGs that provides food, using Node.js, NestJS and PostgreSQL.',
    link: 'https://github.com/mariana-morais/nutri-acao',
    image: '/images/projects/nutriacao.png',
    id: 'project2',
  },
  {
    name: 'Spotify MoonMood',
    description:
      'A Spotify theme that uses Angular16 and Spotify API.',
    link: 'https://github.com/mariana-morais/spotify-moon-mood',
    image: '/images/projects/moonmood.png',
    id: 'project3',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Winx',
    title: 'Front-End Developer',
    start: '2024',
    end: 'Present',
    id: 'work1',
  },
  {
    company: 'Weni',
    title: 'Front-End Developer',
    start: '2023',
    end: '2024',
    id: 'work2',
  },
  {
    company: 'Winx',
    title: 'Front-End Developer',
    start: '2022',
    end: '2023',
    id: 'work3',
  },
  {
    company: 'Huia Haus',
    title: 'Full Stack Developer',
    start: '2021',
    end: '2022',
    id: 'work4',
  },
  {
    company: 'Data Core',
    title: 'Associate Systems Analyst',
    start: '2019',
    end: '2020',
    id: 'work5',
  },
]

export const EDUCATION: Education[] = [
  {
    degree: 'Systems Analysis and Development',
    school: 'FATEC - Arthur Azevedo',
    start: '2016',
    end: '2018',
    id: 'education1',
  },
]

export const LANGUAGES: Languages[] = [
  {
    name: 'Portuguese 🇧🇷',
    description: 'Native speaker',
    id: 'pt-br',
  },
  {
    name: 'English 🇺🇸',
    description: 'Intermediate (A2)',
    id: 'en-us',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'New post',
    description: 'Just a new blog post',
    link: '/blog/new',
    uid: 'blog-5',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/mariana-morais',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/marianahemorais',
  },
  {
    label: 'Behance',
    link: 'https://www.behance.net/marianahemorais',
  },
  {
    label: 'Dribbble',
    link: 'https://dribbble.com/marianahemorais',
  },
]

export const EMAIL = 'marianahemorais@gmail.com'
