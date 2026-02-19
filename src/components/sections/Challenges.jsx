import React from "react";
import Button from "../ui/Button";

const withoutItems = [
  {
    title: "Manual Data Entry",
    badge: "3+ Hours wasted daily",
    desc: "Copying LinkedIn contacts to CRM manually plus losing conversation history",
  },
  {
    title: "Incomplete Data",
    badge: "60% Data Incomplete",
    desc: "LinkedIn profiles missing Email and Phones from 700M+ Database",
  },
  {
    title: "No CRM Visibility",
    badge: "Zero context available",
    desc: "Can't see existing CRM contacts when browsing LinkedIn profiles",
  },
  {
    title: "Limited Productivity",
    badge: "No smart assistance",
    desc: "Writing messages manually plus no AI assistant for reply, Invite or comments.",
  },
];

const withItems = [
  {
    title: "Complete Bi-Directional Sync",
    desc: "Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.",
    img: "/assets/icons/icon1.svg",
  },
  {
    title: "700M+ Contacts + Enrichment",
    desc: "Get verified emails and phone numbers from a vast global database.",
    img: "/assets/img/adobe-express---file--37--1.png",
  },
  {
    title: "CRM Overlay on LinkedIn",
    desc: "See full CRM insights directly on LinkedIn profiles without switching tabs.",
    img: "/assets/icons/icon3.svg",
  },
  {
    title: "AI Response + Templates + Bulk Exports",
    desc: "Save time with AI-crafted replies, pre-built templates, and one-click data exports.",
    img: "/assets/icons/icon2.svg",
  },
];

const Challenges = () => {


  return (
    <section className="py-28 bg-[#f8fafc]">
      <div className="max-w-[1320px] mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold text-[#0b0f3c] text-center mb-20 font-exo">
          Every LinkedIn Prospector faces these daily challenges
        </h2>

        {/* Cards Container */}
        <div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-16">

          {/* Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-[1px] bg-[#e5e7eb] -translate-x-1/2"></div>

          {/* WITHOUT CARD */}
          <div className="flex-1 max-w-[600px] bg-[#fff1f2] rounded-2xl shadow-xl p-10">

            <img
              src="/assets/img/without-lead.svg"
              alt=""
              className="rounded-xl mb-8"
            />

            <h3 className="text-[#ef4444] font-bold text-2xl mb-8">
              Without LeadCRM
            </h3>

            <div className="space-y-8">
              {withoutItems.map((item, i) => (
                <div key={i} className="flex gap-4 items-center">

                  <img src="/assets/icons/xmark.svg" className="w-6 h-6" alt="" />

                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h4 className="font-semibold text-lg text-[#111827]">
                        {item.title}
                      </h4>

                      <span className="bg-red-100 text-red-500 text-xs px-3 py-1 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-gray-600 text-md leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>


          {/* VS TEXT */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0b0f3c] p-3 bg-[#f9fafc] font-semibold">
            VS
          </div>


          {/* WITH CARD */}
          <div className="flex-1 max-w-[600px] bg-white rounded-2xl shadow-xl p-10">

            <img
              src="/assets/img/with-lead.svg"
              alt=""
              className="rounded-xl mb-8"
            />

            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-green-600 font-bold text-2xl">
                With LeadCRM
              </h3>

              <span className="bg-green-100 text-green-600 text-sm px-4 py-1 rounded-full">
                4+ Hours/day Saved
              </span>
            </div>

            <div className="space-y-8">
              {withItems.map((item, i) => (
                <div key={i} className="flex gap-4 items-center">

                  <img src={item.img} className="w-8" alt="" />

                  <div>
                    <h4 className="font-semibold text-lg text-[#111827] mb-1">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 text-md leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="flex flex-row justify-center  items-center mt-2 gap-20">
          <div className="relative mt-28">
            <Button className="px-10 py-4 text-lg bg-[#b3fc6a] hover:bg-[#a3ec5a]  text-black font-semibold rounded-xl shadow-lg">
              Start Using LeadCRM Now
            </Button>
            <img src="/assets/icons/arrow2.svg" className="absolute top-0 -right-24" alt="" />
          </div>
          <p className="text-2xl text-[#0b0f3c] font-bold -mt-5" style={{ fontFamily: "'Caveat', cursive" }} >
            Save 40+ hours <br /> every Month
          </p>
        </div>

      </div>
    </section>
  );
};

export default Challenges;
