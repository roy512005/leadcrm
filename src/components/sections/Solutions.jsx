import React, { useState } from "react";

const tabs = [
  { id: "Enrichment", label: "CRM Data Enrichment", icon: "/assets/img/data-integration-3d-icon-download-in-png-blend-fbx-gltf-file-for.png" },
  { id: "Sync", label: "CRM Data Sync", icon: "/assets/img/sync-3d-icon-download-in-png-blend-fbx-gltf-file-formats--refres.png" },
  { id: "Export", label: "Bulk Export & Enrichment", icon: "/assets/img/c1759173c55f9fd9853731addc07da79-icon-1-1.png" },
  { id: "AI", label: "AI Productivity", icon: "/assets/img/beautiful-traditional-a-human-brain-connected-to-a-network-of-wi-1.png" },
];

const Solutions = () => {
  const [active, setActive] = useState("Enrichment");

  return (
    <section className="py-24 bg-[#f8f9fc]">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-[#11184a] mb-2">
            Complete LinkedIn Sales Solutions
          </h2>
          <p className="text-gray-500 text-lg">
            Everything you need for professional Linkedin prospecting
          </p>
        </div>


        {/* ================= TABS ================= */}
        <div className="flex flex-wrap justify-between border-b mb-12 gap-y-4">
          {tabs.map(t => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex items-center gap-3 pb-4 border-b-4 transition
              ${active === t.id
                  ? "border-[#11184a] text-[#11184a]"
                  : "border-transparent text-gray-500 hover:text-[#11184a]"
                }`}
            >
              <img src={t.icon} className="w-7 h-7 object-contain" />
              <span className="text-lg font-medium">{t.label}</span>
            </button>
          ))}
        </div>


        {/* ================= TITLE LINE ================= */}
        <div className="text-2xl text-gray-600 mb-8">
          It's hard to find the accurate contact data for every prospects by{" "}
          <span className="bg-[#ffd9d2] text-[#ff4c51] px-3 py-1 rounded-full text-sm font-semibold">
            Incomplete Data
          </span>
        </div>


        {/* ================= TWO BIG CARDS ================= */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT CARD */}
          <div className="bg-[#eef1f8] rounded-2xl p-8 shadow-sm">

            <h3 className="text-xl font-semibold mb-3">
              Here is how <span className="text-gray-500">LeadCRM</span> tackles that situation.
            </h3>

            <button className="text-green-700 font-semibold mb-6 flex items-center gap-2">
              Try LeadCRM Data Enrichment →
            </button>


            <div className="grid md:grid-cols-1 gap-6">
              <img src="/assets/img/Solutions1.svg" className="w-full" alt="Data Enrichment Process" />

            </div>

          </div>


          {/* RIGHT CARD */}
          <div className="bg-[#eef1f8] rounded-2xl p-8 shadow-sm">

            <h3 className="text-xl mb-6">
              If it does not works for you ! try our{" "}
              <span className="text-green-700 font-semibold">
                Advanced Waterfall Enrichment →
              </span>
            </h3>

            <img src="/assets/img/Solutions2.svg" className="w-full" alt="Waterfall Enrichment Process" />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Solutions;
