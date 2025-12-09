export default function LoadingPhotos() {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Photos</h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-lg bg-gray-200 aspect-square"
          />
        ))}
      </div>
    </div>
  );
}
