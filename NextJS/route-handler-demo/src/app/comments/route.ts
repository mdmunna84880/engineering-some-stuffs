import { data } from "../data";

export async function GET() {
    return Response.json(data);
}

export async function POST(request: Request) {
    const body = await request.json();
    console.log(body);
    data.push(body);
    return new Response(JSON.stringify({ message: "Created" }), {
        headers: {
            "Content-Type": "application/json"
        },
        status: 201
    });
}

