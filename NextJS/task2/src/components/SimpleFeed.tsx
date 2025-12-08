export const dynamic = 'force-dynamic';

import { PostFeedProps } from "@/types";

const SimpleFeed = ({ posts}: PostFeedProps) => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 tracking-tight border-b border-gray-200 pb-4">
        Latest Posts
      </h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <article 
            key={post.id} 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:border-blue-300 transition-colors duration-200"
          >
            {/* Meta Header */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full uppercase">
                User {post.userId}
              </span>
              <span className="text-xs text-gray-400 font-mono">#{post.id}</span>
            </div>

            {/* Title - Capitalized via CSS */}
            <h2 className="text-xl font-bold text-gray-900 mb-3 capitalize leading-tight">
              {post.title}
            </h2>

            {/* Body - Handling newlines properly */}
            <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
              {post.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default SimpleFeed;