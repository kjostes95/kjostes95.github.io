import { ArrowDown } from "lucide-react";
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Kevin
            </span>{" "}
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              Jostes
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I farted so hard that I created a new star in the universe. I'm a
            passionate fart professional with a knack for turning flatulence
            into cosmic phenomena. When I'm not busy making the world a gassier
            place, I enjoy coding, creating, and exploring the wonders of the
            universe. Welcome to my portfolio, where creativity and humor
            collide!
          </p>
          <div className="py-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button inline-flex">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-forgreound mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
