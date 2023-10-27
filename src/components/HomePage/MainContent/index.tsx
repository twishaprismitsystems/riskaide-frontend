import AboutCompany from "./AboutCompany/AboutCompany";
import Blogs from "./Blogs/Blogs";
import Hero from "./Hero/Hero";
import Insurance from "./Insurance/Insurance";
import OurClients from "./OurClients/OurClients";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";

const MainContent = () => {
  
  return (
    <main>
      <Hero />
      <Insurance />
      <AboutCompany />
      <Service />
      <Blogs />
      <Testimonial />
      <OurClients />
    </main>
  );
};

export default MainContent;
