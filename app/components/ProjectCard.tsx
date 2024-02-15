import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const projectsData = [
  {
    id: 1,
    title: "Street Artist",
    description:
      "The StreetArtist Mobile Application revolutionizes the experience for street artists, providing them with a comprehensive toolset to manage their income tracking and showcase their artistic masterpieces.",
    image: "/images/streetartist.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KaterinaSpirkoski/Projects/tree/Project-02",
    previewUrl:
      "https://project-02-git-main-katerinaspirkoskis-projects.vercel.app/#landing-page",
  },
  {
    id: 2,
    title: "Brainster Labs",
    description:
      "The Brainster Lab Responsive Webpage is a dynamic platform designed to showcase projects developed by students enrolled in Brainster's Marketing, Front End, and Design Academies. Using a combination of JavaScript for filtering,validation and pagination",
    image: "/images/brainsterlabs.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KaterinaSpirkoski/Projects/tree/Project-03",
    previewUrl: "https://project-labs-seven.vercel.app/",
  },
  {
    id: 3,
    title: "Music DB",
    description:
      "Music DB is an artist-focused application built using React. Upon clicking on each artist, users are seamlessly navigated to a detailed page showcasing the artist's biography along with a comprehensive list of their albums.",
    image: "/images/music-db.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KaterinaSpirkoski/Projects/tree/MusicApp",
    previewUrl: "https://music-app-gamma-khaki.vercel.app/",
  },
  {
    id: 4,
    title: "BIkes",
    description:
      "In this project, I've leveraged React and Typescript to enable dynamic filtering and searching functionality for bikes based on gender or brand name. Explore and narrow down your bike options effortlessly with these intuitive features.",
    image: "/images/bikes.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/KaterinaSpirkoski/Projects/tree/Bikes",
    previewUrl: "https://bikes-katerinaspirkoskis-projects.vercel.app/",
  },
];

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: any) => {
  return (
    <div>
      <div
        className="h-72 md:h-96 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overly items-center justify-center apsolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duaration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 h-64 mt-2">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
