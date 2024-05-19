import { useState } from "react"


function App() {
	const [users, setUsers] = useState([])

	const handleSubmit =(event)=> {
		event.preventDefault();
		let user = {
			name: event.target[0].value,
			lastname: event.target[1].value,
			age: event.target[2].value,
			phone: event.target[3].value,
			email: event.target[4].value
		}
		users.push(user)
		setUsers([...users])
		event.target[0].value = ""
		event.target[1].value = ""
		event.target[2].value = ""
		event.target[3].value = ""
		event.target[4].value = ""
	}
	return (
		<>
			<div className="container">
				<div className="row mt-5">
					<div className="col-md-8">
						<table className="table table-bordered border-success">
							<thead className="text-center">
								<tr>
									<td>#</td>
									<td>Name</td>
									<td>Lastname</td>
									<td>Age</td>
									<td>Phone</td>
									<td>Email</td>
								</tr>
							</thead>
							<tbody className="text-center table-success">
								{
									users?.map((item, index) => {
										return (
											<tr key={index}>
												<td>{index + 1}</td>
												<td>{item.name}</td>
												<td>{item.lastname}</td>
												<td>{item.age}</td>
												<td>{item.phone}</td>
												<td>{item.email}</td>
											</tr>
										)
									})
								}
							</tbody>
						</table>
					</div>
					<div className="col-md-4">
						<div className="card">
							<div className="card-header bg-success text-white">
								<h3 className="text-center">Add user</h3>
							</div>
							<div className="card-body">
								<form onSubmit={handleSubmit} id="form">
									<input type="text" placeholder="Name" className="form-control my-2"/>
									<input type="text" placeholder="Lastname" className="form-control my-2"/>
									<input type="number" placeholder="Age" className="form-control my-2"/>
									<input type="number" placeholder="Phone number" className="form-control my-2"/>
									<input type="email" placeholder="Email" className="form-control my-2"/>
								</form>
							</div>
							<div className="card-footer">
								<button type="submit" className="btn btn-primary" form="form">add user</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default App
