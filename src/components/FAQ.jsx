import React from 'react';
import { Accordion } from "flowbite-react";
const AccordionQuestions = [
  {
    question: "Apa saja keahlian dan keterampilan Anda?",
    answer:
      "Saya memiliki keahlian dalam [sebutkan keahlian utama, misalnya pengembangan web, desain grafis, analisis data, dsb.]. Saya juga mahir menggunakan berbagai alat dan teknologi seperti [sebutkan alat/teknologi, misalnya HTML, CSS, JavaScript, Photoshop, Python, dsb.].",
  },
  {
    question: "Proyek apa saja yang pernah Anda kerjakan?",
    answer:
      "Saya telah mengerjakan berbagai proyek, mulai dari [sebutkan jenis proyek, misalnya situs web e-commerce, aplikasi mobile, desain logo, dsb.]. Anda dapat melihat detail dan hasil dari beberapa proyek saya di halaman [tautan ke halaman proyek] di website ini.",
  },
  {
    question: "Bagaimana cara menghubungi Anda untuk kolaborasi atau proyek?",
    answer:
      "Anda dapat menghubungi saya melalui formulir kontak di halaman [tautan ke halaman kontak] atau mengirim email langsung ke [alamat email Anda]. Saya akan merespons secepat mungkin untuk membahas kemungkinan kerja sama atau proyek.",
  },
  {
    question: "Apakah Anda bersedia bekerja secara freelance atau full-time?",
    answer:
      "Saya terbuka untuk berbagai jenis kerja, baik itu freelance, kontrak, atau full-time, tergantung pada proyek dan kesempatan yang ditawarkan. Silakan hubungi saya untuk mendiskusikan detail lebih lanjut.",
  },
  {
    question: "Di mana saya bisa menemukan portofolio lengkap Anda?",
    answer:
      "Anda dapat melihat portofolio lengkap saya di halaman [tautan ke halaman portofolio] di website ini. Di sana, saya menampilkan proyek-proyek terbaru saya beserta deskripsi dan hasil yang telah dicapai.",
  },
];


function FAQ(props) {
  return (
    <>
      <div className="space-y-5 ">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-raleway font-bold tracking-wide leading-tight">
            Frequently Asked
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
             {" "} Questions
            </span>
          </h1>
        </div>
      </div>
      <div>
        {AccordionQuestions.map((item, index) => (
          <Accordion
            collapseAll
            className="space-y-5 text-white border-0"
          >   
            <Accordion.Panel>
              <Accordion.Title className="text-white font-raleway text-sm ">
                {item.question}
              </Accordion.Title>
              <Accordion.Content className="text-xs md:text-lg lg:text-xl">
                {
                  item.answer
              }
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        ))}
      
      </div>
    </>
  );
}

export default FAQ;