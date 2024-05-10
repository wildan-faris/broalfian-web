import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import LookProject from "../components/LookProject";
import Infomation from "../components/Information/Information";
import Footer from "../components/Footer";
import AuthApi from "../helper/AuthApi";

function Home() {
  const [data, setData] = React.useState([]);
  const [dataProjects, setDataProjects] = React.useState([]);
  
  React.useEffect(() => {
    fetchInformationData();
    fetchProjectsData(1);
  }, []);
  const fetchInformationData = () => {
    try {
      AuthApi.get("/information").then((response) => {
        setData(response.data.data[0]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const fetchProjectsData = (id) => {
     try {
      AuthApi.get(`/projects/${id}`).then((response) => {
        setDataProjects(response.data.data);
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <section className="bg-[#161513] text-white ">
        <div className="container mx-auto px-14">
          <div className=" h-screen flex flex-col">
            <Navbar />

            <Hero
              name={data.name}
              position={data.position}
              country={data.country}
            />
          </div>
        </div>
      </section>
      <section className="bg-[#161513]  text-white ">
        <div className="container mx-auto  px-14">
          <LookProject data={dataProjects} />
        </div>
      </section>
      <section className="bg-[#1C1C22] text-white ">
        <div className="container mx-auto  px-14">
          <Infomation
            name={data.name}
            position={data.posisiton}
            done={data.projects_done}
            years={data.impression}
            satisfication={data.clients_satisfication}
          />
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
