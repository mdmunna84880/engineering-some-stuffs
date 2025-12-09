import Image from "next/image";
import { Photo } from "@/types/photo";


export default function PhotoDetail({ photo }: { photo: Photo }) {
  return (
    <div className="space-y-4">
      {/* Hero Image */}
      <div className="relative w-full h-72 sm:h-96 rounded-lg overflow-hidden">
        <Image
          src={photo.url}
          alt={photo.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-2xl font-semibold">{photo.title}</h1>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
        {photo.description}
      </p>
    </div>
  );
}
