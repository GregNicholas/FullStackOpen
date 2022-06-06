import StatisticsLine from './StatisticsLine'

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const percentPositive = good / all * 100

  return (
    <>
	  <table>
		<tbody>
			<StatisticsLine text="good" value={good} />
			<StatisticsLine text="neutral" value={neutral} />
			<StatisticsLine text="bad" value={bad} />
			<StatisticsLine text="all" value={all} />
			<StatisticsLine text="average" value={average} />
			<StatisticsLine text="positive" value={percentPositive} />
		</tbody>
	    </table>
    </>
  )
}

export default Statistics