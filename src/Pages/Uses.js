import Navbar from '../Components/Navbar';
import StickyBottomNav from '../Components/StickyBottomNav';
import Setup from '../Images/setup.jpg';
import { Zoom, Slide } from 'react-awesome-reveal';
import { BsDashLg } from 'react-icons/bs';
import GoToTop from '../GoToTop';

const Uses = function () {
  return (
    <section className='max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto  pb-20 overflow-x-hidden'>
      <Navbar />
      <h2 className='mb-12 text-3xl text-text-color  mt-20 font-semibold tracking-wider'>
        <BsDashLg className='text-text-link mr-1 inline' />
        uses
      </h2>
      <div className='grid grid-cols-1  lg:flex space-x-0 lg:space-x-20 '>
        <Zoom triggerOnce>
          <img className='rounded-lg' src={Setup} alt='Setup' />
        </Zoom>
        <div>
          <h3 className='text-lg text-text-color font-bold mt-10 lg:mt-0'>
            Hello ✨
          </h3>
          <Slide direction='up' triggerOnce delay={200}>
            <p className='mb-6 mt-3 text-text-color text-xl tracking-wide para '>
              This page is a list of all the technical equipment I currently use whether it's day to day work or remotely/away from home. 
            </p>

            <p className='mb-6 text-text-color text-xl tracking-wide para'>
              The equipment listed includes my home setup &amp; laptop etc. Which I'm using as a Engineer &amp; Freelance Developer, a lot of equipment was upgraded throughout the recent years and most likely will be upgraded
              once again this year. My monitors are different to as the picture on the right-hand side. You can also see I'm kind of a lover of RGB and Razer.
            </p>
            <a
              className='bg-teal-500 text-background font-semibold px-2 py-1 rounded-lg hover:bg-white hover:text-black ease-in duration-300 '
              href='https://uk.pcpartpicker.com/b/tkDxFT'
              target='_blank'
              rel='noreferrer'
            >
              PCPartPicker →
            </a>
          </Slide>
        </div>
      </div>

      <div className='mt-20 md:mt-36 '>
        <h3 className='text-text-color font-extrabold text-3xl capitalize mb-4 tracking-widest '>
          hardware &amp; peripherals
        </h3>
        <Slide direction='right' duration={2000} triggerOnce>
          <div className='w-full border boder-b border-border'></div>
        </Slide>

        <Slide direction='up' triggerOnce>
          <div className='grid grid-cols-1 md:flex'>
            <div className='w-1/2'>
              <div className='font-semibold capitalize tracking-widest text-text-color text-2xl mt-4 mb-2'>
                hardware
              </div>
              <ul>
                <li className='text-text-color text-lg'>Intel Core i7-8700K</li>
                <li className='text-text-color text-lg'>G.Skill Trident Z 16GB RGB</li>
                <li className='text-text-color text-lg'>MSI GeForce RTX 3080 10GB Gaming X Trio</li>
                <li className='text-text-color text-lg'>Lian Li PC-011 Dynamic Razer ATX Full</li>
                <li className='text-text-color text-lg'>Corsair RM 850W 80+ Gold</li>
                <li className="text-text-color font-semibold capitalize text-xl mt-2 mb-2">Storage</li>
                <li className='text-text-color text-lg'>Toshiba SSD 240GB</li>
                <li className='text-text-color text-lg'>Western Digital Caviar Blue 1TB x2</li>
                <li className='text-text-color text-lg'>Kingston SSD 120GB</li>
                <li className='text-text-color text-lg'>Corsair MP300 240GB M2 SSD</li>
              </ul>
            </div>

            <div className='w-1/2'>
              <div className='font-semibold capitalize tracking-widest text-text-color text-2xl mt-4 mb-2'>
              peripherals
              </div>
              <ul>
                <li className='text-text-color text-lg '>Razer Huntsman Chroma</li>
                <li className='text-text-color text-lg '>Razer Mamba Elite Chroma</li>
                <li className='text-text-color text-lg '>Razer Kraken 7.1 Chroma</li>
                <li className='text-text-color text-lg '>Razer Nommo Chroma Speakers</li>
                <li className='text-text-color text-lg '>Razer Goliathus Chroma Mouse Mat</li>
                <li className="text-text-color font-semibold capitalize text-xl mt-2 mb-2">Monitors</li>
                <li className='text-text-color text-lg '>MSI Optix G273QF HD 27" 165Hz IPS</li>
                <li className='text-text-color text-lg '>Eizo FS2434-BK 23.8" 60Hz</li>
                <li className='text-text-color  text-lg'>LG 22MK430H-B 21.5" 75Hz</li>
              </ul>
            </div>
            <div className='w-1/3'>
              <div className='font-semibold capitalize tracking-widest text-text-color text-2xl mt-4 mb-2'>
              wireless devices
              </div>
              <ul>
                <li className='text-text-color text-lg'>Microsoft Surface Pro 7</li>
                <li className='text-text-color text-lg'>Samsung S20 5G</li>
                <li className='text-text-color text-lg'>Razer Hammerheards 2.0</li>
              </ul>
            </div>
          </div>
        </Slide>
      </div>
      <div className='mt-20 md:mt-36 '>
        <h3 className='text-text-color font-extrabold text-3xl capitalize mb-4 tracking-widest '>
          software &amp; tools
        </h3>
        <Slide direction='right' duration={2000} triggerOnce>
          <div className='w-full border boder-b border-border'></div>
        </Slide>

        <Slide direction='left' duration={2000} triggerOn>
          <div className='grid grid-cols-1 md:flex'>
            <div className='w-1/3'>
              <div className='font-semibold capitalize tracking-widest text-text-color text-2xl mt-4 mb-2'>
                development tools
              </div>
              <ul>
                <li className='text-text-color text-lg'><a href="https://code.visualstudio.com/" target="_blank" rel='noreferrer' className="text-text-link">VSCode </a> 
                with <a href="https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme" target="_blank" rel='noreferrer' className="text-text-link">Palenight Theme</a> </li>
                <li className='text-text-color text-lg'><a href="https://insomnia.rest/" target="_blank" rel='noreferrer' className="text-text-link">Insomnia</a></li>
                <li className='text-text-color text-lg'><a href="https://desktop.github.com/" target="_blank" rel='noreferrer' className="text-text-link">Github Desktop</a></li>
                <li className='text-text-color text-lg'><a href="https://www.jetbrains.com/idea/" target="_blank" rel='noreferrer' className="text-text-link">IntelliJ IDEA</a></li>
                <li className='text-text-color text-lg'><a href="https://www.jetbrains.com/phpstorm/" target="_blank" rel='noreferrer' className="text-text-link">PhpStorm</a></li>
              </ul>
            </div>
            <div className='w-1/3'>
              <div className='font-semibold capitalize tracking-widest text-text-color text-2xl mt-4 mb-2'>
                productivity tools
              </div>
              <ul>
                <li className='text-text-color text-lg'><a href="https://www.notion.so/" target="_blank" rel='noreferrer' className="text-text-link">Notion</a></li>
                <li className='text-text-color text-lg'><a href="https://slack.com/" target="_blank" rel='noreferrer' className="text-text-link">Slack</a></li>
                <li className='text-text-color text-lg'><a href="https://discord.com/" target="_blank" rel='noreferrer' className="text-text-link">Discord</a></li>
                <li className='text-text-color text-lg'><a href="https://workspace.google.com/" target="_blank" rel='noreferrer' className="text-text-link">Google Workspace</a></li>
              </ul>
            </div>
            <div className='w-1/3'>
              <div className='font-semibold capitalize tracking-widest text-text-color text-2xl mt-4 mb-2'>
                other software
              </div>
              <ul>
                <li className='text-text-color text-lg'><a href="https://www.figma.com/" target="_blank" rel='noreferrer' className="text-text-link">Figma</a></li>
                <li className='text-text-color text-lg'><a href="https://www.adobe.com/uk/products/photoshop.html/" target="_blank" rel='noreferrer' className="text-text-link">Adobe Photoshop 2022</a></li>
                <li className='text-text-color text-lg'><a href="https://brave.com/" target="_blank" rel='noreferrer' className="text-text-link">Brave</a></li>
                <li className='text-text-color text-lg'><a href="https://www.adobe.com/uk/products/premiere/landpb.html/" target="_blank" rel='noreferrer' className="text-text-link">Adobe Premiere Pro</a></li>
                <li className='text-text-color text-lg'><a href="https://www.spotify.com" target="_blank" rel='noreferrer' className="text-text-link">Spotify</a></li>
              </ul>
            </div>
          </div>
        </Slide>
      </div>
      <StickyBottomNav />
      <GoToTop />
    </section>
  );
};

export default Uses;
