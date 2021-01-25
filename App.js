import data from './data';
import Accordian from './components/Accordian'
const App = () => {
	return (
			<div className="container-fluid">
				<div className="row rounded mt-5">
					<div className="offset-2 col-8 bg-light d-flex p-0">
						<div style={{ width: '35%'}} className="p-4">
							<h2>Questions And Answers About Login</h2>
						</div>
						<div style={{ width: '62%'}} className="mt-2">
							{data.map(d => <Accordian key={d.id} {...d} /> )}
						</div>
					</div>
				</div>
			</div>
		)
}

export default App;