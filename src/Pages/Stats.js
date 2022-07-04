import Navbar from "../Components/Navbar";
import StickyBottomNav from "../Components/StickyBottomNav";
import { Slide } from "react-awesome-reveal";
import { BsDashLg } from "react-icons/bs";
import GoToTop from "../GoToTop";
import Spotify from "../Components/Spotify";

const Stats = function () {
  return (
    <section className="max-w-sm md:max-w-2xl lg:max-w-5xl mx-auto  pb-20 overflow-x-hidden">
      <Navbar />
      <h2 className="mb-12 text-3xl text-text-color  mt-20 font-semibold tracking-wider">
        <BsDashLg className="text-text-link mr-1 inline" />
        stats
      </h2>
      <Slide direction="up" triggerOnce>
        <div className="grid grid-cols-1 md:flex">
          <div className="w-1/2">
            <div className="font-semibold capitalize tracking-widest text-text-color text-2xl mt-4 mb-2">
              recently played
            </div>
            <Spotify />
          </div>
        </div>
      </Slide>
      <StickyBottomNav />
      <GoToTop />
    </section>
  );
};

export default Stats;
