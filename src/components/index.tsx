import BestSeller from "./best-seller/best-seller";
import Hero from "./hero/hero";
import PopularDestination from "./popular-destination/popular-destination";
import Reviews from "./reviews/reviews";
import Usp from "./usp/usp";

interface ISections {
  [key: string]: ({}) => JSX.Element;
}

export const homepageSections: ISections = {
  hero: Hero,
  usp: Usp,
  "popular-destinations": PopularDestination,
  "best-seller": BestSeller,
  reviews: Reviews,
};
