import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Hi there !",
          "I am Samuel Dibabu.",
          "Diagnostic Medical Sonographer",
          "Maternal Health Advocate",
          "Volunteer",
        ],
        autoStart: true,
        loop: true,
        delay: 70,
        deleteSpeed: 70,
      }}
    />
  );
}

export default Type;