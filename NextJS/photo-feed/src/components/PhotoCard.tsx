import Link from "next/link";
import Image from "next/image";
import { Photo } from "@/types/photo";

interface PhotoCardProps {
  photo: Photo;
}

export default function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <Link
      href={`/${photo.id}`}
      className="group relative block h-full overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 focus:outline-none focus:ring-4 focus:ring-indigo-500/20"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        <Image
          src={photo.thumbnailUrl}
          alt={photo.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />

        <div className="absolute inset-0 z-10 flex items-center justify-center bg-indigo-900/0 transition-colors duration-300 group-hover:bg-indigo-900/20">
          <span className="translate-y-4 rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-wide text-indigo-600 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            View Photo
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-5 border-t border-gray-50">
        <div className="h-0.5 w-1 bg-indigo-500 transition-all duration-800 group-hover:w-full" />
        
        <h3 className="line-clamp-2 text-sm font-semibold leading-relaxed text-gray-700 transition-colors duration-300 group-hover:text-indigo-600">
          {photo.title}
        </h3>
        
        <p className="mt-2 text-xs font-medium text-gray-400 transition-colors group-hover:text-gray-600">
          Click to expand details
        </p>
      </div>
    </Link>
  );
}