import React from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer.js"


function App() {
	return (
		<div className="App">
			<Nav />
			<HogsContainer hogs = {hogs} />
		</div>
	);
}

export default App
















// function App() {
// 	const [people, setPeople] = useState([])

// 	const [searchTerm, setSearchTerm] = useState('')

// 	useEffect(() => {
// 		console.log('doing the fetch!')
// 		fetch('https://swapi.dev/api/people')
// 		.then(r => r.json())

// 		.then(potato) => console.log(potato) //r is being passed to potato
	
// 	}, [])
// }

// const seekUser = potato => {
// 	console.log(potato)
// }

// 	console.log('right before return!', people)
// 	return (
// 		<div className ="cool">
// 			<SearchTool />
// 			<Characters chars= {people.results}/>
// 		</div>
// 	)