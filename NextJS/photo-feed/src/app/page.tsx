
import { getAllPhotos } from "@/lib/photo";
import PhotoGrid from "@/components/PhotoGrid";

export default async function PhotosPage() {
  const photos = await getAllPhotos();

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Photos</h1>
      <PhotoGrid photos={photos} />
    </div>
  );
}
