import { useState } from "react";

const skills = [
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 90, category: "Frontend" },
  { name: "React", level: 85, category: "Frontend" },
  { name: "Vue", level: 80, category: "Frontend" },
  { name: "JQuery", level: 85, category: "Frontend" },
  { name: "Usability Testing", level: 80, category: "Frontend" },
  { name: "Bootstrap", level: 85, category: "Frontend" },
  { name: "Tailwind", level: 85, category: "Frontend" },

  // backend
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "C#", level: 80, category: "Backend" },

  { name: "Python", level: 70, category: "Backend" },
  { name: "SQL", level: 75, category: "Backend" },
  { name: "Entity Framework", level: 70, category: "Backend" },

  { name: "REST", level: 80, category: "Backend" },

  // tools
  { name: "Git", level: 90, category: "Tools" },
  { name: "FIGMA", level: 90, category: "Tools" },
  { name: "Storybook", level: 90, category: "Tools" },

  { name: "AI Prompting", level: 90, category: "Tools" },

  { name: "Visual Studios Code", level: 80, category: "Tools" },
  { name: "Azure", level: 60, category: "Tools" },
  { name: "Windows", level: 100, category: "Tools" },
  { name: "macOS", level: 90, category: "Tools" },
  { name: "Linux", level: 80, category: "Tools" },

  //Non technical
  { name: "Communication", level: 100, category: "Soft-Skills" },
  { name: "Collaboration", level: 100, category: "Soft-Skills" },
  { name: "Problem Solving", level: 100, category: "Soft-Skills" },
  { name: "Product Thinking", level: 100, category: "Soft-Skills" },
  { name: "Documentation", level: 100, category: "Soft-Skills" },
];
const categories = ["All", "Frontend", "Backend", "Tools", "Soft-Skills"];
export const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/3">
      <div className="container mx-auto mx-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-nowrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 sm:px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills
          .filter(
            (skill) =>
              selectedCategory === "All" || skill.category === selectedCategory,
          )
          .map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div>
                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="mt-1 text-right">
                  <span className="text-xs text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};
