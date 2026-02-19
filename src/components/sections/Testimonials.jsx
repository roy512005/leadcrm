import React, { useState } from "react";
import { cn } from "../../utils/cn";

const testimonials = [
  {
    name: "David Fincher",
    role: "On Capterra",
    avatar: "https://i.pravatar.cc/80?img=11",
    quote:
      "Reliable Data Sync I've only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
  },
  {
    name: "Lillian Williams",
    role: "On Capterra",
    avatar: "https://i.pravatar.cc/80?img=32",
    quote:
      "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient.",
  },
  {
    name: "Michael",
    role: "On Capterra",
    avatar: "https://i.pravatar.cc/80?img=15",
    quote:
      "Reliable Data Sync I've only had to refresh the extension a couple of times. Highly recommend it for reliable lead management!",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Rotate items so the current index is always first
  const visibleTestimonials = [
    ...testimonials.slice(index),
    ...testimonials.slice(0, index),
  ];

  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-10 max-w-[1440px] relative6">

        {/* header */}
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl font-semibold text-[#0b0f3c]">
            What people are saying about LeadCRM
          </h2>

          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <img src="/assets/icons/rightarrow.svg" className="w-4 rotate-180" alt="" aria-hidden="true" />
            </button>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-[#0b0f3c] text-white flex items-center justify-center hover:bg-[#1a205c] transition-colors"
            >
              <img src="/assets/icons/rightarrow.svg" className="w-4 invert" alt="" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {visibleTestimonials.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className={cn(
                "bg-[#f5eef7] rounded-2xl p-8 shadow-sm flex flex-col min-h-[320px] transition-all duration-300",
                // Show only the first item on mobile (< md), show all on desktop (>= md)
                i !== 0 ? "hidden md:flex" : "flex"
              )}
            >
              {/* quote */}
              <p className="text-gray-700 leading-relaxed font-medium mb-8">
                “{t.quote}”
              </p>

              {/* stars */}
              <ul className="flex items-center h-[18px] gap-2">
                <div className="flex items-center justify-center w-[30px] h-[30px] p-[2px] bg-white rounded-[6.67px] shadow-[0px_4px_34px_#acacac1a]">
                  <img src="/assets/icons/capterra-logo.svg" className='w-full' alt="Capterra" />
                </div>
                {"★★★★★".split("").map((_, idx) => (
                  <li key={idx} className="w-[19px]"><img src="/assets/icons/star1.svg" alt="Star" className=" w-full h-full" /></li>
                ))}
              </ul>

              {/* divider */}
              <div className="border-t mt-16 pt-4" />

              {/* profile */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <div className="font-semibold text-[#0b0f3c] text-lg">
                    {t.name}
                  </div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
