import { DONATION_URL, prayerPoints } from "../content";

export function Giving() {
  return (
    <>
      <section
        className="accountability-section section-pad"
        aria-labelledby="accountability-title"
      >
        <div className="accountability-panel">
          <div>
            <p className="eyebrow light">Give with clarity</p>
            <h2 id="accountability-title">
              Connect every gift to a faithful next step.
            </h2>
          </div>
          <div className="accountability-copy">
            <p>
              Keep this page focused on the story and send donations through AIM&apos;s
              established secure giving page. Before publishing, the organization
              should add a current funding goal, reporting date, and a clear breakdown
              of how gifts support each ministry activity.
            </p>
            <ul>
              <li><span>01</span> Add a verified campaign goal and amount raised.</li>
              <li><span>02</span> Explain what common gift amounts make possible.</li>
              <li><span>03</span> Publish dated updates from accountable local leaders.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pray-section" id="pray">
        <div className="prayer-card">
          <p className="eyebrow">Pray with the churches of Kilwa</p>
          <blockquote>
            “That they may become perfectly one, so that the world may know.”
          </blockquote>
          <cite>John 17:23</cite>
          <div className="prayer-points">
            {prayerPoints.map((point) => (
              <p key={point.title}>
                <strong>{point.title}</strong>
                <span>{point.description}</span>
              </p>
            ))}
          </div>
        </div>

        <div className="final-cta">
          <p className="eyebrow light">Your part in the story</p>
          <h2>Pray. Give. Help the local Church go farther together.</h2>
          <p>
            Your generosity supports AIM&apos;s partnership with the Umoja Pamoja
            Youth Outreach project.
          </p>
          <a className="button button-gold" href={DONATION_URL}>
            Give through AIM <span aria-hidden="true">↗</span>
          </a>
          <small>
            Donations continue on Africa Inland Mission&apos;s secure project page.
          </small>
        </div>
      </section>
    </>
  );
}
