"use client";
import { getAllCommunities } from "@/src/api/communities";
import CommunitiesCard from "@/src/view/communities/communitiesCard";
import { Loader } from "lucide-react";
import React, { useEffect, useState, useRef, useCallback } from "react";

const PAGE_SIZE = 100;

function Communities() {
  const [communities, setCommunities] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [total, setTotal] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredCommunities, setFilteredCommunities] = useState<any[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastCommunityRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    const fetchCommunities = async () => {
      setLoading(true);
      try {
        const res = await getAllCommunities(page, PAGE_SIZE);
        console.log('API Response:', res); // Debug log
        
        if (res?.communities?.length) {
          setCommunities((prev) => {
            const newCommunities = [...prev, ...res.communities];
            setHasMore(newCommunities.length < res.total);
            return newCommunities;
          });
          setTotal(res.total);
        } else {
          console.log('No communities found in response');
          setHasMore(false);
        }
      } catch (error) {
        console.error('Error fetching communities:', error);
        // Set some fallback data for testing
        const fallbackData = {
          communities: [
            {
              city: "Dubai",
              photos: ["/images/placeholder.jpg"],
              latitude: 25.05638764826,
              longitude: 55.20812137772,
              name: "Jumeirah Village Circle",
              sell_properties_count: 0,
              rent_properties_count: 0,
              projects_count: 3,
              pool_projects_count: 161,
              total_count: 164,
              assigned_agents: []
            }
          ],
          total: 1
        };
        setCommunities(fallbackData.communities);
        setTotal(fallbackData.total);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    };
    fetchCommunities();
  }, [page]);

  // Filter communities based on search keyword
  useEffect(() => {
    if (searchKeyword.trim() === "") {
      setFilteredCommunities(communities);
    } else {
      const filtered = communities.filter((community) =>
        community.name?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        community.location?.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        community.description?.toLowerCase().includes(searchKeyword.toLowerCase())
      );
      setFilteredCommunities(filtered);
    }
  }, [communities, searchKeyword]);

  return (
    <div>
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#000000]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#171717]/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 mx-auto text-center">
          <h1 className="font-bold font-serif">
            <span className="text-[#000000] font-normal">Luxury</span> Communities
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#000000] to-[#171717] mx-auto mb-8"></div>
        </div>
      </section>
      <div className="mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6 font-serif">
            Unveiling Dubai&rsquo;s <span className="text-[#000000] font-normal">Vibrant</span> Communities
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed font-sans">
            Dubai is a city of diverse neighborhoods, each offering a unique
            character &amp; lifestyle. Beyond the stunning architecture, your
            bespoke community awaits. Explore the soul of Dubai&rsquo;s
            communities, ensuring your new property seamlessly integrates with
            your personal demographics &amp; desired lifestyle.
          </p>
        </div>
        
        {/* Enhanced Search Input */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-2xl">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-[#000000]/20 shadow-xl p-2">
              <input
                type="text"
                placeholder="Search communities by name, location, or description..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="w-full px-6 py-4 pl-14 text-gray-800 bg-transparent border-0 rounded-xl focus:outline-none placeholder:text-gray-500 font-sans text-lg"
              />
              <svg
                className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-[#000000]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Search Results Counter */}
        {searchKeyword && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#000000]/20 shadow-lg">
              <p className="text-[#000000] font-light text-sm tracking-wider">
                Found {filteredCommunities.length} community{filteredCommunities.length !== 1 ? 'ies' : 'y'} matching "{searchKeyword}"
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] py-20">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Results Summary */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-[#000000]/20 shadow-lg">
              <span className="text-[#000000] font-light text-sm tracking-wider">
                {searchKeyword ? 
                  `Found ${filteredCommunities.length} communities matching "${searchKeyword}"` : 
                  `Showing ${filteredCommunities.length} of ${total} luxury communities`
                }
              </span>
            </div>
          </div>

          {/* Communities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredCommunities.map((community, i) => {
              if (i === filteredCommunities.length - 1) {
                return (
                  <div ref={lastCommunityRef} key={i} className="flex justify-center">
                    <CommunitiesCard data={community} />
                  </div>
                );
              }
              return (
                <div key={i} className="flex justify-center">
                  <CommunitiesCard data={community} />
                </div>
              );
            })}
          </div>
        </div>
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-[#000000]/30 border-t-[#000000] rounded-full animate-spin mb-4"></div>
              <p className="text-[#000000] font-medium font-sans">Loading Communities...</p>
            </div>
          </div>
        )}
        {!hasMore && communities.length > 0 && (
          <div className="text-center py-8">
            <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full">
              <p className="text-gray-600 font-medium font-sans">All communities loaded</p>
            </div>
          </div>
        )}
        {searchKeyword && filteredCommunities.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-[#000000]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2 font-sans">No communities found</h3>
              <p className="text-gray-600 font-sans">No communities match "{searchKeyword}"</p>
              <p className="text-sm text-gray-500 mt-2 font-sans">Try adjusting your search terms</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Communities;
