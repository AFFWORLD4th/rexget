import { getAllProperties } from "@/src/api/offPlans";
import PropertyCard from "@/src/components/common/property-card";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Feature() {
  const [property, setProperty] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchproperty = async () => {
    setLoading(true);
    const query = "sort_by=total_count&sort_order=desc&page=1&size=4";
    try {
      const res = await getAllProperties(query);
      setProperty(res?.projects);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchproperty();
  }, []);

  return (
    <div className="flex flex-col items-center py-6 sm:py-8 md:py-16 px-2 sm:px-4 md:px-6 lg:px-8 container mx-auto">
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <p className="text-xs sm:text-sm uppercase tracking-wider mb-2 text-primary">
          FEATURED PROJECTS
        </p>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-mono font-thin text-[#1A202C] leading-tight mb-3 sm:mb-4 font-serif px-2">
          Luxury Unveiled, Comfort and Sophistication
        </h1>
        <p className="text-xs sm:text-sm md:text-[15px] text-gray-600 mx-auto max-w-2xl px-2">
          Discover a curated selection of Dubai's most exquisite properties,
          epitomizing luxury, elegance, and unparalleled design.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 w-full">
        {loading ? (
          // Loading skeleton
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="loading-skeleton h-64 sm:h-80 md:h-96 rounded-lg"></div>
          ))
        ) : (
          property?.map((property: any, i) => (
            <PropertyCard data={property} key={i} />
          ))
        )}
      </div>
      <div className="w-full flex justify-center items-center my-6 sm:my-8 md:my-11">
        <Link href={"/offPlans"}>
         <Button className="w-36 sm:w-40 md:w-48 h-9 sm:h-10 md:h-11 bg-[#000000] hover:bg-[#171717] text-white font-semibold py-2 px-3 sm:px-4 rounded-none transition-colors uppercase text-xs sm:text-sm md:text-base">
          View All Project
        </Button>
        </Link>
      </div>
    </div>
  );
}
