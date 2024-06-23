import * as React from "react";
import HeroAbout from "../components/Hero/HeroAbout";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Status from "../components/Status";
import FollowMe from "../components/FollowMe";
import AuthApi from "../helper/AuthApi";
import UseTitle from "../helper/useTitle";

function About() {
  const [data, setData] = React.useState({
    information: null,
    education: null,
    journey: null,
  });
  React.useEffect(() => {
    UseTitle("About");
    fetchInformationData();
    fetchEducationData();
    fetchJourneyData();
  }, []);
  const fetchInformationData = async () => {
    try {
      const response = await AuthApi.get("/information")
        setData((prevState) => ({
          ...prevState,
          information: response.data.data[0],
        }));
    
    } catch (error) {
     return error.response.data
    }
  };
  const fetchEducationData = async () => {
    try {
      const response = await AuthApi.get("/education")
        setData((prevState) => ({
          ...prevState,
          education: response.data.data,
        }));
      
    } catch (error) {
      console.log(error);
    }
  };
  const fetchJourneyData = async () => {
    try {

     const response = await AuthApi.get("/experience")
        setData((prevState) => ({
          ...prevState,
          journey: response.data.data,
        }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="bg-background1 text-white">
        <section className="px-7 md:px-14 py-24 ">
          <div className="container mx-auto">
            <HeroAbout
              name={data.information?.name}
              experience={data.information?.experience}
              projects={data.information?.projects_done}
              description={data.information?.description_4}
            />
          </div>
        </section>
        <section>
          <div className="px-7 md:px-14  md:py-20">
            <Status
              educationData={data?.education}
              journeyData={data?.journey}
            />
          </div>
        </section>
        <section>
          <div className="px-7 md:px-14 py-14 md:py-20">
            <FollowMe />
          </div>
        </section>
        <section>
          <div className="px-7 md:px-14">
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
