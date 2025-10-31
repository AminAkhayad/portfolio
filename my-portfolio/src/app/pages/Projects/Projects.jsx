import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "./Projects.css";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".intro p", {
      opacity: 0,
      y: 80,
      duration: 1,
      ease: "power3.out",
    });

    tl.to(".intro", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        const el = document.querySelector(".intro");
        if (el) el.style.display = "none";
        ScrollTrigger.refresh();
      },
    });

    ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        gsap.set(".scroll-progress__bar", { scaleY: self.progress });
      },
    });
  });

  useEffect(() => {
    fetch("https://api.github.com/users/AminAkhayad/repos?sort=updated")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo) => !repo.fork);
        setRepos(filtered);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="projects-container container">
      <div className="scroll-progress" aria-hidden="true">
        <span className="scroll-progress__bar" />
      </div>

      <div id="intro" className="intro">
        <p>projects</p>
      </div>

      <section className="hero-section">
        <h1>Projects</h1>

        {loading ? (
          <p>Loading projects...</p>
        ) : (
          <div className="repo-grid">
            {repos.map((repo) => (
              <div key={repo.id} className="repo-card">
                <h2>
                  <a href={repo.html_url} target="_blank" rel="noreferrer">
                    {repo.name}
                  </a>
                </h2>
                {repo.description && <p>{repo.description}</p>}

                <div className="repo-meta">
                  {repo.language && <span>{repo.language}</span>}
                  {typeof repo.stargazers_count === "number" && (
                    <span>★ {repo.stargazers_count}</span>
                  )}
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
