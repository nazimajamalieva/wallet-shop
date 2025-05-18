import AboutUs from "./_Components/AboutUs";
import Banner from "./_Components/Banner";
import Companys from "./_Components/Companys";
import Creative from "./_Components/Creative";
import Supports from "./_Components/Supports";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <Supports />
      </div>
      <AboutUs />
      <div className="container mx-auto">
        <Creative />
        <Companys />
      </div>
    </>
  );
}
