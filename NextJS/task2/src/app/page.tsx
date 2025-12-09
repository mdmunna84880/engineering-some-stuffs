// app/page.js
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
import SimpleFeed from '@/components/SimpleFeed';

export default async function Home() {
  // 1. This URL does not exist (returns 404)
  const res = await fetch("https://jsonplaceholder.typicode.com/posts897");

  // 2. We catch the failure and THROW
  // This 'throw' crashes the component and triggers a 500 on the server
  if (!res.ok) {
    throw new Error(`Critical Failure: API returned ${res.status}`);
  }

  const posts = await res.json();

  return (
    <main>
      <SimpleFeed posts={posts} />
    </main>
  );
}