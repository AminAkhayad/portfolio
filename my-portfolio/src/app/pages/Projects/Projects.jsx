import { useEffect, useMemo, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import repoData from "../../../app/components/data/repo.json";
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
    }).to(".intro", {
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
    const mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {
  const st = ScrollTrigger.create({
    start: 0,
    end: () => document.documentElement.scrollHeight - window.innerHeight,
    onUpdate: (self) => gsap.set(".scroll-progress__bar", { scaleX: self.progress, scaleY: 1 }),
    invalidateOnRefresh: true,
  });
  return () => st.kill();
});

mm.add("(min-width: 769px)", () => {
  const st = ScrollTrigger.create({
    start: 0,
    end: () => document.documentElement.scrollHeight - window.innerHeight,
    onUpdate: (self) => gsap.set(".scroll-progress__bar", { scaleY: self.progress, scaleX: 1 }),
    invalidateOnRefresh: true,
  });
  return () => st.kill();
});
  });

  const assetMap = useMemo(() => {
    const mods = import.meta.glob(
      "../../../assets/**/*.{png,jpg,jpeg,webp,svg,mp4,webm}",
      { eager: true }
    );
    return Object.fromEntries(
      Object.entries(mods).map(([k, v]) => [k, v.default])
    );
  }, []);

  const customImgById = useMemo(() => {
    const m = new Map();
    repoData.forEach((item) => {
      const resolvedImg = assetMap[item.img] || item.img;
      const resolvedVideo = assetMap[item.demo] || item.demo;
      m.set(item.id, { img: resolvedImg, video: resolvedVideo });
    });
    return m;
  }, [assetMap]);

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
            {repos.map((repo) => {
              const media = customImgById.get(repo.id) || {};
              const og = repo.open_graph_image_url;
              const generated = `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`;
              const preview = media.img || og || generated;
              const href = repo.homepage || repo.html_url;

              return (
                <article
                  key={repo.id}
                  className="repo-card"
                  onMouseEnter={(e) => {
                    const vid = e.currentTarget.querySelector(".repo-video");
                    if (vid) {
                      gsap.to(vid, {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out",
                        onStart: () => vid.play(),
                      });
                    }
                  }}
                  onMouseLeave={(e) => {
                    const vid = e.currentTarget.querySelector(".repo-video");
                    if (vid) {
                      gsap.to(vid, {
                        opacity: 0,
                        duration: 0.4,
                        ease: "power2.inOut",
                        onComplete: () => {
                          vid.pause();
                          vid.currentTime = 0;
                        },
                      });
                    }
                  }}
                >
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="repo-preview-link"
                  >
                    <div className="media-wrapper">
                      <img
                        className="repo-preview"
                        src={preview}
                        alt={`${repo.name} preview`}
                        loading="lazy"
                      />
                      {media.video && (
                        <video
                          className="repo-video"
                          src={media.video}
                          muted
                          playsInline
                          preload="metadata"
                          style={{ opacity: 0 }}
                        />
                      )}
                    </div>
                  </a>

                  <h2 className="repo-title">
                    <a href={href} target="_blank" rel="noreferrer">
                      {repo.name}
                    </a>
                  </h2>

                  <p className="repo-desc">{repo.description}</p>
                  <div className="repo-meta">
                    <span>{repo.language}</span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
