import { NextResponse } from "next/server";

/* Poster lookup via IMDb's public suggestion endpoint,
   mirroring the reference site's /api/imdb route. */
export async function GET(request: Request) {
  const q = new URL(request.url).searchParams.get("q")?.trim() ?? "";
  if (!q) {
    return NextResponse.json({ error: "missing q" }, { status: 400 });
  }

  try {
    const query = q.toLowerCase();
    const first = query[0].match(/[a-z0-9]/) ? query[0] : "x";
    const res = await fetch(
      `https://v2.sg.media-imdb.com/suggestion/${first}/${encodeURIComponent(query)}.json`,
      { next: { revalidate: 86400 } }
    );
    if (!res.ok) throw new Error(`IMDb responded ${res.status}`);
    const data = await res.json();
    const imageUrl = data?.d?.find(
      (item: { i?: { imageUrl?: string } }) => item?.i?.imageUrl
    )?.i?.imageUrl;
    if (!imageUrl) {
      return NextResponse.json({ error: "no poster found" }, { status: 404 });
    }
    return NextResponse.json({ imageUrl });
  } catch {
    return NextResponse.json({ error: "lookup failed" }, { status: 502 });
  }
}
