import {useState} from 'react';

const Accordian = (data) => {
	const {question, answer} = data;
	const [isOpen, setIsOpen] = useState(false);
	return (

		<div className="row pt-3 border shadow p-4 mb-3">
			<div className="d-flex justify-content-between w-100">
				<h5>{question}</h5>
				<button className="btn btn-outline-primary" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? '-' : '+'}
				</button>

			</div>
			{isOpen && <p>{answer}</p>}
			
		</div>
	);
}

export default Accordian;