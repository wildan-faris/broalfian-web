import * as React from "react";
import HeroAbout from "../components/Hero/HeroAbout";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Status from "../components/Status";
import FollowMe from "../components/FollowMe";
import AuthApi from "../helper/AuthApi";

function About() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    try {
      AuthApi.get("/information").then((response) => {
        setData(response.data.data[0]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-[#161513] text-white ">
      <div className="container mx-auto px-14">
        <Navbar />
        <div className="py-14 md:py-20">
          <HeroAbout
            name={data.name}
                      experience={data.experience}
                      projects={data.projects_done}
          />
        </div>
        <div className="py-14 md:py-20">
          <Status />
        </div>
        <div className=" py-14 md:py-20">
          <FollowMe />
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default About;
