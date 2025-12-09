import PhotoCard from "./PhotoCard";
import { Photo } from "@/types/photo";

interface PhotoGridProps {
  photos: Photo[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
}
