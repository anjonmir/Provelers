import Hero from "../../components/landing/Hero";
import FeatureSection from "../../components/landing/FeatureSection";
import PopularDestinations from "../../components/landing/PopularDestinations";
import Testimonials from "../../components/landing/Testimonials";
import CTASection from "../../components/landing/CTASection";

function LandingPage() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <PopularDestinations />
      <Testimonials />
      <CTASection />
    </>
  );
}

export default LandingPage;