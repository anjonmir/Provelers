import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import QuestionForm from "./QuestionForm";
import AnswerCard from "./AnswerCard";
import PopularTopics from "./PopularTopics";

import "./qa.css";

function QAFeed() {
  const [questions, setQuestions] =
    useState([
      "What are the best places in Cox's Bazar?",
      "How much budget is needed for Sajek trip?",
      "Best food places in Old Dhaka?",
    ]);

  const addQuestion = (
    question: string
  ) => {
    setQuestions([
      question,
      ...questions,
    ]);
  };

  return (
    <section className="qa-section">
      <Container>
        <div className="qa-header">
          <h1>Travel Community Q&A</h1>

          <p>
            Ask questions and get answers from
            travelers.
          </p>
        </div>

        <Row className="g-4">
          <Col lg={8}>
            <QuestionForm
              onAddQuestion={addQuestion}
            />

            <div className="qa-feed-list">
              {questions.map(
                (question, index) => (
                  <AnswerCard
                    key={index}
                    question={question}
                  />
                )
              )}
            </div>
          </Col>

          <Col lg={4}>
            <PopularTopics />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default QAFeed;