type Props = {
  budget: number;
  setBudget: (value: number) => void;
};

function BudgetCalculator({
  budget,
  setBudget,
}: Props) {
  return (
    <div className="planner-card">
      <h4>Budget Calculator</h4>

      <p>
        Estimate your travel expenses.
      </p>

      <input
        type="range"
        min="1000"
        max="50000"
        value={budget}
        onChange={(e) =>
          setBudget(Number(e.target.value))
        }
        className="form-range mt-4"
      />

      <div className="budget-amount">
        ৳ {budget.toLocaleString()}
      </div>
    </div>
  );
}

export default BudgetCalculator;