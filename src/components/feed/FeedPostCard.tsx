import { useState } from "react";

import {
  FaHeart,
  FaRegBookmark,
  FaEllipsisH,
} from "react-icons/fa";
import {
  useNavigate,
} from "react-router-dom";

import {
  timeAgo,
} from "../../utils/timeAgo";

import {
  mockSavedPosts,
} from "../../data/mockSavedPosts";

import "./feed.css";

import useAuth
  from "../../hooks/useAuth";

import {

  likePost,

  addComment,

}
  from "../../services/postService";

type Props = {
  post: any;
};

function FeedPostCard({ post }: Props) {

  const navigate = useNavigate();

  const { user } = useAuth();

  const authorName =
    post.user?.name ||
    post.ownerName ||
    "Unknown Traveler";

  const authorAvatar =
    post.user?.avatar ||
    post.ownerPhoto ||
    "";

  const reactionTotal =
    post.reactions ??
    post.likes ??
    0;

  const comments =
    post.comments ?? [];

  const [showComments, setShowComments] =
    useState(false);

  const [showMenu, setShowMenu] =
    useState(false);

  const [liked, setLiked] =
    useState(
      user
        ? post.likedBy?.includes(user.uid)
        : false
    );

  const [reactionCount,
    setReactionCount] =
    useState(reactionTotal)

  const [saved, setSaved] =
    useState(false);

  const [commentText,
    setCommentText] =
    useState("");
  const [commentList,
    setCommentList] =
    useState(comments);

  return (
    <div className="feed-post-card">

      {/* HEADER */}

      <div className="post-header">

        <div className="post-user">

          <div className="post-avatar">

            {authorAvatar ? (

              <img
                src={authorAvatar}
                alt=""
              />

            ) : (

              authorName.charAt(0).toUpperCase()

            )}

          </div>

          <div>

            <h4>
              {authorName}
            </h4>


            <div className="post-meta">

              <span>
                📍 {post.location}
              </span>

              <span>
                🕒 {
                  timeAgo(
                    post.createdAt
                  )
                }
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

      <div className="post-trip-origin">

        {post.tripTitle && (

          <button
            className="trip-origin-badge"
            onClick={() => {

              localStorage.setItem(
                "selectedTripId",
                String(post.tripId)
              );

              navigate("/trips");
            }}
          >

            🏔 Part of:

            <strong>
              {post.tripTitle}
            </strong>

          </button>

        )}

        <p className="post-description">
          {post.description}
        </p>

      </div>

      {/* IMAGES */}

      {post.images?.length > 0 && (
        <div
          className={`post-images image-count-${post.images.length}`}
        >

          {post.images
            .slice(0, 3)
            .map(
              (
                image: string,

              ) => (
                <img
                  key={image}
                  src={image}
                  alt=""
                />
              )
            )}

          {post.images.length > 3 && (
            <div className="more-images">
              +{post.images.length - 3}
            </div>
          )}

        </div>
      )}

      {/* ACTIONS */}

      <div className="post-actions">

        <button
          onClick={async () => {

            if (!post._id) {

              setReactionCount(
                liked
                  ? reactionCount - 1
                  : reactionCount + 1
              );

              setLiked(!liked);

              return;
            }

            if (!user) return;

            try {

              const updated = await likePost(
                post._id,
                user.uid
              );

              setReactionCount(updated.likes);

              setLiked(
                updated.likedBy.includes(user.uid)
              );

            } catch (err) {

              console.error(err);

            }

          }}
        >
          <FaHeart
            color={
              liked
                ? "#a48ce0"
                : undefined
            }
          />

          {reactionCount}
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

        <button
          onClick={() => {

            if (!saved) {

              const alreadySaved =
                mockSavedPosts.some(
                  (savedPost) =>
                    (savedPost._id || savedPost.id) ===
                    (post._id || post.id)
                );

              if (!alreadySaved) {

                mockSavedPosts.unshift(
                  post
                );

              }

              setSaved(true);

            }

          }}
        >
          <FaRegBookmark />

          {saved
            ? "Saved"
            : "Save"}
        </button>

      </div>

      {/* COMMENTS */}

      {showComments && (
        <div className="comments-section">
          {commentList.map(

            (
              comment: any,
              index: number
            ) => (
              <div
                key={comment._id || index}
                className="comment-item"
              >
                <strong>
                  {comment.user || comment.username}
                </strong>

                <p>
                  {comment.text}
                </p>
              </div>
            )
          )}

          <div className="comment-box">

            <div className="comment-avatar">
              {authorName.charAt(0).toUpperCase()}
            </div>

            <div className="comment-input-wrapper">

              <input
                value={commentText}
                onChange={(e) =>
                  setCommentText(e.target.value)
                }
                placeholder="Share your thoughts..."
              />


              <button
                className="comment-post-btn"

                onClick={async () => {

                  if (!commentText.trim()) return;

                  if (!post._id) return;

                  if (!user) return;

                  try {

                    const updated = await addComment(
                      post._id,
                      {
                        firebaseUid: user.uid,
                        username: user.displayName,
                        photoURL: user.photoURL,
                        text: commentText,
                      }
                    );

                    setCommentList(updated.comments);

                    setCommentText("");

                  } catch (err) {

                    console.error(err);

                  }

                }}

              >

                Post

              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default FeedPostCard;