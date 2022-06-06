import Button from './Button'

const GetFeedback = ({updateGood, updateNeutral, updateBad}) => {
	return (
		<>
		  <Button text="good" onClick={updateGood} />
		  <Button text="neutral" onClick={updateNeutral} />
		  <Button text="bad" onClick={updateBad} />
		</>
	)
}

export default GetFeedback