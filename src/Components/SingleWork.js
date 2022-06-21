import { Link } from 'react-router-dom';
import GoToTop from '../GoToTop';
import { Fade, Slide } from 'react-awesome-reveal';

const SingleWork = function ({ title, desc, mainImage, id }) {
  return (
    <section>
      <div className='grid grid-cols-1 lg:flex justify-between items-center mb-10 overflow-hidden'>
        <div className=''>
          <Link to={`/work/${id}`}>
            <Fade triggerOnce duration={2000}>
              <h2 className='text-5xl title uppercase text-text-link font-semibold cursor-pointer w-[25rem]'>
                {title}{' '}
              </h2>
            </Fade>

            <Slide delay={200} triggerOnce>
              <div className='border-4 border-text-link  w-1/2 mb-6'></div>
            </Slide>
          </Link>
          <Slide delay={400} triggerOnce direction='up'>
            <p className='text-text-color mb-3 lg:mb-0 text-2xl w-[18rem]'>
              {desc}
            </p>
          </Slide>
        </div>
        <Link to={`/work/${id}`} className='relative project '>
          <img
            src={mainImage}
            alt='project'
            className='w-[29rem] h-[30rem] lg:h-[35rem] project-image rounded-lg'
          />

          <span className='absolute top-1/3 font-semibold right-1/2  md:right-[27rem] lg:right-1/2 text-lg see-more translate-y-[1.5rem] translate-x-1/2 bg-white  p-14 w-5 h-5 flex items-center justify-center rounded-full text-black'>
            See more
          </span>
        </Link>
      </div>
      <GoToTop />
    </section>
  );
};

export default SingleWork;
