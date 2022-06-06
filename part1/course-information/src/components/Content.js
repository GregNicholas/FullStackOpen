import Part from './Part'

const Content = ({parts}) => {
const partDisplays = parts.map(part => {
	return <Part key={part.name} part={part} />
})
  return (
    <>
      {partDisplays}
    </>
  )
}

export default Content