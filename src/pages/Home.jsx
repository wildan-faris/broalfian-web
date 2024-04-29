import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LookProject from "../components/LookProject";
import Infomation from "../components/Information";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <section className="bg-[#161513] text-white ">
        <div className="container mx-auto px-14">
          <div className=" h-screen flex flex-col">
            <Navbar />
            <Hero />
          </div>
        </div>
      </section>
      <section className="bg-[#161513]  text-white ">
        <div className="container mx-auto  px-14">

        <LookProject />
        </div>
      </section>
      <section className="bg-[#1C1C22] text-white ">
        <div className="container mx-auto  px-14">
        <Infomation />

        </div>
     
      </section>
      <section className="bg-[#1C1C22] text-white ">
        <div className="container mx-auto  px-14">
        <Footer />

        </div>
     
      </section>


    </>
  );
}

export default Home;
