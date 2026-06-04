import { useState } from "react";

function CreatePostCard() {
  const [text, setText] =
    useState("");

  return (
    <div className="glass-card mb-4 p-4">
      <h5>Create Post</h5>

      <textarea
        className="form-control mt-3"
        rows={4}
        placeholder="Share your travel experience..."
        value={text}
        onChange={(e) =>
          setText(e.target.value)
        }
      />

      <button className="primary-btn mt-3">
        Post
      </button>
    </div>
  );
}

export default CreatePostCard;