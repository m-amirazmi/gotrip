import Hero from "@/components/hero/hero";
import pageContent from "@/content/page.home.json";
import { homepageSections as sections } from "@/components/";

export default function HomePage() {
  console.log("trigger here?");
  return (
    <main>
      {pageContent.sections.map((i) => {
        const Component = sections[i];
        if (!Component) return null;
        return <Component key={i} />;
      })}
      {/* 1. Service Tabs - (Container) */}
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
