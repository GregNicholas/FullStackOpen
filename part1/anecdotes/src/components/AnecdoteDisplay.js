const AnecdoteDisplay = ({anecdotes, selected, votes}) => {
	return (
		<>
			<p>{anecdotes[selected]}</p>
	  		<p>has {votes[selected]} votes</p>
		</>
	)
}

export default AnecdoteDisplay
