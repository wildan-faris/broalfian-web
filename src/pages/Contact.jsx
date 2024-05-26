import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import InformationContact from "../components/Information/InformationContact";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import UseTitle from "../helper/useTitle";


function Contact() {
      React.useEffect(() => {
        UseTitle("Contact");
      }, []);
  return (
    <>
      <Navbar />
      <div className=" bg-[#161513] text-white ">
        <section className="container mx-auto">
          <div className="  px-7 md:px-14 py-24 space-y-8 xl:w-[40%]">
            <InformationContact />
          </div>
        </section>
        <section className="container mx-auto">
          <div className=" px-7 md:px-14 ">
            <ContactForm />
          </div>
        </section>
        <section className="container mx-auto">
          <div className="px-7 md:px-14 py-20 md:py-28 lg:py-40  xl:[&>*:nth-child(1)]:w-[40%] space-y-10">
            <FAQ />
          </div>
        </section>
        <section className="container mx-auto">
          <div className=" px-7 md:px-14 ">
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
