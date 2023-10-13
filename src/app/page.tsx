import Container from "@/components/container/container";
import Hero from "@/components/hero/hero";
import PopularDestination from "@/components/popular-destination/popular-destination";
import ServiceTab from "@/components/service-tab/service-tab";
import Spacer from "@/components/spacer/spacer";
import Title from "@/components/title/title";
import Usp from "@/components/usp/usp";
import content from "@/content/home.content.json";

export default function HomePage() {
  return (
    <main>
      {/* 2. Hero - (Container)*/}
      <Hero content={content.hero} />
      {/* 3. Brand USP - (Container, Card, Column)  */}
      <Spacer />
      <Usp content={content.usp} />
      <Spacer />
      <PopularDestination content={content["popular-destinations"]} />
      <Spacer />
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
