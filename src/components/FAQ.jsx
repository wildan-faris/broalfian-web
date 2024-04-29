import React from 'react';

import { Accordion } from "flowbite-react";

function FAQ(props) {
  return (
    <>
      <div className="space-y-5 ">
        <div>

          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-raleway font-bold tracking-wide leading-tight">Frequently Asked<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]"> Questions</span></h1>
        </div>

      </div>
      <div>
        <Accordion collapseAll className="space-y-5 text-white">
          <Accordion.Panel>
          <Accordion.Title className="text-white font-raleway text-sm md:text-lg xl:text-xl font-bold">What is Flowbite?</Accordion.Title>
            <Accordion.Content className="text-xs md:text-lg lg:text-xl">
              <p className="mb-2 text-white ">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                dropdowns, modals, navbars, and more.
              </p>
              <p className="text-white ">
                Check out this guide to learn how to&nbsp;
                <a
                  href="https://flowbite.com/docs/getting-started/introduction/"
                  className="text-cyan-600 hover:underline dark:text-cyan-500"
                >
                  get started&nbsp;
                </a>
                and start developing websites even faster with components on top of Tailwind CSS.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
          <Accordion.Title className="text-white font-raleway text-sm md:text-lg xl:text-xl font-bold">What is Flowbite?</Accordion.Title>
            <Accordion.Content className="text-xs md:text-lg lg:text-xl">
              <p className="mb-2 text-white ">
                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                has a design equivalent in our Figma file.
              </p>
              <p className="text-white ">
                Check out the
                <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                  Figma design system
                </a>
                based on the utility classes from Tailwind CSS and components from Flowbite.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
          <Accordion.Title className="text-white font-raleway text-sm md:text-lg xl:text-xl font-bold">What is Flowbite?</Accordion.Title>
            <Accordion.Content className="text-xs md:text-lg lg:text-xl">
              <p className="mb-2 text-white ">
                The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                components, whereas Tailwind UI offers sections of pages.
              </p>
              <p className="mb-2 text-white ">
                However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                technical reason stopping you from using the best of two worlds.
              </p>
              <p className="mb-2 text-white ">Learn more about these technologies:</p>
              <ul className="list-disc pl-5 text-white ">
                <li>
                  <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                    Flowbite Pro
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindui.com/"
                    rel="nofollow"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Tailwind UI
                  </a>
                </li>
              </ul>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </>
  );
}

export default FAQ;