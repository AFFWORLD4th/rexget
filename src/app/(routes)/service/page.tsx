import React from "react";

const servicesData = [
  {
    id: 1,
    title: "Market Insights & Analysis",
    description:
      "Gain unparalleled access to Dubai's luxury real estate market intelligence. Our comprehensive market analysis covers prime freehold locations, exclusive property types including luxury villas, penthouses, and townhouses, plus real-time market trends focusing on capital appreciation and rental yields.",
    additionalInfo:
      "Our expert team provides strategic insights on high-growth investment zones, upcoming mega-developments, and infrastructure projects that will drive future property values. We analyze market dynamics, supply-demand patterns, and emerging opportunities to ensure your investment decisions are backed by data-driven intelligence.",
    imageUrl: "/images/third.webp",
  },
  {
    id: 2,
    title: "Premium Investment Consultation",
    description:
      "Receive personalized investment strategies tailored to your financial goals and risk profile. Our seasoned consultants provide expert guidance on Dubai's dynamic real estate landscape, analyzing market trends, ROI projections, and helping you build a diversified luxury property portfolio.",
    additionalInfo:
      "We offer comprehensive investment analysis covering emerging luxury neighborhoods, exclusive off-plan developments, and established premium communities. Our services include feasibility studies, risk assessment, and portfolio optimization strategies designed to maximize your returns while minimizing exposure.",
    imageUrl: "/images/marketprofiling.webp",
  },
  {
    id: 3,
    title: "Luxury Property Management",
    description:
      "Experience white-glove property management services designed for discerning property owners. Our comprehensive management solutions cover every aspect of your luxury real estate portfolio, from premium tenant screening to coordinated maintenance and concierge-level service delivery.",
    additionalInfo:
      "Our premium management services include 24/7 concierge support, regular property inspections, direct communication channels, and personalized attention to every detail. We handle everything from marketing and tenant relations to maintenance coordination and financial reporting, ensuring your property performs at its peak potential.",
    imageUrl: "/images/analysis.webp",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 text-sm md:text-base">
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-light mb-6 text-gray-800 font-serif">
            Premium <span className="text-[#000000] font-normal">Services</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            Discover our comprehensive suite of luxury real estate services designed to elevate your property experience in Dubai's most exclusive markets.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className={`flex flex-col lg:flex-row items-center mb-20 ${
                  isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                  <div className={`${isEven ? "lg:pl-8" : "lg:pr-8"}`}>
                    <div className="relative overflow-hidden rounded-none shadow-none">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full  sm:h-[600px] object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2">
                  <div className={`${isEven ? "lg:pl-8" : "lg:pr-8"}`}>
                    <h2 className="text-2xl sm:text-3xl font-light text-gray-800 mb-6 font-serif">
                      {service.title}
                    </h2>

                    <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed font-sans">
                      {service.description}
                    </p>

                    <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed font-sans">
                      {service.additionalInfo}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

