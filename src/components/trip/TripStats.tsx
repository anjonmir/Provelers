.trip-section {
  padding: 120px 0;
}

.planner-header {
  text-align: center;
  margin-bottom: 60px;
}

.planner-header h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.planner-header p {
  color: var(--text2);
}

.planner-card {
  background: white;
  border-radius: 24px;
  padding: 30px;
  box-shadow: var(--shadow);
  height: 100%;
}

.planner-card h4 {
  margin-bottom: 10px;
}

.planner-card p {
  color: var(--text2);
}

.budget-amount {
  font-size: 2rem;
  font-weight: 700;
  margin-top: 20px;
  color: var(--primary);
}

.timeline-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;

  margin-top: 30px;
}

.timeline-controls button {
  width: 50px;
  height: 50px;

  border: none;

  border-radius: 50%;

  background: var(--primary);

  color: white;

  font-size: 1.4rem;
}

.timeline-controls span {
  font-size: 1.5rem;
  font-weight: 600;
}

.preference-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  margin-top: 20px;
}

.preference-grid button {
  border: none;

  background: var(--surface2);

  padding: 12px 18px;

  border-radius: 999px;

  transition: 0.3s;
}

.active-preference {
  background: var(--primary) !important;
  color: white;
}

.trip-summary-card {
  margin-top: 60px;

  background: linear-gradient(
    135deg,
    var(--primary),
    #3282b8
  );

  color: white;

  padding: 50px;

  border-radius: 30px;
}

.summary-grid {
  display: grid;

  grid-template-columns: repeat(3, 1fr);

  gap: 20px;

  margin-top: 30px;
}

.summary-grid div {
  background: rgba(255,255,255,0.1);

  padding: 24px;

  border-radius: 20px;
}

.summary-grid span {
  opacity: 0.8;
}

.summary-grid h4 {
  margin-top: 10px;
}

@media (max-width: 768px) {
  .planner-header h1 {
    font-size: 2.2rem;
  }

  .summary-grid {
    grid-template-columns: 1fr;
  }

  .trip-summary-card {
    padding: 30px;
  }
}