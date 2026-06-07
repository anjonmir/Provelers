function RecentQuestions() {
  const questions = [
    "Best food near Lalbagh Fort?",
    "Any hidden gems in Rajshahi?",
    "Safe places for solo travelers?",
  ];

  return (
    <div className="map-card glass-card">

      <h5>Recent Questions</h5>

      {questions.map(
        (question, index) => (
          <div
            key={index}
            className="question-item"
          >
            {question}
          </div>
        )
      )}

    </div>
  );
}

export default RecentQuestions;