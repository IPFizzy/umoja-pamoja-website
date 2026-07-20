import { DONATION_URL, outreachAreas, progressMilestones } from "../content";

export function Mission() {
  return (
    <>
      <section className="mission-section section-pad" id="mission">
        <div className="section-heading">
          <p className="eyebrow">The mission</p>
          <h2>Unity that becomes a visible witness.</h2>
        </div>

        <div className="mission-intro">
          <div className="mission-lead">
            <p>
              Kilwa&apos;s growing youth population is facing new social pressures,
              while the local Church has struggled to make lasting inroads after
              decades of faithful presence.
            </p>
            <p>
              Umoja Pamoja—Swahili for <em>unity together</em>—brings twelve
              denominations into their first shared outreach project. In
              partnership with Africa Inland Mission, local churches are serving
              young people and families while demonstrating their unity in Christ.
            </p>
          </div>

          <aside className="truth-card">
            <span className="card-number">12</span>
            <strong>denominations</strong>
            <p>cooperating as The Unity of Churches in Kilwa Masoko.</p>
            <span className="verified-label">
              Confirmed on the current AIM project page
            </span>
          </aside>
        </div>

        <div className="outreach-grid" aria-label="Ministry outreach areas">
          {outreachAreas.map((area) => (
            <article key={area.number}>
              <span className="outreach-icon" aria-hidden="true">
                {area.number}
              </span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="progress-story section-pad" aria-labelledby="progress-title">
        <div className="progress-layout">
          <div className="progress-copy">
            <p className="eyebrow light">The story so far</p>
            <h2 id="progress-title">From separate efforts to a shared mission.</h2>
            <p>
              The clearest progress is not a number yet. It is twelve church bodies
              crossing denominational lines to serve one community together. Verified
              results can be added here as the local team reports them.
            </p>
            <a className="button button-gold" href={DONATION_URL}>
              Partner with the mission <span aria-hidden="true">↗</span>
            </a>
          </div>

          <ol className="timeline">
            {progressMilestones.map((milestone) => (
              <li key={milestone.label}>
                <span>{milestone.label}</span>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
