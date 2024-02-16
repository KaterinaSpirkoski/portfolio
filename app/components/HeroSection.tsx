"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:px-10">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500">
              Hello, I'm{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Katerina Spirkoski",
                1000,
                "Frontend Developer",
                1000,
                "Web developer",
                1000,
                "React developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            As a skilled developer proficient in React, Next, JavaScript, HTML,
            CSS, Bootstrap, Sass and Git, I am deeply passionate about frontend
            development.
          </p>
          <div>
            <Link
              href={"/#contact"}
              className="block lg:inline px-6  py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-amber-500 to-red-500 hover:bg-slate-200 text-white"
            >
              Hire me!
            </Link>
            <button className=" bg-[#121212] hover:bg-slate-800 rounded-full px-1 py-1 w-full sm:w-fit mt-2 bg-gradient-to-r from-amber-500 to-red-500  ">
              <Link
                href={"https://katerina-cv.tiiny.site/"}
                className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"
              >
                Download CV
              </Link>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#da5950] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative ">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <Image
                src="/images/katerina.jpg"
                alt="hero image"
                className=" object-cover object-center"
                width={500}
                height={300}
                property="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
