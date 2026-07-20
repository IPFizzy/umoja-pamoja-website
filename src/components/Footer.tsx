import { DONATION_URL } from "../content";

export function Footer() {
  return (
    <footer>
      <a className="wordmark footer-wordmark" href="#top">
        Umoja Pamoja
      </a>
      <p>
        A website concept for the Umoja Pamoja Youth Outreach project in Kilwa
        Masoko, Tanzania.
      </p>
      <div>
        <a href="#mission">Mission</a>
        <a href="#impact">Impact</a>
        <a href="#stories">Stories</a>
        <a href={DONATION_URL}>Official donation page ↗</a>
      </div>
    </footer>
  );
}
