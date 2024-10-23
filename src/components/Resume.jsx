import React from "react";
import resume1 from "../assets/resume1.png";
import resume2 from "../assets/resume2.png";
import resume3 from "../assets/resume3.png";
import resume4 from "../assets/resume4.png";
import resume5 from "../assets/resume5.png";
import resume from "../assets/resume.pdf";

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 px-5">
      {/* Top Download Button */}
      <a
        href={resume}
        download="SamuelDibabu_CV.pdf"
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md mb-10 hover:shadow-lg transition"
      >
        Download CV
      </a>

      {/* Display Resume */}
      <img className="rounded-tl-md rounded-tr-md" src={resume1} alt="resume" />
      <img src={resume2} alt="resume" />
      <img src={resume3} alt="resume" />
      <img src={resume4} alt="resume" />
      <img className="rounded-bl-md rounded-br-md" src={resume5} alt="resume" />
      {/* Bottom Download Button */}
      <a
        href={resume}
        download="SamuelDibabu_CV.pdf"
        className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-md mt-10 hover:shadow-lg transition"
      >
        Download CV
      </a>
    </div>
  );
};

export default Resume;
