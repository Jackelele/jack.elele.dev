import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import StickyBottomNav from '../Components/StickyBottomNav';
import GoToTop from '../GoToTop';
const Home = function () {
  return (
    <section>
      <Navbar />
      <Hero />
      <StickyBottomNav />
      <GoToTop />
    </section>
  );
};

export default Home;
