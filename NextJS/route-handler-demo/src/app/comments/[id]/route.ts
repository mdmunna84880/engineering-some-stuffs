import {data} from "../../data"
export async function GET(request: Request, {params}: {params: Promise<{id: string}>}){
    const {id} = await params;

    return Response.json(data.find((element)=> element.id === Number(id)));
}

export async function PATCH(request: Request, {params}: {params: Promise<{id: string}>}) {
    const {id} = await params;
    const body = await request.json();
    const idx = data.findIndex((el)=> el.id === Number(id));
    data[idx] = {
        ...data[idx],
        ...body
    }

    return Response.json({ message: "Updated", data: data[idx] },
        { status: 200 });
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const idx = data.findIndex((el) => el.id === Number(id));

  if (idx === -1) {
    return Response.json({ message: "Not found" }, { status: 404 });
  }

  const deletedData = data[idx];


  console.log("Deleted:", deletedData);
  console.log("Remaining:", data);

  return Response.json(
    { message: "Deleted", data: deletedData },
    { status: 200 }
  );
}