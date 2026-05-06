import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/src/components/ui/card";
import { Bed, Bath, Calendar, Hammer } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import PriceDisplay from "@/src/components/common/PriceDisplay";

interface PropertyData {
  id?: string | number;
  name?: string;
  location?: {
    city?: string;
    community?: string;
  };
  newParam?: {
    price?: number;
    totalUnits?: number;
    handoverTime?: string;
  };
  photos?: string[];
  area_id?: string;
  bedRooms?: number;
  bathrooms?: number;
  size?: number | string;
  constructionStage?: string;
  completionStatus?: string;
  completionDate?: string;
  handoverTime?: string;
}

export default function PropertyCard({ data }: { data?: PropertyData }) {
    const router = useRouter();
  return (
    <Card className="overflow-hidden border-none p-0 shadow-sm border-2 rounded-none hover:shadow-lg transition-shadow duration-300" onClick={() => router.push(`/offPlans/details/${data?.id}`)}>
      <div className="relative w-full h-80 md:h-96 overflow-hidden group">
        <Image
          src={data?.photos?.[0] ?? "/placeholder.jpg"}
          alt={`Image of ${data?.name}`}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          quality={75}
        />
        {data?.newParam?.totalUnits ? (
          <div className="absolute bottom-4 left-4 bg-white text-xs font-light tracking-wider px-3 py-1 rounded-full shadow-md uppercase">
            {data.newParam.totalUnits} UNITS
          </div>
        ) : null}
        <div className="absolute bottom-4 right-4 bg-white text-sm font-light px-3 py-1 rounded-full shadow-md text-[#1A202C]">
          FROM <PriceDisplay priceInAED={data?.newParam?.price} className="ml-1" />
        </div>
      </div>
      <CardContent className="p-6">
        <CardTitle className="text-xl font-mono font-light text-[#1A202C] mb-2 tracking-wide line-clamp-1">
          {data?.name ?? "Unnamed Property"}
        </CardTitle>
        <p className="text-xs uppercase tracking-wider text-primary font-light mb-4 line-clamp-1">
          {`${data?.location?.community ?? ""}${
            data?.location?.community && data?.location?.city ? ", " : ""
          }${data?.location?.city ?? ""}`}
        </p>

        <div className="flex items-center justify-between text-gray-500 text-xs font-light border-t pt-4">
            {/* Beds/Baths if available */}
            {(data?.bedRooms || data?.bathrooms) && (
              <div className="flex gap-3">
                 {(data?.bedRooms !== undefined && data?.bedRooms !== null) && (
                  <div className="flex items-center gap-1">
                    <Bed className="w-3 h-3" />
                    <span>{data.bedRooms === 0 ? "Studio" : data.bedRooms}</span>
                  </div>
                 )}
                 {data?.bathrooms && (
                  <div className="flex items-center gap-1">
                    <Bath className="w-3 h-3" />
                    <span>{data.bathrooms}</span>
                  </div>
                 )}
              </div>
            )}

            {/* Handover Date */}
           {(data?.newParam?.handoverTime || data?.handoverTime || data?.completionDate) && (
             <div className="flex items-center gap-1" title="Handover Date">
               <Calendar className="w-3 h-3" />
               <span>
                  {new Date(data?.newParam?.handoverTime || data?.handoverTime || data?.completionDate || "").toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
               </span>
             </div>
           )}

           {/* Construction Stage */}
            {(data?.constructionStage || data?.completionStatus) && (
             <div className="flex items-center gap-1 line-clamp-1 max-w-[100px]" title="Construction Stage">
               <Hammer className="w-3 h-3" />
               <span>
                  {data?.constructionStage || data?.completionStatus}
               </span>
             </div>
           )}
        </div>
      </CardContent>
    </Card>
  );
}
