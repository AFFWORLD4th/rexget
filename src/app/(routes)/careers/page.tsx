"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, Briefcase, MapPin, Clock } from "lucide-react";
import { getJobs, Job } from "@/src/api/careers";
import { cn } from "@/src/lib/utils";

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const data = await getJobs();
        setJobs(data?.jobs || []);
      } catch (err) {
        setError("Failed to load job openings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bgImage.webp" // Assuming this exists, or fallback
            alt="Careers at Rexgate"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
            Build your career with Dubai's premier real estate agency. We are looking for passionate individuals to help us redefine luxury living.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#1A202C] mb-6">
                Why Work With Us?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Rexgate, we believe that our people are our greatest asset. We foster a culture of excellence, innovation, and collaboration. When you join us, you become part of a family that is dedicated to your growth and success.
              </p>
              <ul className="space-y-4">
                {[
                  "Competitive Commission Structure",
                  "Comprehensive Training & Mentorship",
                  "Global Networking Opportunities",
                  "Dynamic & Inclusive Work Environment",
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-[#000000] rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
               <Image
                  src="/images/marketprofiling.webp"
                  alt="Team Culture"
                  fill
                  className="object-cover"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 bg-[#F2EEE8] px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#1A202C] mb-4">
              Current Openings
            </h2>
            <div className="w-20 h-1 bg-[#000000] mx-auto rounded-full" />
          </div>

          {loading ? (
             <div className="grid gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-40 bg-white rounded-lg animate-pulse shadow-sm" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12 text-red-600">
              {error}
            </div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              No open positions at the moment. Please check back later.
            </div>
          ) : (
            <div className="grid gap-6">
              {jobs.map((job) => (
                <div
                  key={job._id}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-[#000000]/20 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#1A202C] mb-2 group-hover:text-[#000000] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1 text-[#000000]" />
                          {job.location || "Dubai, UAE"}
                        </div>
                        <div className="flex items-center">
                           <Briefcase className="w-4 h-4 mr-1 text-[#000000]" />
                           {job.job_type ? job.job_type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Full Time"}
                        </div>
                         {/* <div className="flex items-center">
                           <Clock className="w-4 h-4 mr-1 text-[#000000]" />
                           Posted {new Date(job.created_at!).toLocaleDateString()}
                        </div> */}
                      </div>
                      <p className="text-gray-600 line-clamp-2">
                        {job.description}
                      </p>
                    </div>
                    <Link href={`/careers/${job._id}`}>
                      <Button className="bg-white text-[#000000] border border-[#000000] hover:bg-[#000000] hover:text-white transition-all duration-300 min-w-[140px]">
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
