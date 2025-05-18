import AboutUs from "./_Components/AboutUs";
import Banner from "./_Components/Banner";
import Companys from "./_Components/Companys";
import Creative from "./_Components/Creative";
import Supports from "./_Components/Supports";
import Testimonials from "./_Components/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <Supports />

      <AboutUs />

      <Creative />
      <Companys />
      <Testimonials />
    </>
  );
}
