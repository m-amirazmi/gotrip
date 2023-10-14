import BestSeller from "@/components/best-seller/best-seller";
import Hero from "@/components/hero/hero";
import TitleSlider from "@/components/title-slider/title-slider";
import Spacer from "@/components/spacer/spacer";
import Usp from "@/components/usp/usp";
import content from "@/content/home.content.json";

export default function HomePage() {
  return (
    <main>
      <Hero content={content.hero} />
      <Spacer />
      <Usp content={content.usp} />
      <Spacer />
      <TitleSlider content={content["popular-destinations"]} column={5} />
      <Spacer />
      {/* <BestSeller /> */}
      {/* <Spacer /> */}
      <TitleSlider content={content["articles"]} aspectRatio="square" />
      <Spacer />
      {/* 8. Newsletter - (Container, Title) */}
      {/* 9. App Download - (Container, Title) */}
      {/* 10. Membership - (Container, Title) */}
    </main>
  );
}
