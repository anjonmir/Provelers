import { useState } from "react";

import {
  FaArrowUp,
  FaRegCommentDots,
} from "react-icons/fa";

type Props = {
  question: string;
};

function AnswerCard({ question }: Props) {
  const [votes, setVotes] = useState(0);

  return (
    <div className="answer-card">
      <div className="answer-top">
        <div>
          <h4>{question}</h4>

          <p>
            Travelers recommend visiting during
            winter season for the best
            experience.
          </p>
        </div>

        <button
          className="vote-btn"
          onClick={() =>
            setVotes(votes + 1)
          }
        >
          <FaArrowUp />

          <span>{votes}</span>
        </button>
      </div>

      <div className="answer-footer">
        <span>
          <FaRegCommentDots />

          12 Answers
        </span>

        <span>Posted by Traveler</span>
      </div>
    </div>
  );
}

export default AnswerCard;