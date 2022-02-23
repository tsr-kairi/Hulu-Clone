import Header from "./Header";
import Section from "./Section";

const Hero = () => {
  return (
    <div className="bg-black md:h-screen via-black from-black w-full bg-cover bg-no-repeat bg-[url(/images/hullu-bg-01.jpg)]">
      <Header />
      <Section />
    </div>
  );
};

export default Hero;
