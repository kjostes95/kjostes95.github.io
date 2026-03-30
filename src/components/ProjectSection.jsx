import { useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Movie Favorite App",
    description:
      "An application that calls a MovieDb API to get movie results and allows the user to search and favorite them.",
    image: "/projects/MovieApp.png",
    tags: ["React", "JavaScript", "REST API", "Tailwind", "GitHub Pagess"],
    demoUrl: "https://kevinjjostes.com/Movie-Favorite-App/",
    repoUrl: "https://github.com/kjostes95/Movie-Favorite-App",
  },
  {
    id: 2,
    title: "Cover Letter Generator Chrome Extension",
    description:
      "A Chrome extension that helps you create tailored cover letters for job applications by leveraging your resume and the job listing details.",
    image: "/projects/CoverLetterExtension.svg",
    tags: [
      "TypeScript",
      "JavaScript",
      "REST API",
      "OpenAi",
      "Chrome Extension APIs",
    ],
    // demoUrl: "https://kevinjjostes.com/Movie-Favorite-App/",
    repoUrl: "https://github.com/kjostes95/Cover-Letter-Extension",
  },
  {
    id: 3,
    title: "Seranova Design System",
    description:
      "A design system of resuable Vue components to be easily used and maintained. Company's webpage was built with Hubspot. Includes AI chatbot integration.",
    images: [
      "/projects/sera/Sera App 2 copy.png",
      "/projects/sera/Sera App 3 copy.png",
      "/projects/sera/Sera image 4 copy.png",
    ],
    tags: ["Vue", "Tailwind", "Storybook", "Figma", "Hubspot"],
    demoUrl: "https://sera.tech/",
    repoUrl: "#",
  },
  {
    id: 4,
    title: "Car Capital Deals",
    description:
      "Full-spectrum solution for independent and franchise dealers ready to drive more sales and build smarter portfolios. Flexible, data-driven financing with automated decisions and tools that help dealers win more approvals without sacrificing control.",
    image: "/projects/Car Capital.jpg",
    tags: [".NET", "SQL", "Azure", "JavaScript", "JQuery", "Bootstrap", "MVC"],
    demoUrl: "#",
    repoUrl: "#",
  },
];

const ProjectCard = ({ project }) => {
  const hasDemo = Boolean(project.demoUrl && project.demoUrl !== "#");
  const hasRepo = Boolean(project.repoUrl && project.repoUrl !== "#");
  const imageSources = project.images?.length
    ? project.images
    : [project.image];
  const hasMultipleImages = imageSources.length > 1;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const goToPrevImage = () => {
    setActiveImageIndex((prev) =>
      prev === 0 ? imageSources.length - 1 : prev - 1,
    );
  };

  const goToNextImage = () => {
    setActiveImageIndex((prev) =>
      prev === imageSources.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={imageSources[activeImageIndex]}
          alt={`${project.title} screenshot ${activeImageIndex + 1}`}
        />

        {hasMultipleImages ? (
          <>
            <button
              type="button"
              onClick={goToPrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-1.5 text-white backdrop-blur-sm hover:bg-black/65 transition-colors cursor-pointer"
              aria-label={`Previous image for ${project.title}`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={goToNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/45 p-1.5 text-white backdrop-blur-sm hover:bg-black/65 transition-colors cursor-pointer"
              aria-label={`Next image for ${project.title}`}
            >
              <ChevronRight size={16} />
            </button>

            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {imageSources.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`h-1.5 w-1.5 rounded-full transition-colors cursor-pointer ${
                    index === activeImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`View image ${index + 1} for ${project.title}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>

      <div className="p-6 flex flex-1 flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-primary/10 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        <div className="mt-auto flex justify-between items-center">
          <div className="flex space-x-3">
            {hasDemo ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                aria-label={`Open demo for ${project.title}`}
              >
                <ExternalLink size={20} />
              </a>
            ) : null}
            {hasRepo ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                aria-label={`Open repository for ${project.title}`}
              >
                <Github size={20} />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Feel free to check them out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex item-center mx-auto gap-2 cursor-pointer"
            href="https://github.com"
            target="_blank"
          >
            Check my github <ArrowRight className="mt-1" size={16}></ArrowRight>
          </a>
        </div>
      </div>
    </section>
  );
};
