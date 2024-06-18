import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import LookProject from "../components/LookProject";
import Information from "../components/Information/Information";
import Footer from "../components/Footer";
import AuthApi from "../helper/AuthApi";
import UseTitle from "../helper/useTitle";
import SkeletonHero from "../components/Skeleton/SkeletonHero";
import SkeletonProject from "../components/Skeleton/SkeletonProject";
import imgtemplateproject from "../assets/img/examimg.jpg";
import ToggleBtn from "../components/Button/toggleBtn";
import InfiniteStack from "../components/InfiniteStack";

function Home() {
  const [data, setData] = React.useState({
    information: '',
    projects: '',
  });
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchInformationData = async () => {
    try {
      const response = await AuthApi.get(
        "/information"
      );
      console.log(response);
        setData((prevState) => ({
          ...prevState,
          information: response.data.data[0],
        }));
      
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    UseTitle("Home");
    fetchInformationData();
 
  }, []);
  return (
    <>
      <Navbar />
      <div className=" bg-background1  ">
        <div className=" container mx-auto">
          <section className="">
            <div className=" h-screen flex flex-col">
              <div className=" flex flex-col flex-grow space-y-3 md:space-y-4 items-center justify-center text-center px-7 md:px-14">
                {isLoading ? (
                  <SkeletonHero />
                ) : (
                  <Hero
                    name={data.information?.name}
                    position={data.information?.position}
                    country={data.information?.country}
                    description={data.information?.description_1}
                    img={data.information?.avatar}
                  />
                )}
              </div>
            </div>
          </section>
          <section>
            <InfiniteStack />
          </section>
          <section className="bg-background2">
            <div className=" py-10 px-7 md:px-14">
              <Information
                name={data.information?.name}
                position={data.information?.position}
                done={data.information?.projects_done}
                years={data.information?.experience}
                satisfication={data.information?.satisfication}
                description={data.information?.description_2}
                subDescription={data.information?.description_3}
              />
            </div>
          </section>

          <section
            className="bg-background1"
            id="projects"
          >
            <div className=" py-10 px-7 md:px-14 -z-10">
              {isLoading ? (
                <SkeletonProject />
              ) : (
                <LookProject
                  info={data.projects?.data}
                  img={imgtemplateproject}
                />
              )}
            </div>
          </section>
          <section className="container mx-auto">
            <div className=" px-7 md:px-14 ">
              <Footer />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
