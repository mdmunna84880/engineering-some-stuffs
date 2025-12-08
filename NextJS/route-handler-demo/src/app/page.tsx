"use server";

export default async function Home() {
  console.log("Helo Server");
  // const data = await fetch("http://localhost:3000/comments").then((res) => res.json());
  // console.log(data);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
