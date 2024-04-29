import React from 'react';


function Status() {
    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <h1 className="text-5xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Education</span></h1>
                <ul className="divide-y-2 divide-gray-600 w-8/12 ">
                    <li className="py-5">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-xl md:text-3xl font-semibold font-raleway">MTsN 2 Balikpapan</h2>
                            <div className="flex flex-col md:flex-row  md:justify-between md:pe-11">
                                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">Lorem ipsum dolor sit.</p>
                                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">- 2019-2022</p>
                            </div>
                        </div>
                    </li>
                    <li className="py-5">
                        <div className="flex flex-col gap-1">
                        <h2 className="text-xl md:text-3xl font-semibold font-raleway">SMK Negeri 2 Balikpapan</h2>
                            <div className="flex flex-col md:flex-row  md:justify-between md:pe-11">
                                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">Rekayasa Perangkat Lunak</p>
                                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">- 2022-2025 </p>
                            </div>
                        </div>
                    </li>
                    <li className="py-5">
                        <div className="flex flex-col gap-1">
                        <h2 className="text-xl md:text-3xl font-semibold font-raleway">Institut Teknologi Bandung</h2>
                            <div className="flex flex-col md:flex-row  md:justify-between md:pe-11">
                                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">Teknik Informatika</p>
                                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">- 2025-2029</p>
                            </div>
                        </div>
                    </li>
                  
                </ul>
            </div>
            <div className="space-y-4">
                <h1 className="text-5xl font-bold"><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Work Experience</span></h1>
                <ul className="divide-y-2 divide-gray-600 w-8/12 ">
                    <li className="py-5">
                        <div className="flex flex-col gap-1">
                        <h2 className="text-xl md:text-3xl font-semibold font-raleway">Google Inc.</h2>
                            <div className="flex flex-col md:flex-row  md:justify-between md:pe-11">
                                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">Software Engineering</p>
                                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">- 2030-2032</p>
                            </div>
                        </div>
                    </li>
                    <li className="py-5">
                        <div className="flex flex-col gap-1">
                        <h2 className="text-xl md:text-3xl font-semibold font-raleway">Twitter Inc.</h2>
                            <div className="flex flex-col md:flex-row  md:justify-between md:pe-11">
                                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">Visual Designer</p>
                                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">- 2033-2036 </p>
                            </div>
                        </div>
                    </li>
                    <li className="py-5">
                        <div className="flex flex-col gap-1">
                        <h2 className="text-xl md:text-3xl font-semibold font-raleway">Apple Inc.</h2>
                            <div className="flex flex-col md:flex-row  md:justify-between md:pe-11">
                                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">UI Designer</p>
                                <p className="font-raleway text-sm tracking-wide text-gray-400 font-medium">- 2036-2045</p>
                            </div>
                        </div>
                    </li>
                  
                </ul>
            </div>
        </div>
    );
}

export default Status;