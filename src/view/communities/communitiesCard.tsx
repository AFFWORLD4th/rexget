import { Card, CardContent } from "@/src/components/ui/card";
import { cn } from "@/src/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface CommunityData {
  city: string;
  photos: string[];
  latitude: number;
  longitude: number;
  name: string;
  sell_properties_count: number;
  rent_properties_count: number;
  projects_count: number;
  pool_projects_count: number;
  total_count: number;
  assigned_agents: any[];
  assigned_order?: number | null;
  order_photo?: string | null;
  order_description?: string | null;
  order_created_at?: string | null;
  order_updated_at?: string | null;
}

export default function CommunitiesCard({ data }: { data: CommunityData }) {
  const router = useRouter();

  return (
    <Card
      className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10 cursor-pointer bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:shadow-3xl hover:-translate-y-2"
      onClick={() =>
        router.push(`/communities/details/${encodeURIComponent(data?.name)}`)
      }
    >
      <CardContent className="p-0 h-full relative">
        {/* Main Image */}
        <div className="relative h-3/5 overflow-hidden">
          <Image
            src={
              data?.order_photo || data?.photos?.[0] || "/images/placeholder.jpg"
            }
            alt={`Image of ${data?.name}`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          
          {/* Luxury Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
        </div>

        {/* Content Section */}
        <div className="h-2/5 bg-gradient-to-br from-white via-[#F8F6F0] to-white p-6 flex flex-col justify-between">
          {/* Header */}
          <div>
            <h3 className="text-xl font-light font-serif text-gray-800 mb-3 leading-tight">
              {data?.name}
            </h3>
          </div>


          {/* Explore Link */}
          <Link
            href={`/communities/details/${encodeURIComponent(data?.name)}`}
            className={cn(
              "relative pb-1 transition-all duration-300 text-[#000000] uppercase text-sm font-light tracking-wider group-hover:text-[#171717]",
              "after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0",
              "after:bg-[#000000] after:transition-all after:duration-300 group-hover:after:w-full"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            Explore Community
          </Link>
        </div>

        {/* Luxury Border Effect */}
        <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-[#000000]/20 via-transparent to-[#171717]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </CardContent>
    </Card>
  );
}
