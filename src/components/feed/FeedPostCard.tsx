import { useState } from "react";

import {
  FaHeart,
  FaRegBookmark,
  FaEllipsisH,
} from "react-icons/fa";

import "./feed.css";

type Props = {
  post: any;
};

function FeedPostCard({
  post,
}: Props) {
  const [showComments, setShowComments] =
    useState(false);

  const [showMenu, setShowMenu] =
    useState(false);

  return (
    <div className="feed-post-card">

      {/* HEADER */}

      <div className="post-header">

        <div className="post-user">

          <div className="post-avatar">
            {post.user.name
              .charAt(0)
              .toUpperCase()}
          </div>

          <div>

            <h4>
              {post.user.name}
            </h4>

            <div className="post-meta">

              <span>
                📍 {post.location}
              </span>

              <span>
                🕒 {post.createdAt}
              </span>

            </div>

          </div>

        </div>

        <div className="post-menu">

          <button
            onClick={() =>
              setShowMenu(!showMenu)
            }
          >
            <FaEllipsisH />
          </button>

          {showMenu && (
            <div className="post-dropdown">

              <button>
                Save Post
              </button>

              <button>
                Copy Link
              </button>

              <button>
                Report
              </button>

            </div>
          )}

        </div>

      </div>

      {/* DESCRIPTION */}

      <p className="post-description">
        {post.description}
      </p>

      {/* IMAGES */}

      {post.images?.length > 0 && (
        <div
          className={`post-images image-count-${post.images.length}`}
        >

          {post.images
            .slice(0, 4)
            .map(
              (
                image: string,
                index: number
              ) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                />
              )
            )}

          {post.images.length > 4 && (
            <div className="more-images">
              +{post.images.length - 4}
            </div>
          )}

        </div>
      )}

      {/* ACTIONS */}

      <div className="post-actions">

        <button>
          <FaHeart />

          {post.reactions}
        </button>

        <button
          onClick={() =>
            setShowComments(
              !showComments
            )
          }
        >
          💬 Comment
        </button>

        <button>
          <FaRegBookmark />

          Save
        </button>

      </div>

      {/* COMMENTS */}

      {showComments && (
        <div className="comments-section">

          {post.comments.map(
            (
              comment: any,
              index: number
            ) => (
              <div
                key={index}
                className="comment-item"
              >
                <strong>
                  {comment.user}
                </strong>

                <p>
                  {comment.text}
                </p>
              </div>
            )
          )}

          <div className="comment-box">

            <div className="comment-avatar">
              A
            </div>

            <input
              placeholder="Write a comment..."
            />

            <button>
              Post
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default FeedPostCard;