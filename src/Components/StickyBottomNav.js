import { NavLink } from 'react-router-dom';

const nav = [
  {
    id: 1,
    title: 'about',
    url: '/about',
  },
  {
    id: 2,
    title: 'work',
    url: '/work'
  },
  {
    id: 3,
    title: 'uses',
    url: '/uses'
  },
  {
    id: 4,
    title: 'contact',
    url: '/contact',
  },
];

const StickyBottomNav = function () {
  return (
    <section className='px-48'>
      <div className='bottom-0 bg-background ease-in duration-300 left-0 right-0 fixed text-text-color pb-3 pt-3 '>
        <ul className='flex  justify-evenly text-xl capitalize'>
          {nav.map((item) => (
            <NavLink
              to={item.url}
              key={item.id}
              className='hover:text-text-link'
            >
              <div className='font-semibold '>{item.title}</div>
            </NavLink>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default StickyBottomNav;
