import { getAllProperties } from "@/src/api/offPlans";
import PropertyCard from "@/src/components/common/property-card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Property() {
  const [property, setProperty] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  

  const fetchproperty = async () => {
    setLoading(true);
    setError(null);
    const query = `sort_by=total_count&sort_order=desc&page=1&size=6&type=off_plan`;
    try {
      const res = await getAllProperties(query);
      setProperty(res?.projects || []);
    } catch (error) {
      setError("Failed to load properties. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchproperty();
  }, []);

  const handleFavorite = (item: any) => {
    console.log("Added to favorites:", item);
    // Add your favorite logic here
  };

  return (
    <div className="min-h-screen bg-[#F2EEE8] text-[#1A202C]">
      <main className="container mx-auto py-8 sm:py-12 px-2 sm:px-4 md:px-6 lg:px-8">
        <section className="text-center mb-8 sm:mb-12">
          <h2 className="text-black text-xs sm:text-sm font-light tracking-widest mb-2 uppercase font-serif">
            FEATURED PROPERTIES
          </h2>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono mb-3 sm:mb-4 text-[#1A202C] tracking-wide font-serif px-2">
            Handpicked Luxury Listings in Dubai
          </h1>
          <p className="max-w-4xl mx-auto text-xs sm:text-sm font-light text-gray-700 leading-relaxed mb-3 sm:mb-4 px-2">
            Step into a realm of unparalleled sophistication with our featured
            properties. Explore these exclusive gems and envision your next
            luxurious retreat with Rexgate.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {loading ? (
            // Loading skeleton
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="loading-skeleton h-64 sm:h-80 md:h-96 rounded-lg"></div>
            ))
          ) : error ? (
            // Error state
            <div className="col-span-full text-center py-12">
              <p className="text-red-600 mb-4">{error}</p>
              <Button 
                onClick={fetchproperty}
                className="bg-[#000000] hover:bg-[#171717] text-white"
              >
                Try Again
              </Button>
            </div>
          ) : property?.length === 0 ? (
            // No properties state
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No featured properties available at the moment.</p>
            </div>
          ) : (
            property?.slice(0, 6).map((obj: any, i) => (
              <PropertyCard
                data={obj}
                key={i}
              />
            ))
          )}
        </section>

        <div className="text-center">
         <Link href={"/buy"}>
           <Button className="bg-[#000000] hover:bg-[#171717] text-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-light tracking-wider rounded-none shadow-md uppercase">
            VIEW ALL PROPERTIES
          </Button>
         </Link>
        </div>
      </main>
    </div>
  );
}
