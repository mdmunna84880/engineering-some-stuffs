// src/app/photos/[id]/loading.tsx

export default function LoadingPhotoDetail() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Back Link Skeleton */}
      <div className="h-4 w-24 bg-gray-200 rounded mb-4 animate-pulse" />

      {/* Image Skeleton */}
      <div className="w-full h-80 sm:h-96 md:h-[500px] bg-gray-200 rounded-lg animate-pulse mb-6" />

      {/* Title Skeleton */}
      <div className="h-6 w-1/2 bg-gray-200 rounded mb-4 animate-pulse" />

      {/* Paragraph Skeleton */}
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
}
