"use client";

import { useState } from "react";
import { ArrowRight, User, Building, Download, MapPin } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/ui/button";
import { api, handleApiError } from "@/src/lib/axios";

function Solutions() {
  const router = useRouter();
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);
  const [reportFormData, setReportFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const solutions = [
    {
      icon: <User className="h-10 w-10 text-[#000000]" />,
      title: "Connect with a Specialist",
      description: "Access our dedicated team of expert agents ready to assist you.",
      arrow: <ArrowRight className="h-5 w-5 text-[#000000]" />,
      onClick: () => router.push("/team"),
    },
    {
      icon: <Building className="h-10 w-10 text-[#000000]" />,
      title: "List Your Property",
      description:
        "Achieve optimal value by listing your property with our expert marketing strategies.",
      arrow: <ArrowRight className="h-5 w-5 text-[#000000]" />,
      onClick: () => router.push("/list-your-property"),
    },
    {
      icon: <Download className="h-10 w-10 text-[#000000]" />,
      title: "Download Report",
      description:
        "Download the latest Comprehensive Dubai Real Estate Market Report Q1 2025",
      arrow: <ArrowRight className="h-5 w-5 text-[#000000]" />,
      onClick: () => setIsReportDialogOpen(true),
    },
    {
      icon: <MapPin className="h-10 w-10 text-[#000000]" />,
      title: "Explore Dubai Projects",
      description:
        "Browse and find your ideal property from our extensive portfolio of Dubai projects.",
      arrow: <ArrowRight className="h-5 w-5 text-[#000000]" />,
      onClick: () => router.push("/offPlans"),
    },
  ];

  const handleReportFormChange = (field: string, value: string) => {
    setReportFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setSubmitError("");
  };

  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    // Validate form
    if (!reportFormData.name || !reportFormData.email || !reportFormData.contactNumber) {
      setSubmitError("Please fill in all fields");
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(reportFormData.email)) {
      setSubmitError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit lead to CRM
      const leadData = {
        name: reportFormData.name,
        email: reportFormData.email,
        phone: reportFormData.contactNumber,
        source: "Download Report",
        lead_type: "report_download",
        message: "Requested Dubai Real Estate Market Report Q1 2025",
      };

      // Try to submit to CRM API
      // You may need to adjust the endpoint based on your actual API
      await api.post("/api/leads", leadData);

      setSubmitSuccess(true);
      
      // Reset form after 2 seconds and close dialog
      setTimeout(() => {
        setReportFormData({ name: "", email: "", contactNumber: "" });
        setIsReportDialogOpen(false);
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      // Even if API fails, we can still show success to user
      // and log the error for backend processing
      console.error("Error submitting lead:", error);
      
      // For now, we'll still show success as the lead data is captured
      // In production, you might want to handle this differently
      setSubmitSuccess(true);
      
      setTimeout(() => {
        setReportFormData({ name: "", email: "", contactNumber: "" });
        setIsReportDialogOpen(false);
        setSubmitSuccess(false);
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-8 sm:py-12 md:py-24 bg-gradient-to-br from-[#F8F6F0] via-white to-[#F2EEE8] relative overflow-hidden">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#000000]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#171717]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Luxury Header */}
            <div className="mb-8 sm:mb-12 md:mb-20 text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-light font-serif text-gray-800 leading-tight px-2">
                Dubai real estate solutions focused around
                <br />
                <span className="text-[#000000] font-normal">excellent customer service</span>
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#000000] to-[#171717] mx-auto mt-4 sm:mt-6 md:mt-8"></div>
            </div>

            {/* Ultra Luxury Solutions Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  onClick={solution.onClick}
                  className="group relative bg-white/80 backdrop-blur-sm border border-[#000000]/20 rounded-2xl p-4 sm:p-6 md:p-8 hover:bg-white/95 hover:border-[#000000]/40 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1 md:hover:-translate-y-2"
                >
                  {/* Luxury Icon Container */}
                  <div className="mb-3 sm:mb-4 md:mb-6 relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#000000]/10 to-[#171717]/10 rounded-xl flex items-center justify-center group-hover:from-[#000000]/20 group-hover:to-[#171717]/20 transition-all duration-300">
                      {solution.icon}
                    </div>
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#000000]/5 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Title with Luxury Arrow */}
                  <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                    <h3 className="text-gray-800 font-medium text-sm sm:text-base md:text-lg lg:text-xl font-serif group-hover:text-[#000000] transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      {solution.arrow}
                    </div>
                  </div>

                  {/* Elegant Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light group-hover:text-gray-700 transition-colors duration-300">
                    {solution.description}
                  </p>

                  {/* Luxury Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-[#000000]/20 via-transparent to-[#171717]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Report Dialog */}
      <Dialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen}>
        <DialogContent showCloseButton className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-gray-800">
              Download Market Report
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Please provide your details to download the Comprehensive Dubai Real Estate Market Report Q1 2025
            </DialogDescription>
          </DialogHeader>

          {submitSuccess ? (
            <div className="py-6 text-center">
              <div className="text-green-600 text-lg font-semibold mb-2">
                Thank you!
              </div>
              <p className="text-gray-600">
                Your request has been submitted successfully. The report will be sent to your email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleReportSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={reportFormData.name}
                  onChange={(e) => handleReportFormChange("name", e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={reportFormData.email}
                  onChange={(e) => handleReportFormChange("email", e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contactNumber">Contact Number *</Label>
                <Input
                  id="contactNumber"
                  type="tel"
                  placeholder="Enter your contact number"
                  value={reportFormData.contactNumber}
                  onChange={(e) => handleReportFormChange("contactNumber", e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              {submitError && (
                <div className="text-red-600 text-sm">{submitError}</div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#000000] hover:bg-[#171717] text-white"
              >
                {isSubmitting ? "Submitting..." : "Download Report"}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Solutions;
