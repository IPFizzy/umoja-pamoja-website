import { DONATION_URL } from "../content";

export function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Kilwa Masoko, Tanzania</p>
          <h1>
            One church.
            <br />
            One witness.
            <br />
            <em>A new generation reached.</em>
          </h1>
          <span className="brush-rule" aria-hidden="true" />
          <p className="hero-lede">
            Twelve denominations are serving together to bring gospel hope
            through youth outreach, practical training, women&apos;s ministry,
            and lasting local discipleship.
          </p>

          <div className="hero-actions">
            <a className="button button-olive" href={DONATION_URL}>
              <span className="circle-arrow" aria-hidden="true">→</span>
              Help reach the next generation
            </a>
            <a className="text-link" href="#mission">
              See the mission <span aria-hidden="true">→</span>
            </a>
          </div>

          <p className="scripture-ref">John 17:23 · United in witness</p>
        </div>

        <div
          className="hero-visual"
          aria-label="Placeholder for a verified mission team photograph"
        >
          <div className="arch-placeholder">
            <div className="arch-field arch-field-one" />
            <div className="arch-field arch-field-two" />
            <div className="arch-field arch-field-three" />
            <p>
              <strong>Mission photo</strong>
              <span>Replace with a permission-cleared team image</span>
            </p>
          </div>
          <p className="photo-note">Your team&apos;s story belongs here</p>
        </div>
      </section>

      <section className="impact-band" id="impact" aria-labelledby="impact-heading">
        <div className="sample-disclosure" id="impact-heading">
          Sample impact data — replace with verified mission figures
        </div>
        <div className="impact-grid">
          <div className="impact-stat">
            <strong>53</strong>
            <span>communities engaged</span>
          </div>
          <div className="impact-track" aria-hidden="true">
            <span className="impact-fill" />
            <i />
          </div>
          <div className="impact-stat impact-remaining">
            <strong>47</strong>
            <span>still to reach</span>
          </div>
        </div>
      </section>
    </>
  );
}
