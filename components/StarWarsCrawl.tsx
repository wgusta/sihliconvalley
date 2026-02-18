'use client';

import { useEffect, useState } from 'react';

interface StarWarsCrawlProps {
  onComplete: () => void;
}

export default function StarWarsCrawl({ onComplete }: StarWarsCrawlProps) {
  const [introVisible, setIntroVisible] = useState(false);
  const [crawlStarted, setCrawlStarted] = useState(false);

  useEffect(() => {
    const introTimer = setTimeout(() => setIntroVisible(true), 300);
    const crawlTimer = setTimeout(() => setCrawlStarted(true), 1200);
    const doneTimer = setTimeout(() => onComplete(), 13500);
    return () => {
      clearTimeout(introTimer);
      clearTimeout(crawlTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div className="crawl-container">
      {/* Intro line */}
      <p
        className="intro-line"
        style={{ opacity: introVisible ? 1 : 0 }}
      >
        A LONG TIME AGO IN A VALLEY MUCH CLOSER TO HOME...
      </p>

      {/* Crawl */}
      <div className="crawl-perspective">
        <div
          className="crawl-text"
          style={{ animationPlayState: crawlStarted ? 'running' : 'paused' }}
        >
          <h1 className="crawl-title">SIHLICONVALLEY</h1>

          <p>
            Silicon Valley gave us infinite scroll and finite attention.
            It gave us &ldquo;connecting the world&rdquo; while building walls between people.
            It gave us disruption without asking what was worth keeping.
          </p>

          <p>
            We are not here to disrupt.<br />
            We are here to build.<br />
            Slowly. Together. Near the Sihl.
          </p>

          <p>
            Not venture-backed. Community-grown.<br />
            Not scale-first. Human-first.<br />
            Not move fast and break things.<br />
            Build slow. Fix things. Stay.
          </p>

          <p>
            These are the projects.<br />
            Local. Open. Accountable.
          </p>
        </div>
      </div>
    </div>
  );
}
