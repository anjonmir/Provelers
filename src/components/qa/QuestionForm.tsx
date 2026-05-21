import { useState } from "react";

type Props = {
  onAddQuestion: (question: string) => void;
};

function QuestionForm({
  onAddQuestion,
}: Props) {
  const [question, setQuestion] =
    useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!question.trim()) return;

    onAddQuestion(question);

    setQuestion("");
  };

  return (
    <div className="qa-form-card">
      <h3>Ask a Travel Question</h3>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Example: Best places to visit in Sylhet?"
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
        />

        <button
          type="submit"
          className="primary-btn mt-3"
        >
          Post Question
        </button>
      </form>
    </div>
  );
}

export default QuestionForm;