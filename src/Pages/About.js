import Navbar from '../Components/Navbar';
import StickyBottomNav from '../Components/StickyBottomNav';
import Me from '../Images/me.jpg';
import { Zoom, Slide } from 'react-awesome-reveal';
import { BsDashLg } from 'react-icons/bs';
import GoToTop from '../GoToTop';

const About = function () {
  return (
    <section className='max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto  pb-20 overflow-x-hidden'>
      <Navbar />
      <h2 className='mb-12 text-3xl text-text-color  mt-20 font-semibold tracking-wider'>
        <BsDashLg className='text-text-link mr-1 inline' />
        about
      </h2>
      <div className='grid grid-cols-1  lg:flex space-x-0 lg:space-x-20 '>
        <Zoom triggerOnce>
          <img className='w-50 h-50 rounded-lg' src={Me} alt='Jackelele' />
        </Zoom>
        <div>
          <h3 className='text-lg text-text-color font-bold mt-10 lg:mt-0'>
            Hello world. ✨
          </h3>
          <Slide direction='up' triggerOnce delay={200}>
            <p className='mb-6 mt-3 text-text-color text-xl tracking-wide para '>
              Hi I'm Jack, a Freelance Developer curerntly living in England, UK.
              I am passionate about solving complex problems with responsive applications.
            </p>

            <p className='mb-6 text-text-color text-xl tracking-wide para'>
              Proficient in vanilla javascript, hence can easily adapt to any of
              its frameworks depending on the requirements of the job.
            </p>

            <p className='mb-6 text-text-color text-xl tracking-wide para'>
              I'm thrilled by logic; and I solve problems for fun. When I'm not
              working I'm either playing video games, catching up on my
              latest shows, listening to music or surfing the internet.
            </p>

            <a
              className='bg-text-link text-background font-semibold px-2 py-1 rounded-lg hover:bg-white hover:text-black ease-in duration-300 '
              href='https://www.linkedin.com/in/jack-irving/'
              target='_blank'
              rel='noreferrer'
            >
              Resume →
            </a>
          </Slide>
        </div>
      </div>

      <div className='mt-20 md:mt-36 '>
        <h3 className='text-text-color font-extrabold text-3xl capitalize mb-4 tracking-widest '>
          skills
        </h3>
        <Slide direction='right' duration={2000} triggerOnce>
          <div className='w-full border boder-b border-border'></div>
        </Slide>

        <Slide direction='up' triggerOnce>
          <div className='grid grid-cols-1 md:flex '>
            <div className='w-1/2'>
              <div className='font-semibold capitalize tracking-widest text-text-color text-2xl mt-4 mb-2'>
                languages/frameworks
              </div>
              <ul>
                <li className='text-text-color text-lg'>HTML</li>
                <li className='text-text-color text-lg'>TailwindCSS</li>
                <li className='text-text-color text-lg'>JavaScript</li>
                <li className='text-text-color text-lg'>ReactJS</li>
              </ul>
            </div>

            <div className='w-1/2'>
              <div className='font-semibold capitalize tracking-widest text-text-color text-2xl mt-4 mb-2'>
                tools
              </div>
              <ul>
                <li className='text-text-color text-lg '>Git/GitHub</li>
                <li className='text-text-color text-lg '>VSCode</li>
                <li className='text-text-color  text-lg'>Adobe Premiere Pro</li>
                <li className='text-text-color text-lg '>Adobe Photoshop</li>
              </ul>
            </div>
          </div>
        </Slide>
      </div>

      <div>
        <h3 className='text-text-color font-extrabold text-3xl capitalize mb-4 tracking-widest mt-8'>
          education
        </h3>
        <Slide direction='left' duration={2000} triggerOnce>
          <div className='w-full border boder-b border-border '></div>
        </Slide>
        <div>
          <Slide direction='up' triggerOnce>
            <div>
              <div className='font-semibold capitalize tracking-widest text-text-color text-2xl mt-4'>
                Edge Hill University
              </div>
              <div className='semi-bold capitalize tracking-widest  text-text-color text-base'>
                BSc (Hons) Computing (Network, Security and Forensics)
              </div>
              <span className='text-text-color'>2019-2022</span>
            </div>
          </Slide>
        </div>
      </div>

      <div className='pb-24'>
        <h3 className='text-text-color font-extrabold text-3xl capitalize mb-4 tracking-widest mt-8 '>
          experience
        </h3>
        <Slide direction='right' duration={2000} triggerOnce>
          <div className='w-full border boder-b border-border'></div>
        </Slide>
        <Slide direction='up' triggerOnce>
          <div className='grid grid-cols-1 md:flex '>
            <div className='md:w-1/2'>
              <div className='font-semibold capitalize tracking-widest text-text-color text-2xl mt-4'>
                telent
              </div>
              <span className='text-text-color'>2022 - present</span>
            </div>

            <div className='md:w-1/2'>
              <div className='font-semibold text-xl capitalize md:tracking-widest text-text-color md:text-2xl mt-4'>
                {' '}
                Graduate Engineer
              </div>
              <p className='text-text-color text-lg'>
              Telent is a leading technology company and specialist in the design, build, support and management of the UK's critical digital infrastructure, drawing on decades of experience in mission-critical communications and technology.
              </p>
            </div>
          </div>
        </Slide>
        <Slide direction='up' triggerOnce>
          <div className='grid grid-cols-1 md:flex'>
            <div className='md:w-1/2'>
              <div className='font-semibold capitalize tracking-widest text-text-color text-2xl mt-4'>
                {' '}
                Activision
              </div>
              <span className='text-text-color'>Feb 2019 - Sep 2021</span>
            </div>

            <div className='md:w-1/2'>
              <div className='font-semibold text-xl capitalize md:tracking-widest text-text-color md:text-2xl mt-4'>
                {' '}
                Customer Service Ambassador
              </div>
              <p className='text-text-color text-lg'>
                Volunatary position, answering support posts and answering live chats.
              </p>
            </div>
          </div>
        </Slide>

        <Slide direction='up' triggerOnce>
          <div className='grid grid-cols-1 md:flex'>
            <div className='md:w-1/2'>
              <div className='font-semibold capitalize tracking-widest text-text-color text-2xl mt-4'>
                {' '}
                HytaleHub
              </div>
              <span className='text-text-color'>Aug 2020 - Jan 2021</span>
            </div>

            <div className='md:w-1/2'>
              <div className='font-semibold text-xl capitalize md:tracking-widest text-text-color md:text-2xl mt-4'>
                {' '}
                Frontend Developer
              </div>
              <p className='text-text-color text-lg'>
                Mainly focusing on the Hytale Servers website, I was tasked in creating the website in HTML and later re-developed in VueJS. 
              </p>
            </div>
          </div>
        </Slide>
      </div>
      <StickyBottomNav />
      <GoToTop />
    </section>
  );
};

export default About;
