const API = "http://localhost:8000/api/search";

export async function searchEverything(
  query: string,

  signal?: AbortSignal,
) {
  const res = await fetch(
    `${API}?q=${encodeURIComponent(query)}`,

    {
      signal,
    },
  );

  return res.json();
}
