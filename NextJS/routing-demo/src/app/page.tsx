import Link from "next/link";

async function Home() {
    await new Promise(resolve => setTimeout(()=>{
        resolve("Intentional delay");
    }, 5000));
    return ( 
        <>
        <h1>Welocome to NextJS</h1>
        <Link href="/articles/next-js-tutorial?lang=en">Read aticles in English</Link>
        <Link href="/articles/next-js-tutorial?lang=fr">Read aticles in French</Link>
        <Link href="/articles/next-js-tutorial?lang=hi">Read aticles in Hindi</Link>
        <Link href="/articles/next-js-tutorial?lang=ma">Read aticles in Mandarin</Link>
        </>
     );
}

export default Home;