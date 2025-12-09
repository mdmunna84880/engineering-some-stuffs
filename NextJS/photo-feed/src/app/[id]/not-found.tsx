
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-2">Photo Not Found</h1>
      <p className="text-gray-600 mb-4">
        The photo you&apos;re looking for doesn&apos;t exist.
      </p>

      <Link
        href="/"
        className="text-blue-600 hover:underline text-sm"
      >
        Back to gallery
      </Link>
    </div>
  );
}
