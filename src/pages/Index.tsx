import Header from "@/components/Header";
import Hero from "@/components/Hero";
import DynastyTimeline from "@/components/DynastyTimeline";
import MonumentGallery from "@/components/MonumentGallery";
import PerformingArts from "@/components/PerformingArts";
import FestivalTimeline from "@/components/FestivalTimeline";
import HeritageQuiz from "@/components/HeritageQuiz";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <DynastyTimeline />
      <MonumentGallery />
      <PerformingArts />
      <FestivalTimeline />
      <HeritageQuiz />
      <Footer />
    </div>
  );
};

export default Index;
