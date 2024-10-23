import Type from "./Type.jsx";
import st3 from "../assets/st3.webp";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 py-36  tracking-wide">
      {/* Text Section */}
      <div className="lg:w-1/2 mb-8 lg:px-10 lg:mb-0">
        <div className="bg-gradient-to-r from-orange-500 via-pink-700 to-pink-800 bg-clip-text text-transparent text-4xl font-medium lg:text-nowrap">
          <Type />
        </div>
        <p className="pt-10 text-lg lg:pt-10 lg:text-3xl md:text-xl uppercase tracking-wide lg:text-nowrap">
          let's{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-700 to-pink-800 bg-clip-text text-transparent font-normal">
            {" "}
            work together
          </span>
        </p>
      </div>
      <div className="lg:w-1/2 mb-8 lg:px-10 lg:mb-0"></div>
      {/* Image Section */}
      <div className="flex justify-center lg:justify-end -mt-20 lg:mr-10 lg:shrink-0 mb-10">
        <img
          src={st3}
          alt="Descriptive Alt Text"
          className="w-full md:w-1/2 lg:w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
