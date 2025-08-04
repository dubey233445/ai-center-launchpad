import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AILoader from "@/components/AILoader";
import Header from "@/components/Header";
import MainSection from "@/components/MainSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <AILoader onComplete={handleLoadingComplete} />
        ) : (
          <div>
            <Header />
            <MainSection />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
