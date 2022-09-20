import cartoon from '../Images/hmmm.png';
import apple from '../Images/apple.png';
import { Slide, Fade } from 'react-awesome-reveal';
import { useGlobalContext } from '../context';
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import Status from "./Status";

const Hero = function () {
  const { theme } = useGlobalContext();
  return (
    <section>
      <div className='max-w-sm md:max-w-2xl md:pb-24 lg:flex mt-28 justify-center items-center gap-x-48  lg:max-w-5xl mx-auto overflow-x-hidden '>
        <Fade duration={3000}>
          {theme === 'dark-theme' ? (
            <div className=''>
              <p className='text-lg text-text-color'>
                Hello, I'm <b>Jack Irving</b>
              </p>

              <h1 className=' text-text-link text-7xl capitalize font-semibold '>
                freelance{' '}
              </h1>
              <h1 className=' text-text-link  text-7xl font-semibold  capitalize mb-2'>
                developer
              </h1>

              <p className='text-xl  text-text-color mb-3'>
                I'm a Freelance Developer currently based in United Kingdom with
                experience in building and delivering end to end
                solutions for digital products. 🚀
              </p>

              <div className='flex space-x-4'>
                <a
                  href='https://twitter.com/Jackelele_'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FiTwitter className='w-7 h-7 text-text-link   font-semibold' />
                </a>
                <a
                  className=' text-text-link text-xl font-semibold '
                  href='https://github.com/Jackelele'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FiGithub className='w-7 h-7 text-text-link   font-semibold' />
                </a>
                <a
                  className=' text-text-link text-xl font-semibold'
                  href='https://www.linkedin.com/in/jack-irving/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <FiLinkedin className='w-7 h-7 text-text-link   font-semibold' />
                </a>

                <a
                  className='  text-xl font-semibold '
                  href='mailto:jack@✨.gg'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FiMail className='w-7 h-7 text-text-link   font-semibold' />
                </a>
              </div>
              <Status class="mt-4" />
            </div>
          ) : (
            <div className=''>
              <p className='text-lg text-text-color'>
                Hi, I'm <b>Jack</b>
              </p>

              <p className=' text-text-link font-semibold text-7xl capitalize'>
                systems{' '}
              </p>
              <h1 className=' text-text-link font-semibold text-7xl capitalize mb-2'>
                engineer
              </h1>

              <p className='text-xl text-text-color mb-3'>
                A problem-solving learning individual, working with
                the rail transport network.🚆
              </p>

              <div className='flex space-x-4'>
                <a
                  href='https://twitter.com/Jackelele_'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FiTwitter className='w-7 h-7 text-text-link   font-semibold' />
                </a>
                <a
                  className=' text-text-link text-xl font-semibold '
                  href='https://github.com/Jackelele'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FiGithub className='w-7 h-7 text-text-link font-semibold' />
                </a>
                <a
                  href='https://www.linkedin.com/in/jack-irving/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <FiLinkedin className='w-7 h-7 text-text-link   font-semibold' />
                </a>

                <a
                  className='  text-xl font-semibold '
                  href='mailto:jack@✨.gg'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FiMail className='w-7 h-7 text-text-link  font-semibold' />
                </a>
              </div>
            </div>
          )}
        </Fade>


        <Slide direction='right' duration={1000}>
          <div className='w-64 hidden  lg:block'>
            {theme === 'dark-theme' ? (
              <img src={cartoon} alt='cartoon' />
            ) : (
              <img src={apple} alt='cartoon' />
            )}
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Hero;
