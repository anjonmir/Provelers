const API =
  "http://localhost:8000/api/posts";

// =========================
// CREATE POST
// =========================

export async function createPost(
  postData: any
) {
  const response =
    await fetch(API, {
      method: "POST",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(postData),
    });

  if (!response.ok) {
    throw new Error(
      "Failed to create post."
    );
  }

  return response.json();
}

// =========================
// GET POSTS
// =========================

export async function getPosts() {
  const response =
    await fetch(API);

  if (!response.ok) {
    throw new Error(
      "Failed to load posts."
    );
  }

  return response.json();
}