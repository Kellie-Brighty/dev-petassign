import MainLayout from "./layouts/MainLayout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SeamlessExperience from "./components/SeamlessExperience";
import Services from "./components/Services";
import Community from "./components/Community";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <MainLayout>
      <Header />
      <Hero />
      <SeamlessExperience />
      <Services />
      <Community />
      <FAQ />
      <CTA />
      <Footer />
    </MainLayout>
  );
}

export default App;
