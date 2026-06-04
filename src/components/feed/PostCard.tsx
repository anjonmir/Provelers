import {
  FaHeart,
  FaComment,
  FaMapMarkerAlt,
} from "react-icons/fa";

type PostProps = {
  post: {
    author: string;
    location: string;
    content: string;
    likes: number;
    comments: number;
  };
};

function PostCard({
  post,
}: PostProps) {
  return (
    <div className="glass-card p-4 mb-4">
      <div className="d-flex justify-content-between">
        <div>
          <h5>{post.author}</h5>

          <small>
            <FaMapMarkerAlt />
            {" "}
            {post.location}
          </small>
        </div>
      </div>

      <p className="mt-3">
        {post.content}
      </p>

      <div className="d-flex gap-4 mt-3">
        <span>
          <FaHeart />
          {" "}
          {post.likes}
        </span>

        <span>
          <FaComment />
          {" "}
          {post.comments}
        </span>
      </div>
    </div>
  );
}

export default PostCard;