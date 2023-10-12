import Hero from "@/components/hero/hero";
import ServiceTab from "@/components/service-tab/service-tab";
import content from "@/content/home.content.json";

export default function HomePage() {
  return (
    <main>
      {/* 2. Hero - (Container)*/}
      <Hero content={content.hero} />
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
