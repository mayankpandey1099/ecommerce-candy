import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-40">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to <br /> The Hub of <br />{" "}
          <span className="text-blue-500">Entertainment</span>
        </h1>
        <h4 className="text-lg text-gray-600">
          "Explore a world of endless music and captivating movies, <br /> all
          at your fingertips."
        </h4>
        <p className="text-sm text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut felis
          vitae quam feugiat elementum.
        </p>
      </div>
    </div>
  );
};
export default About;
