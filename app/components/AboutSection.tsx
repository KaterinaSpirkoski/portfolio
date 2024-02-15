"use client";
import React, { useTransition, useState, ReactNode } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

interface TabData {
  title: string;
  id: string;
  content: ReactNode;
}

const TAB_DATA: TabData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="list-disc pl-2">
        <span className="mr-3"> Next.js</span>
        <span className="mr-3"> React</span>
        <span className="mr-3"> Git</span>
        <span className="mr-3"> SASS</span>
        <span className="mr-3"> JavaScript</span>
        <span className="mr-3"> Bootstrap</span>
        <span className="mr-3"> Css</span>
        <span className="mr-3"> HTML</span>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="list-disc pl-2">
        <p>Frontend Developer</p>
        <p>Brainster Academy, Skopje</p>
      </div>
    ),
  },
];

const AboutSection: React.FC = () => {
  const [tab, setTab] = useState<string>("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mt-24" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16 xl:px-12">
        <Image
          src="/images/about.png"
          width={500}
          height={600}
          alt="about image"
          className="rounded-3xl object-fill  w-auto h-auto"
        />

        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About</h2>
          <p className="text-base">
            As a skilled developer proficient in React, Next.js, JavaScript,
            HTML, CSS, Bootstrap, Sass, and Git, I am deeply passionate about
            frontend development. With a solid foundation from Brainster
            Academy, I specialize in creating dynamic, responsive and
            functionals web applications. My dedication to ongoing learning
            motivates me to stay abreast of the latest industry trends, ensuring
            that I consistently deliver outstanding results.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-2 text-white">
            {TAB_DATA && TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
