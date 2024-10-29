function StatisticLine({ text, value }) {
  return (
    <div>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
      
    </div>
  );
}

export default StatisticLine;