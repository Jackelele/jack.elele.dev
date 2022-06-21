import { Link } from 'react-router-dom';

import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useGlobalContext } from '../context';

const Navbar = function () {
  const { theme, themeHandler } = useGlobalContext();

  return (
    <section>
      <nav className=' pt-12 max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto flex items-center justify-between text-text-color'>
        <Link
          to='/'
          className='text-2xl  tracking-wider uppercase font-extrabold'
        >
          {theme === 'dark-theme' ? 'jackelele' : 'jack'}
        </Link>

        <div className='text-4xl text-text-link' onClick={themeHandler}>
          <button>
            {theme === 'dark-theme' ? <BsToggleOff /> : <BsToggleOn />}
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
