"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getJobById, applyForJob, Job } from "@/src/api/careers";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { 
  Loader2, 
  ArrowLeft, 
  Send, 
  CheckCircle2, 
  UploadCloud,
  MapPin,
  Briefcase,
  Clock,
  Building2,
  ChevronRight
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import { cn } from "@/src/lib/utils";
import Link from "next/link";

export default function JobDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [coverLetter, setCoverLetter] = useState<File | null>(null);
  const [coverLetterError, setCoverLetterError] = useState<string | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        if (typeof id === "string") {
          const data = await getJobById(id);
          setJob(data);
        }
      } catch (err) {
        setError("Failed to load job details.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'coverLetter') => {
    const file = e.target.files?.[0];
    
    if (type === 'resume') setResumeError(null);
    else setCoverLetterError(null);

    if (file) {
      // Allowed MIME types
      const allowedTypes = [
        "image/jpeg", "image/jpg", "image/webp", "image/png", "image/gif",
        "application/pdf",
        "video/mp4", "video/avi", "video/mov",
        "image/heic", "image/heif", "image/svg+xml"
      ];

      if (!allowedTypes.includes(file.type)) {
        const errorMsg = "Invalid file type. Please upload an image, PDF, or video.";
        if (type === 'resume') setResumeError(errorMsg);
        else setCoverLetterError(errorMsg);
        
        if (type === 'resume') setResume(null);
        else setCoverLetter(null);
        return;
      }
      
      // Optional: Check file size (e.g., max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        const errorMsg = "File size exceeds 10MB limit.";
        if (type === 'resume') setResumeError(errorMsg);
        else setCoverLetterError(errorMsg);

        if (type === 'resume') setResume(null);
        else setCoverLetter(null);
        return;
      }

      if (type === 'resume') setResume(file);
      else setCoverLetter(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!job || !resume || !coverLetter) {
        if(!resume) setResumeError("Please upload your resume/CV.");
        if(!coverLetter) setCoverLetterError("Please upload your cover letter.");
        return;
    }

    setIsSubmitting(true);
    try {
      await applyForJob(job._id, {
        applicant_name: formData.name,
        applicant_email: formData.email,
        applicant_phone: formData.phone,
        cover_letter: coverLetter,
        resume: resume,
      });
      setSubmitSuccess(true);
    } catch (err: any) {
        console.error(err);
      setError(err.message || "Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <Loader2 className="w-10 h-10 animate-spin text-[#000000]" />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center max-w-md w-full">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Job Not Found</h3>
            <p className="text-gray-500 mb-6">{error || "The job you are looking for does not exist or has been removed."}</p>
            <Button onClick={() => router.push("/careers")} className="bg-[#000000] hover:bg-[#171717] text-white w-full">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
            </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-gray-500 mb-6">
                <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <Link href="/careers" className="hover:text-gray-900 transition-colors">Careers</Link>
                <ChevronRight className="w-4 h-4 mx-2" />
                <span className="text-gray-900 font-medium truncate max-w-[200px]">{job.title}</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div>
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 font-serif tracking-tight">
                        {job.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-600">
                        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                            <Briefcase className="w-4 h-4 mr-2 text-[#000000]" />
                            <span className="font-medium">
                                {job.job_type ? job.job_type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()) : "Full Time"}
                            </span>
                        </div>
                        <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                            <MapPin className="w-4 h-4 mr-2 text-[#000000]" />
                            <span>{job.location || "Dubai, UAE"}</span>
                        </div>
                         {job.category && (
                            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                                <Building2 className="w-4 h-4 mr-2 text-[#000000]" />
                                <span>{job.category.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                            </div>
                        )}
                         {job.experience_level && (
                            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                                <Clock className="w-4 h-4 mr-2 text-[#000000]" />
                                <span>{job.experience_level.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())} Level</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 font-serif">About the Role</h3>
                <div 
                    className="prose prose-lg max-w-none text-gray-600 prose-headings:font-serif prose-headings:text-gray-900 prose-a:text-[#000000] prose-li:marker:text-[#000000]"
                    dangerouslySetInnerHTML={{ __html: job.description }} 
                />
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-24">
                  <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 font-serif">
                        Apply Now
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Fill out the form below to apply for this position.
                      </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-50 border-gray-200 focus:bg-white transition-all h-11"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-50 border-gray-200 focus:bg-white transition-all h-11"
                        placeholder="e.g. john@example.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                       <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-50 border-gray-200 focus:bg-white transition-all h-11"
                        placeholder="e.g. +971 50 123 4567"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="coverLetter" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Cover Letter</Label>
                      <div className="relative group">
                        <Input
                          id="coverLetter"
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" 
                          onChange={(e) => handleFileChange(e, 'coverLetter')}
                          className="hidden"
                        />
                         <label 
                           htmlFor="coverLetter" 
                           className={cn(
                             "flex flex-col items-center justify-center w-full h-28 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200",
                             coverLetterError 
                                ? "border-red-300 bg-red-50 text-red-600" 
                                : "border-gray-200 bg-gray-50 text-gray-500 hover:border-[#000000] hover:bg-red-50/10 group-hover:text-[#000000]",
                              coverLetter && "border-[#000000] bg-red-50/20"
                           )}
                         >
                            <div className="flex flex-col items-center justify-center p-4">
                                {coverLetter ? (
                                    <>
                                        <CheckCircle2 className="w-8 h-8 mb-2 text-green-500" />
                                        <p className="text-sm font-medium text-gray-900 text-center line-clamp-1 break-all px-2">
                                            {coverLetter.name}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <UploadCloud className="w-8 h-8 mb-2 opacity-50 transition-opacity group-hover:opacity-100" />
                                        <p className="text-xs font-semibold uppercase">Upload Cover Letter</p>
                                        <p className="text-[10px] opacity-70 mt-1">PDF, JPG, PNG up to 10MB</p>
                                    </>
                                )}
                            </div>
                         </label>
                      </div>
                      {coverLetterError && (
                        <p className="text-xs text-red-500 mt-1">{coverLetterError}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="resume" className="text-xs font-semibold uppercase tracking-wider text-gray-500">Resume / CV</Label>
                      <div className="relative group">
                        <Input
                          id="resume"
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" 
                          onChange={(e) => handleFileChange(e, 'resume')}
                          className="hidden"
                        />
                         <label 
                           htmlFor="resume" 
                           className={cn(
                             "flex flex-col items-center justify-center w-full h-28 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-200",
                             resumeError 
                                ? "border-red-300 bg-red-50 text-red-600" 
                                : "border-gray-200 bg-gray-50 text-gray-500 hover:border-[#000000] hover:bg-red-50/10 group-hover:text-[#000000]",
                             resume && "border-[#000000] bg-red-50/20"
                           )}
                         >
                            <div className="flex flex-col items-center justify-center p-4">
                                {resume ? (
                                    <>
                                        <CheckCircle2 className="w-8 h-8 mb-2 text-green-500" />
                                        <p className="text-sm font-medium text-gray-900 text-center line-clamp-1 break-all px-2">
                                            {resume.name}
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <UploadCloud className="w-8 h-8 mb-2 opacity-50 transition-opacity group-hover:opacity-100" />
                                        <p className="text-xs font-semibold uppercase">Upload Resume</p>
                                        <p className="text-[10px] opacity-70 mt-1">PDF, JPG, PNG up to 10MB</p>
                                    </>
                                )}
                            </div>
                         </label>
                      </div>
                      {resumeError && (
                        <p className="text-xs text-red-500 mt-1">{resumeError}</p>
                      )}
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-[#000000] hover:bg-[#171717] text-white h-12 rounded-lg font-medium tracking-wide transition-all shadow-md hover:shadow-lg mt-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
            </div>
            
            <div className="mt-6 text-center">
                <p className="text-xs text-gray-400">
                    By submitting this form, you agree to our <Link href="/privacy-policy" className="underline hover:text-gray-600">Privacy Policy</Link>.
                </p>
            </div>
          </div>
        </div>
      </div>

       <Dialog open={submitSuccess} onOpenChange={setSubmitSuccess}>
        <DialogContent className="sm:max-w-md bg-white p-0 overflow-hidden rounded-2xl">
          <div className="bg-[#000000] p-6 text-center">
             <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-white" />
             </div>
             <DialogTitle className="text-2xl font-bold text-white font-serif">Application Sent!</DialogTitle>
          </div>
          <div className="p-8 text-center">
             <DialogDescription className="text-gray-600 text-base mb-8">
              Thank you for your interest in joining our team. We have received your application and will review it shortly. Good luck!
            </DialogDescription>
            <Button 
              className="w-full bg-gray-900 hover:bg-black text-white h-11"
              onClick={() => router.push("/careers")}
            >
              Back to Careers
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
