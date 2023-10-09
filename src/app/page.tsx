import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";
import homepageData from "@/data/homepage.json";

export default function HomePage() {
  return (
    <main>
      <Header categories={homepageData.categories} />
      <Hero />
      {/* 1. Category Tabs - (Container) */}
      {/* 2. Hero - (Container)*/}
      {/* 3. Brand USP - (Container, Card, Column)  */}
      {/* 4. Popular Destination - (Container, Slider, Card, Title) */}
      {/* 5. Best Seller - (Container, Slider, Card, Title) */}
      {/* 6. Feedback - (Container, Title)*/}
      {/* 7. Blog List - (Container, Card, Column, Title) */}
      {/* 8. Newsletter - (Container, Title) */}
      {/* 9. App Download - (Container, Title) */}
      {/* 10. Membership - (Container, Title) */}
    </main>
  );
}
