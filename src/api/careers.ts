import axios from "axios";
import { api, handleApiError } from "@/src/lib/axios";

export interface Job {
  _id: string;
  title: string;
  description: string;
  location: string;
  job_type: string;
  experience_level?: string;
  category?: string;
  status?: string;
  created_at?: string;
  applications_count?: number;
  views_count?: number;
  is_active?: boolean;
}

export interface JobApplicationData {
  applicant_name: string;
  applicant_email: string;
  applicant_phone: string;
  cover_letter: File;
  resume: File;
}

export const getJobs = async (page: number = 1, size: number = 10) => {
  try {
    const res = await api.get(`https://evid-api.propfusion.io/jobs?page=${page}&size=${size}`);
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const getJobById = async (id: string) => {
  try {
    const res = await api.get(`https://evid-api.propfusion.io/jobs/${id}`);
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
};

export const applyForJob = async (jobId: string, data: JobApplicationData) => {
  try {
    const formData = new FormData();
    formData.append("applicant_name", data.applicant_name);
    formData.append("applicant_email", data.applicant_email);
    formData.append("applicant_phone", data.applicant_phone);
    formData.append("cover_letter", data.cover_letter);
    formData.append("resume", data.resume);

    const res = await api.post(
      `https://evid-api.propfusion.io/jobs/${jobId}/apply`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  } catch (error: any) {
    console.error("Apply Job Error:", error);
    if (axios.isAxiosError(error) && error.response) {
      console.error("Server Response:", error.response.data);
      console.error("Status:", error.response.status);
    }
    throw handleApiError(error);
  }
};
