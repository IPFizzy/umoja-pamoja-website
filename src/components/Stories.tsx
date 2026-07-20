import { stories } from "../content";

export function Stories() {
  return (
    <section className="stories-section section-pad" id="stories">
      <div className="section-heading stories-heading">
        <div>
          <p className="eyebrow">Stories from Kilwa</p>
          <h2>Show the people, not merely the need.</h2>
        </div>
        <p>
          These cards are reserved for permission-cleared photographs and
          first-person accounts from local leaders, participants, and the mission
          team.
        </p>
      </div>

      <div className="story-grid">
        {stories.map((story) => (
          <article
            className={`story-card${story.wide ? " story-card-wide" : ""}`}
            key={story.type}
          >
            <div
              className={`story-placeholder ${story.className}`}
              role="img"
              aria-label={`Placeholder for ${story.imageLabel.toLowerCase()}`}
            >
              <span>{story.imageLabel}</span>
            </div>
            <div className="story-copy">
              <p className="story-type">{story.type}</p>
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
