export const metadata = {
  title: "Autobotwa Store – Trending Fashion & Lifestyle",
  description:
    "Shop trending collections, new arrivals, and premium products at Autobotwa Store.",
};
import Hero from "@/Components/Home/hero";
import FeaturedCategories from "@/Components/Home/FeaturedCategories";
import TrendingProducts from "@/Components/Home/TrendingProducts";
import WhyChooseUs from "@/Components/Home/WhyChooseUs";
import Testimonials from "@/Components/Home/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <TrendingProducts />
      <WhyChooseUs />
      <Testimonials />
    </main>
  );
}
