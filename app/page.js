import Banner from "./_Components/Banner";
import Companys from "./_Components/Companys";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container mx-auto">
        <Companys />
      </div>
    </>
  );
}
