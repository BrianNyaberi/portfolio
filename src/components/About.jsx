import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          As a full-stack developer, I design and create websites and applications for various platforms. 
          Tasks include:
          <ul>Develop and maintain web services and interfaces</ul>
          <ul>Contribute to front-end and back-end development processes</ul>
          <ul>Build new product features or APIs</ul>
          <ul>Perform tests, troubleshoot software, and fix bugs</ul>
          <ul>Collaborate with other departments on projects and sprints</ul>
        </p>

        <br />

        <p className="text-xl">
        In a world where full-stack development is large and competitive, I take pride in learning and using 
        the many new and evolving technologies that continually push the limits of what a full-stack developer 
        can create. Staying on top of cutting-edge technology and techniques in the full-stack development 
        field is one of the many exciting aspects of working in this role.

        </p>
      </div>
    </div>
  );
};

export default About;
