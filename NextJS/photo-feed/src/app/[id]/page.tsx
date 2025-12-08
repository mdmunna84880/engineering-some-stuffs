import { getPhotoById } from "@/lib/photo";
import PhotoDetail from "@/components/PhotoDetail";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PhotoPageProps {
  params: Promise<{ id: string }>;
}

export default async function PhotoPage({ params }: PhotoPageProps) {
  const photo = await getPhotoById((await params).id);

  if (!photo) {
    return notFound();
  }

  return (
    <div className="p-6">
      {/* Back to gallery */}
      <Link
        href="/"
        className="text-sm text-blue-600 hover:underline mb-4 inline-block"
      >
        ← Back to gallery
      </Link>

      <PhotoDetail photo={photo} />
    </div>
  );
}
