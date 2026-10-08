import { Loader } from './components/Loader';
import { Smoke } from './components/Smoke';
import { useReveal } from './hooks/useReveal';
import { About } from './sections/About';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { SocialLinks } from './sections/SocialLinks';
import { Support } from './sections/Support';

export default function App() {
  useReveal();

  return (
    <>
      <div className="backdrop" aria-hidden="true">
        <Smoke className="backdrop__smoke" />
      </div>
      <Loader />
      <Header />
      <main>
        <Hero />
        <About />
        <SocialLinks />
        <Support />
      </main>
      <Footer />
    </>
  );
}
