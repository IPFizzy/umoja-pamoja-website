import { Footer } from "./components/Footer";
import { Giving } from "./components/Giving";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Mission } from "./components/Mission";
import { Stories } from "./components/Stories";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Mission />
      <Stories />
      <Giving />
      <Footer />
    </main>
  );
}
