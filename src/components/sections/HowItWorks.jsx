import React from "react";
import Button from "../ui/Button";

const steps = [
  {
    num: "1",
    title: "Install the Extension",
    desc: "Add LeadCRM to Chrome and connect your CRM in 2 minutes.",
    img: "/assets/img/works1.svg",
  },
  {
    num: "2",
    title: "Browse LinkedIn",
    desc: "Use LinkedIn normally, our extension auto-captures data.",
    img: "/assets/img/works2.svg",
  },
  {
    num: "3",
    title: "Get Enriched Data",
    desc: "Enrich profiles with verified emails and phones.",
    img: "/assets/img/works3.svg",
  },
  {
    num: "4",
    title: "Sync to CRM Instantly",
    desc: "Prospect data syncs instantly with AI insights.",
    img: "/assets/img/works4.svg",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-[#eef2fb] relative overflow-hidden">

      {/* subtle grid background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#cfd6ea 1px, transparent 1px), linear-gradient(90deg, #cfd6ea 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto px-4 lg:px-10 max-w-[1440px] relative">

        {/* header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0b0f3c] mb-2">
            How it Works
          </h2>

          <p className="text-gray-600 text-lg">
            From setup to success in <span className="font-semibold">4 simple steps</span>
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">

          {steps.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-xl flex flex-col justify-between min-h-[420px] hover:-translate-y-1 transition relative"
            >

              <div className="text-center p-4 pb-3">

                {/* big number */}
                <div className="text-[110px] leading-[90px] font-bold text-[#2d95bc] opacity-40 mb-2" style={{ fontFamily: "'Sriracha', cursive" }}>
                  {s.num}
                </div>

                <h3 className="text-2xl font-semibold text-[#0b0f3c] mb-2">
                  {s.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {s.desc}
                </p>

              </div>

              {/* bottom mock image */}
              <img
                src={s.img}
                alt={s.title}
                className="rounded-xl shadow-lg border"
              />

              <img src="/assets/icons/arrow1.svg" className="absolute -z-1 -right-[70px] top-0" alt="" aria-hidden="true" />
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <Button className="px-10 py-4 text-lg bg-[#b3fc6a] hover:bg-[#a3ec5a] text-black font-semibold rounded-xl shadow-lg">
            Try LeadCRM Now
            <img src="/assets/icons/rightarrow.svg" className="w-4 ml-3" alt="" />
          </Button>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
