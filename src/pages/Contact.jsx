import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import InformationContact from "../components/Information/InformationContact";
import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";

function Contact() {
  return (
    <section className="bg-[#161513] text-white ">
      <div className="container mx-auto px-14">
        <Navbar />
        <div className="py-10 md:py-16 lg:py-20 space-y-8 xl:w-[40%]">
          <InformationContact />
        </div>
        <div>
          <ContactForm />
        </div>
        <div className="py-20 md:py-28 lg:py-40  xl:[&>*:nth-child(1)]:w-[40%] space-y-10">
          <FAQ />
        </div>
        <Footer />
      </div>
    </section>
  );
}

export default Contact;
