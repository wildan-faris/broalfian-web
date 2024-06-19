import React from 'react';

function InformationContact() {
    return (
        <>
            <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Get in touch</span></h1>
            </div>
            <div>
                <p className="text-primary">Have a project in mind? Looking to partner or work together? Reach out through the form and i'll get back to you in the next 48 hours.</p>
            </div>
            <div className="flex flex-row gap-5  items-center">
                <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]"><i className="fas fa-envelope"></i></span>
                <p className="font-inter font-medium text-primary">Alfianr792@gmail.com</p>
            </div>
            <div className="flex flex-row gap-5  items-center">
                <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]"><i className="fas fa-phone"></i></span>
                <p className="font-inter font-medium text-primary">+62 895-3418-13016</p>
            </div>
        </>
    );
}

export default InformationContact;