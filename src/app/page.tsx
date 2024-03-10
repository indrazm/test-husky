import { Note } from "@prisma/client";

async function getNotes() {
  const res = await fetch("http://localhost:3000/api/notes", {
    cache: "no-store",
  });
  const data = (await res.json()) as { data: Note[] };
  return data;
}

export default async function Home() {
  const { data } = await getNotes();
  console.log(data);

  return (
    <div>
      {data.map((item) => {
        return <div key={item.content}>{item.content}</div>;
      })}
    </div>
  );
}
