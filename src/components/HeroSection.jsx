import { ArrowDown } from "lucide-react";
export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen relative flex flex-col items-center justify-center px-4 pt-24 md:pt-20"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Kevin
            </span>{" "}
            <span
              className="text-gradient opacity-0 animate-fade-in-delay-2"
            >
              Jostes
            </span>
          </h1>
          {/* <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Full-stack developer building responsive web applications with
            React, JavaScript, Node.js, and Python.
          </p> */}
          <div className="opacity-0 animate-fade-in-delay-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-primary/25 blur-2xl scale-105" />
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-card/70 p-2 shadow-2xl backdrop-blur-sm">
                <img
                  src="/profile-photo.jpg"
                  alt="Kevin Jostes"
                  className="h-64 w-52 md:h-80 md:w-64 object-cover object-center rounded-[1.5rem]"
                />
              </div>
            </div>
          </div>
          <div className="py-1 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button inline-flex">
              View My Work
            </a>
          </div>
          <div className="pt-4 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-forgreound mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
