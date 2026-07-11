const API = "http://localhost:8000/api/posts";

// =========================
// CREATE POST
// =========================

export async function createPost(postData: any) {
  const response = await fetch(API, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error("Failed to create post.");
  }

  return response.json();
}

// =========================
// GET POSTS
// =========================

export async function getPosts() {
  const res = await fetch(API);

  if (!res.ok) throw new Error("Failed");

  if (!res.ok)
    throw new Error("Request failed");

return res.json();
}

// =========================
// LIKE
// =========================

export async function likePost(postId: string, firebaseUid: string) {
  const res = await fetch(`${API}/${postId}/like`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      firebaseUid,
    }),
  });

  if (!res.ok)
    throw new Error("Request failed");

return res.json();
}

// =========================
// COMMENT
// =========================

export async function addComment(postId: string, comment: any) {
  const res = await fetch(`${API}/${postId}/comment`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(comment),
  });

  if (!res.ok) throw new Error("Request failed");

  return res.json();
}
