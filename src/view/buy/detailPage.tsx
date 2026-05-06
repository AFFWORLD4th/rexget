"use client"

import { getAllBuyPropertiesById } from "@/src/api/buy";
import EnquireForm from "@/src/components/common/enquireForm";
import { Badge } from "@/src/components/ui/badge";
import { Card } from "@/src/components/ui/card";
import { Bed, Bath, Square, SquareGanttChart } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Dialog, DialogContent, DialogTitle } from "@/src/components/ui/dialog";

export default function DetailPage({ id }: any) {
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showFullDescription, setShowFullDescription] = useState(false);

  const fetchPropertyDetails = async () => {
    setLoading(true);
    try {
      const res = await getAllBuyPropertiesById(id);
      setProperty(res?.properties?.[0]);
    } catch (error) {
      console.error("Error fetching property details:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPropertyDetails();
  }, [id]);

  useEffect(() => {
    if (!property?.photos || property.photos.length <= 1) return;

    const interval = setInterval(() => {
      setHeroImageIndex(
        (prevIndex) => (prevIndex + 1) % property.photos.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [property?.photos]);

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev === property.photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? property.photos.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };
  if (!property?.photos || property.photos.length === 0) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="luxury-bg">
      <section 
        className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            {property?.photos?.map((photo: string, index: number) => (
              <Image
                key={index}
                src={photo}
                alt="Luxury Living in Dubai"
                layout="fill"
                objectFit="cover"
                quality={85}
                priority={index === 0}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === heroImageIndex
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0"
                }`}
                style={{
                  transform: index === heroImageIndex 
                    ? `scale(1.1) translate(${(mousePosition.x - 50) * 0.02}%, ${(mousePosition.y - 50) * 0.02}%)`
                    : 'scale(1)',
                  transformOrigin: 'center center'
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-black/20 z-20" />
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
            {property?.photos?.map((_: any, index: number) => (
              <button
                key={index}
                onClick={() => setHeroImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === heroImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="relative z-30 text-white px-4 mt-[50vh] sm:mt-[60vh]">
          {/* <span className="text-sm sm:text-base">#{id}</span> */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light mb-2 sm:mb-4 leading-tight tracking-wide font-serif">
            {property?.title}
          </h1>
          <p className="text-base sm:text-lg font-light mb-8 sm:mb-12 tracking-wider uppercase text-primary">
            {property?.location?.city} {property?.location?.community} {property?.location?.sub_community}
          </p>
        </div>
      </section>
      <section className="bg-white py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-base sm:text-lg font-light uppercase text-primary mb-8 sm:mb-12">
            <a
              className="hover:underline cursor-pointer text-center"
              onClick={() => setIsOpen(true)}
            >
              Register Now
            </a>
            {property?.agent && (
              <>
                <span className="text-gray-300 hidden sm:inline">|</span>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-gradient-to-r from-[#F8F6F0] to-[#F2EEE8] px-3 sm:px-4 py-3 rounded-xl border border-[#E5E1D8] shadow-lg">
                  <div className="relative">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-3 border-[#000000] shadow-md">
                      {property.agent.avatar ? (
                        <Image
                          src={property.agent.avatar}
                          alt={property.agent.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-[#000000] to-[#171717] flex items-center justify-center">
                          <span className="text-sm sm:text-lg font-bold text-white">
                            {property.agent.name?.charAt(0) || 'A'}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col text-center sm:text-left">
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 uppercase tracking-wide">
                      {property.agent.name}
                    </span>
                    <span className="text-xs text-[#000000] font-medium uppercase tracking-wider">
                      Property Specialist
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`https://wa.me/${property.agent.phone?.replace(/[^0-9]/g, '')}?text=Hi ${property.agent.name}, I'm interested in the property: ${property.title} located in ${property.location?.community || property.location?.city}. I'd like to know more details about this listing. Thank you!`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Icon icon="iconoir:whatsapp-solid" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </a>
                    <a
                      href={`tel:${property.agent.phone}`}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-[#000000] hover:bg-[#171717] rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Icon icon="line-md:phone-call-filled" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${property.agent.email}?subject=Inquiry about ${property.title}`}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                      <Icon icon="material-symbols:mail-outline" className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>

          <hr className="border-t border-gray-200 mb-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center mb-8 sm:mb-12">
            <div className="border-r-0 sm:border-r border-gray-200 pr-0 sm:pr-4">
              <h3 className="text-sm font-light uppercase text-primary mb-2 border-b border-primary inline-block pb-1">
                Details
              </h3>
              <div className="text-sm font-light text-gray-700 space-y-1">
                <p>
                  {" "}
                  <strong className="font-bold">City</strong>:{" "}
                  {property?.location?.city}{" "}
                </p>
                <p>
                  {" "}
                  <strong className="font-bold">Apartment Type:</strong>{" "}
                  {property?.property_type}
                </p>{" "}
                <p>
                  {" "}
                  <strong className="font-bold">
                    Construction Stage:
                  </strong>{" "}
                  {property?.completionStatus}
                </p>
                <p>
                  <strong className="font-bold">Bedrooms:</strong>{" "}
                  {property?.bedRooms === 0 ? "Studio" : property?.bedRooms}{" "}
                </p>
                <p>
                  <strong className="font-bold">Bathrooms:</strong>{" "}
                  {property?.bathrooms}
                </p>{" "}
                <p>
                  <strong className="font-bold">Furnished:</strong>{" "}
                  {property?.isFurnished}
                </p>
              </div>
            </div>
            <div className="border-r-0 sm:border-r border-gray-200 px-0 sm:px-4">
              <h3 className="text-sm font-light uppercase text-primary mb-2 border-b border-primary inline-block pb-1">
                Areas
              </h3>
              <p className="text-sm font-light text-gray-700">
                <strong className="font-bold"> Home Size (Sqft):</strong>{" "}
                {property?.size}²
              </p>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-sm font-light uppercase text-primary mb-2 border-b border-primary inline-block pb-1">
                Main Features
              </h3>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 mb-4 sm:mb-8 font-serif">
              Description
            </h2>
            <p className={`text-sm font-light text-gray-600 leading-relaxed mb-6 sm:mb-8 ${!showFullDescription ? 'line-clamp-4' : ''}`}>
              {property?.description}
            </p>
            {property?.description && property.description.length > 200 && (
              <button 
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="inline-flex items-center gap-2 bg-[#000000] hover:bg-[#171717] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg"
              >
                <span>{showFullDescription ? 'Read Less' : 'Read More'}</span>
                <Icon icon={showFullDescription ? "lucide:arrow-up" : "lucide:arrow-right"} className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {property?.photos && property.photos.length > 0 && (
            <div className="mb-16">
              {/* Main Carousel Container */}
              <div className="relative group">
                {/* Main Image Display */}
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-4 sm:mb-6 overflow-hidden rounded-lg">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedImageIndex}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={property.photos[selectedImageIndex]}
                        alt={`${property.title} - Image ${selectedImageIndex + 1}`}
                        layout="fill"
                        objectFit="cover"
                        quality={90}
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {property.photos.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 opacity-70 sm:opacity-0 group-hover:opacity-100 z-10 bg-black/20 sm:bg-transparent"
                      >
                        <Icon icon="teenyicons:left-outline" fontSize={20} className="sm:text-[30px]" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white rounded-full w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center transition-all duration-200 opacity-70 sm:opacity-0 group-hover:opacity-100 z-10 bg-black/20 sm:bg-transparent"
                      >
                        <Icon icon="teenyicons:right-outline" fontSize={20} className="sm:text-[30px]" />
                      </button>
                    </>
                  )}
                </div>

                {/* Thumbnail Carousel */}
                <div className="relative">
                  <div className="flex gap-1 sm:gap-2 md:gap-4 overflow-x-auto scrollbar-hide pb-2">
                    <div className="flex gap-1 sm:gap-2 md:gap-4 min-w-max">
                      {property.photos.map((photo: string, index: number) => (
                        <button
                          key={index}
                          onClick={() => goToImage(index)}
                          className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 overflow-hidden rounded transition-all duration-200 ${
                            selectedImageIndex === index
                              ? "ring-2 ring-primary opacity-100 scale-105"
                              : "opacity-70 hover:opacity-90 hover:scale-102"
                          }`}
                        >
                          <Image
                            src={photo || "/placeholder.svg"}
                            alt={`${property.title} thumbnail ${index + 1}`}
                            layout="fill"
                            objectFit="cover"
                            quality={75}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Scroll Indicators for Thumbnails */}
                  <div className="flex justify-center mt-4 space-x-1">
                    {Array.from({
                      length: Math.ceil(property.photos.length / 5),
                    }).map((_, pageIndex) => (
                      <div
                        key={pageIndex}
                        className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                          Math.floor(selectedImageIndex / 5) === pageIndex
                            ? "bg-primary"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {property?.permitQRCode && (
          <div className="flex justify-center">
            <div className="bg-[#F2EEE8] border border-white rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 shadow-sm max-w-sm">
              {/* QR Code with Palm Tree Emblem */}
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200 overflow-hidden">
                  <Image
                    src={property?.permitQRCode}
                    alt="QR Code"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Verification Text */}
              <div className="text-gray-700 text-center sm:text-left">
                <p className="text-xs sm:text-sm">
                  This Listing has been verified by{" "}
                  <span className="font-bold">Dubai Land Department</span>
                </p>
              </div>
            </div>
          </div>
        )}


        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif text-primary mb-4 sm:mb-8 font-serif">Enquire</h2>
          <EnquireForm type="contact" />
        </div>
      </section>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <AnimatePresence>
          <DialogContent className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-[#F2EEE8] rounded-none px-4 sm:px-6 md:px-8 py-3 sm:py-4">
            <motion.div
              key="dialog"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <DialogTitle className="mb-4 sm:mb-6 flex justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-mono font-thin text-black text-center font-serif">
                    Take the First Step
                  </h2>
                  <p className="font-mono font-thin text-center text-xs sm:text-sm md:text-[15px] text-neutral-400">
                    Get a free consultation, personalized investment strategy,
                    and exclusive access to Dubai best properties.
                  </p>
                </div>
                <Icon
                  icon={"material-symbols-light:cancel-outline"}
                  fontSize={20}
                  className="text-neutral-400 cursor-pointer sm:text-[25px]"
                  onClick={() => setIsOpen(false)}
                />
              </DialogTitle>

              <EnquireForm type="contact" />
            </motion.div>
          </DialogContent>
        </AnimatePresence>
      </Dialog>
    </div>
  );
}
