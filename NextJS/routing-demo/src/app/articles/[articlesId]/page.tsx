/** @format */

async function NewsArtics({
  params,
  searchParams,
}: {
  params: Promise<{ articlesId: string }>;
  searchParams: Promise<{ lang?: string }>;
}) {
  return <>
    <h1>Articles Page</h1>
    <h2>Article ID: {(await params).articlesId}</h2>
    <h3>Language: {(await searchParams).lang || "en"}</h3>
    
  </>;
}

export default NewsArtics;
