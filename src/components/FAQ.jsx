import React, { useState } from 'react';

// Accordion Item Component
function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 w-full">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium text-left text-primary text-lg"
          onClick={onClick}
        >
          <span className="">{question}</span>
          <svg
            className={`w-3 h-3 ${isOpen ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {isOpen && (
        <div className="py-2 text-gray-500 dark:text-gray-400">
          <p className="text-secondary">{answer}</p>
        </div>
      )}
    </div>
  );
}

// FAQ Component
function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const AccordionQuestions = [
    {
      question: 'Apa saja keahlian dan keterampilan Anda?',
      answer:
        'Saya memiliki keahlian dalam membuat sebuah website dengan responsive.',
    },
    {
      question: 'Proyek apa saja yang pernah Anda kerjakan?',
      answer:
        'Saya telah mengerjakan berbagai proyek, mulai dari task management system dan portofolio',
    },
    {
      question: 'Bagaimana cara menghubungi Anda untuk kolaborasi atau proyek?',
      answer:
        'Anda dapat menghubungi saya melalui formulir kontak di halaman Contact atau mengirim email langsung ke Alfianr792@gmail.com. Saya akan merespons secepat mungkin untuk membahas kemungkinan kerja sama atau proyek.',
    },
    {
      question: 'Apakah Anda bersedia bekerja secara freelance atau full-time?',
      answer:
        'Saya terbuka untuk berbagai jenis kerja, baik itu freelance, kontrak, atau full-time, tergantung pada proyek dan kesempatan yang ditawarkan. Silakan hubungi saya untuk mendiskusikan detail lebih lanjut.',
    },
    {
      question: 'Di mana saya bisa menemukan portofolio lengkap Anda?',
      answer:
        'Anda dapat melihat portofolio lengkap saya di halaman home di website ini. Di sana, saya menampilkan proyek-proyek terbaru saya beserta deskripsi dan hasil yang telah dicapai.',
    },
  ];

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-raleway font-bold tracking-wide leading-tight text-primary">
          Frequently Asked
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
            {' '}
            Questions
          </span>
        </h1>
      </div>
      {AccordionQuestions.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}

export default FAQ;
