import { DONATION_URL } from "../content";

const navigation = [
  { label: "Mission", href: "#mission" },
  { label: "Impact", href: "#impact" },
  { label: "Stories", href: "#stories" },
  { label: "Pray", href: "#pray" },
];

export function Header() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Umoja Pamoja home">
          Umoja Pamoja
        </a>

        <nav className="main-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button-gold header-give" href={DONATION_URL}>
          Give now <span aria-hidden="true">↗</span>
        </a>
      </header>
      <div className="woven-rule" aria-hidden="true" />
    </>
  );
}
