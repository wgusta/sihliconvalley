'use client';

import { useState, useCallback } from 'react';
import StarWarsCrawl from '@/components/StarWarsCrawl';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    name: 'Sihlhack',
    tagline: 'Community hackathon near the Sihl',
    description: 'A recurring hackathon rooted in the community. Local problems, local builders, local solutions.',
    url: 'https://sihlhack.ch',
  },
  {
    name: 'Luckhack',
    tagline: 'Hackathon built on luck and instinct',
    description: 'No briefs, no categories. Teams are formed by draw. Projects emerge from instinct.',
    url: 'https://luckhack.ch',
  },
  {
    name: 'Badenleg',
    tagline: 'Local civic project for Baden',
    description: 'A matchmaking platform for local energy communities in Baden. Neighbors finding neighbors.',
    url: 'https://badenleg.ch',
  },
];

export default function Home() {
  const [crawlDone, setCrawlDone] = useState(false);

  const handleCrawlComplete = useCallback(() => {
    setCrawlDone(true);
  }, []);

  return (
    <main>
      {!crawlDone && <StarWarsCrawl onComplete={handleCrawlComplete} />}

      <section
        className="projects-section"
        style={{
          opacity: crawlDone ? 1 : 0,
          transition: 'opacity 1.2s ease',
          pointerEvents: crawlDone ? 'auto' : 'none',
        }}
      >
        <h2 className="projects-heading">The Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
