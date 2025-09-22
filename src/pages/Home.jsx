import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      {/* SEO */}
      <Helmet>
        <title>Chrinmart Electricals & Electronics</title>
        <meta
          name="description"
          content="Shop electronics and electrical appliances at Chrinmart. Affordable prices, trusted quality, and fast delivery."
        />
      </Helmet>

      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
       <Testimonials />
    </div>
  );
};

export default Home;
