import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto mx-w-5xl"></div>
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span>
          About <span className="text-primary">Me</span>
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h3 className="font-semibold text-2xl">
            Full-Stack Developer Focused on Practical, User-Centered Products
          </h3>
          <p className="text-muted-foreground">
            I am a software developer who enjoys building responsive web
            applications, polished user interfaces, and tools that solve real
            problems. My work is centered on modern JavaScript development with
            different frameworks like React and Vue. I also have experience with
            backend development using C# and SQL, and I am always eager to learn
            new technologies and best practices.
          </p>
          <p className="text-muted-foreground">
            I like working across the stack, from translating ideas into clean
            interfaces to handling APIs, deployment workflows, and developer
            tooling. I bring a hands-on approach to shipping features, improving
            usability, and learning quickly in environments especially in where
            teamwork, product thinking, adaptability, and execution all play a
            key role.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in-delay-4">
            <a href="#contact" className="cosmic-button">
              Get In Touch
            </a>
            <a
              href="/Jostes-Developer.docx"
              download="Kevin-J-Jostes-Resume.docx"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary"></Code>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Frontend Development</h4>
                <p className="text-muted-foreground">
                  Building responsive interfaces with modern frameworks,
                  JavaScript, and CSS while focusing on usability,
                  accessibility, and performance across desktop and mobile
                  experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary"></User>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  Collaboration & Product Thinking
                </h4>
                <p className="text-muted-foreground">
                  Turning requirements into clear, usable features by combining
                  problem solving, communication, and an iterative development
                  process that keeps the user experience at the center.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary"></Briefcase>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  Backend & Developer Tools
                </h4>
                <p className="text-muted-foreground">
                  Building backend functionality with C#, SQL, Node.js, and
                  Python while using Git, and Azure to support APIs, automation,
                  and maintainable workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
