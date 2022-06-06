const MostVotes = ({ anecdotes, votes, mostVotes}) => {
	return (
		<>
		   <h2>Anecdote with the most votes</h2>
		   <p>{anecdotes[votes.indexOf(mostVotes)]}</p>
		</>
	)
}

export default MostVotes
