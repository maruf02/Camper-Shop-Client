import BannerSection from "./BannerSection/BannerSection";
import BestSellingPage from "./BestSellingPage/BestSellingPage";
import ContactUs from "./ContactUs/ContactUs";
import FaqSection from "./FaqSection/FaqSection";
import FeaturedProductPage from "./FeaturedProductPage/FeaturedProductPage";
import ProductCategory from "./ProductCategory/ProductCategory";
import TestimonialSection from "./TestimonialSection/TestimonialSection";

const HomePage = () => {
  return (
    <div className="w-full h-full ">
      <BannerSection />
      <BestSellingPage />
      <ProductCategory />
      <FeaturedProductPage />
      <FaqSection />
      <TestimonialSection />
      <ContactUs />
    </div>
  );
};

export default HomePage;
