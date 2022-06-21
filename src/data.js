import hytaleservers from './Images/hytale-servers.png';
import hytale2 from './Images/hytale-servers2.png';
import livingonline from './Images/livingOnline.png';

const projects = [
  {
    id: 1,
    title: 'hytale servers',
    image: hytaleservers,
    image2: hytale2,
    desc: 'An Hytale server list website, based from a Minecraft server list',
    website: 'https://elele.team/portfolio/hytaleservers/',
    github: 'https://github.com/Jackelele',
    stack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Frontend Development ',
    mainImage: hytaleservers,
    year: 2021,
    para1:
      'This is was one of my only big projects that was paid. It included re-create a Minecraft server list website for HytaleHub. This was the final product however, there were further changes made.',
    para2:
      'The original website was crated by a colleague however had a slightly different design, further additions were made including the About, Blog and Log-In.  ',

    para3:
      'The list section of the website was also created by myself however, the actual server page was not completed. ',
  },
  {
    id: 2,
    title: 'LivingOnline',
    image: livingonline,
    image2: livingonline,
    desc: 'Twitch Streamer Website for LivingOnline',
    website: 'https://livingonline.club',
    github: 'https://github.com/Jackelele',
    stack: ['HTML', 'tailwindcss'],
    role: 'Fontend Development',
    mainImage: livingonline,
    year: 2022,
    para1: 'test123243535354'
  }
];

export default projects;
