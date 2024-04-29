import React from 'react';

function ContactForm(props) {
    return (
        <>
        <form method="POST" action="">
        <div className="space-y-4">

            <div className="flex flex-col gap-1">

                <label htmlFor="NameInput" className="font-inter font-medium text-base"> Your Name</label>
                <input id="NameInput" className="py-4 px-5 rounded-md bg-[#1C1C22] text-white border-0" type="text" placeholder="Enter your name" />
            </div>
            <div className="flex flex-col gap-1">

                <label htmlFor="NameInput" className="font-inter font-medium text-base"> Your E-mail</label>
                <input id="NameInput" className="py-4 px-5 rounded-md bg-[#1C1C22] text-white border-0" type="text" placeholder="Enter your e-mail" />
            </div>
            <div className="flex flex-col gap-1">

                <label htmlFor="NameInput" className="font-inter font-medium text-base"> Tell me a bit more what you are looking for?</label>
                <textarea id="NameInput" className="py-4 px-5 rounded-md bg-[#1C1C22] text-white border-[1px]" type="text" rows="4" cols="50" placeholder=""  ></textarea>
            </div>
        <button className="bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D] rounded-full md:px-7 text-xl font-medium md:py-3 px-4 py-1">SUBMIT NOW</button>
        </div>
    </form>
        </>
    );
}

export default ContactForm;