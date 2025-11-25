async function Docs({params}: {params: Promise<{slug : string[]}>}) {
    const {slug} = await params;
    if(slug.length === 0) {
        return <h1>Documentation Home Page</h1>;
    }else if(slug.length === 1) {
        return <h1>Viewing document for feature {slug[0]}</h1>
    }else if(slug.length === 2) {
        return <h1>Viewing document for feature {slug[0]} - topic {slug[1]}</h1>
    }
    else {
        return <h1>Viewing document for feature {slug[0]} - topic {slug[1]} - subtopic {slug[2]}</h1>
    }
}

export default Docs;