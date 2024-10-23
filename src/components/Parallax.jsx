import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin } from "lucide-react";
import { ImWhatsapp } from "react-icons/im";
import { IoCall } from "react-icons/io5";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Parallax = () => {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    // GSAP animation logic for heading
    gsap.fromTo(
      ".heading",
      { opacity: 1 },
      {
        opacity: 0,
        duration: 0.1, // Adjusted for a faster transition
        scrollTrigger: {
          trigger: ".heading",
          start: "top center", // Changed to start earlier
          end: "bottom+=10 top", // Adjusted to end sooner
          onLeave: () => setShowParagraph(true), // Change to onLeave for smoother transition
        },
      }
    );

    // GSAP animation logic for paragraph
    gsap.fromTo(
      ".paragraph",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3, // Faster transition
        scrollTrigger: {
          trigger: ".paragraph",
          start: "top center", // Start when the paragraph hits center
          end: "bottom center", // Adjusted to end sooner
          onEnterBack: () => setShowParagraph(false),
        },
      }
    );
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Initially displayed text (Heading) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className={`heading text-white text-2xl lg:text-4xl md:text-4xl font-light uppercase transition-opacity duration-500 ${
              showParagraph ? "opacity-0" : "opacity-100"
            }`}
          >
            Let me{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-700 to-pink-800 bg-clip-text text-transparent font-normal">
              intro
            </span>
            duce myself
          </h1>
        </div>

        {/* Paragraph that fades in when circles fade out */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className={`paragraph text-neutral-300 justify-center lg:tracking-widest text-xs lg:text-1xl md:text-xl font-light transition-opacity duration-2000 lg:pl-32 lg:pr-32 pl-6 pr-6 tracking-wide leading-relaxed text-justify`}
          >
            I am a health professional educated at{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-700 to-pink-800 bg-clip-text text-transparent font-normal">
              Addis Ababa University
            </span>
            , leading higher education institute in Ethiopia. I have studied
            <span className="bg-gradient-to-r from-orange-500 via-pink-700 to-pink-800 bg-clip-text text-transparent font-normal">
              {" "}
              Diagnostic Medical Imaging
            </span>
            , its technological perspective, and clinical applications. With
            over{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-700 to-pink-800 bg-clip-text text-transparent font-medium">
              two years
            </span>{" "}
            of professional experience, I have worked in the ante-natal care
            unit of the maternal and reproductive health department in a private
            clinic. I have a{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-700 to-pink-800 bg-clip-text text-transparent font-medium">
              passion for maternal health equity
            </span>
            . As a{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-700 to-pink-800 bg-clip-text text-transparent font-medium">
              founder
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-700 to-pink-800 bg-clip-text text-transparent font-medium">
              project lead
            </span>{" "}
            of a maternal health promotion initiative entitled, “Tena Le Enat”,
            I have worked on advocating for ante-natal care and improving the
            care-seeking behavior of pregnant women in my community. My career
            interest involves the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-700 to-pink-800 bg-clip-text text-transparent font-medium">
              alignment of health promotion, health research, and health policy
              concerning maternal health in Ethiopia, Sub-Saharan Africa, and
              even beyond.
            </span>
          </p>
        </div>
      </div>
      <div className="last mt-28">
        <h1 className="text-3xl font-light md:text-3xl lg:text-5xl justify-center flex tracking-wide">
          Find me on
        </h1>
        <p className="text-lg font-light md:text-lg lg:text-lg justify-center flex">
          Feel free to{" "}
          <span className="bg-gradient-to-r font-normal from-orange-500 via-pink-700 to-pink-800 bg-clip-text text-transparent tracking-wide mx-2">
            connect
          </span>{" "}
          with me
        </p>
        <div className="flex space-x-5 justify-center py-2">
          <a
            href="https://linkedin.com/in/samuel-dibabu-assefa-56878924a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-600 hover:-translate-y-1 transform transition-transform duration-300"
          >
            <Linkedin />
          </a>
          <a
            href="https://wa.me/251955348005"
            target="_blank"
            rel="noopener noreferrer"
            className="pt-1 hover:text-orange-600 hover:-translate-y-1 transform transition-transform duration-300"
          >
            <ImWhatsapp />
          </a>
          <a
            href="tel:+251955348005"
            className="pt-1 hover:text-orange-600 hover:-translate-y-1 transform transition-transform duration-300"
          >
            <IoCall />
          </a>
        </div>
      </div>
    </>
  );
};

export default Parallax;
