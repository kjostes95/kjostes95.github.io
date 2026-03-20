import { useState } from "react";
import { Linkedin, Mail, MapIcon, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formEndpoint) {
      setStatus({
        type: "error",
        message:
          "Form endpoint is missing. Add VITE_FORMSPREE_ENDPOINT to your environment before submitting.",
      });
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setIsSubmitting(true);
      setStatus({ type: "idle", message: "" });

      const response = await fetch(formEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get <span className="text-primary">In touch</span>
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 mx-auto max-w-2xl">
          Have a question or want to work together? Fill out the form below and
          I'll get back to you as soon as possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8 order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary"></Mail>
                </div>
                <div>
                  <h4>Email</h4>
                  <a
                    href="mailto:Kjostes95@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Kjostes95@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary"></Phone>
                </div>
                <div>
                  <h4>Phone</h4>
                  <a
                    href="tel:+19727959370"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1(972)-795-9370
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapIcon className="h-6 w-6 text-primary"></MapIcon>
                </div>
                <div>
                  <h4>Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    DFW, Texas
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/kevinjjostes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin> </Linkedin>
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs order-1 md:order-2">
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Kevin Jostes..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="John@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              {status.message ? (
                <p
                  className={cn(
                    "text-sm rounded-md border px-4 py-3 text-left",
                    status.type === "success"
                      ? "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400"
                      : "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400",
                  )}
                >
                  {status.message}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center gap-2 justify-center",
                  isSubmitting && "cursor-not-allowed opacity-70",
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send></Send>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
