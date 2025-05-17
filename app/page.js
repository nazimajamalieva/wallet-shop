import Banner from "./_Components/Banner";
import Companys from "./_Components/Companys";
import Supports from "./_Components/Supports";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <Companys />
        <Supports />
      </div>
    </>
  );
}
