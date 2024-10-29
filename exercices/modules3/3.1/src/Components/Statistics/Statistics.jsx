import StatisticLine from "./StatisticLine";


function Statistics({feedbacks}) {
  const all = feedbacks.good + feedbacks.neutral + feedbacks.bad
  const average = (feedbacks.good - feedbacks.bad) / all
  const positive = (feedbacks.good / all) * 100
  if (all === 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <table>
      <StatisticLine text="good" value={feedbacks.good} />
      <StatisticLine text="neutral" value={feedbacks.neutral} />
      <StatisticLine text="bad" value={feedbacks.bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} />
      </table>
      
      
    </div>
  );
}

export default Statistics;