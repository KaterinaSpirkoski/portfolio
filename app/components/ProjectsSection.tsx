import ProjectCard, { projectsData } from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div id="projects" className=" px-2 md:px-10">
      <h2 className="text-center text-4xl font-bold text-white mt-20 pb-20">
        My Projects
      </h2>
      <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectsSection;
