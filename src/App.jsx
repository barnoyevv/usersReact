import { useState } from "react"
import { nanoid } from 'nanoid'

function App() {
	const [users, setUsers] = useState([])
	const [form, setForm] = useState({})
	const [search, setSearch] = useState("")
	const handleChange =(event)=>{
		const {name, value} = event.target;
		setForm({...form, [name]:value})
	}
	const handleSubmit =(event)=> {
		event.preventDefault();
		let id = nanoid()
		let payload = {...form, id}
		users.push(payload)
		setUsers([...users])
		event.target.reset();
	}
	const deleteUser =(id)=>{
		let new_users = users.filter(item => item.id !== id)
		setUsers([...new_users])
	}
	return (
		<>
			<div className="container">
				<div className="row mt-5">
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-12">
								<input type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)} className="form-control mb-2 border-success"/>
							</div>
						</div>
						<table className="table table-bordered border-success">
							<thead className="text-center">
								<tr>
									<td>#</td>
									<td>ID</td>
									<td>Name</td>
									<td>Lastname</td>
									<td>Age</td>
									<td>Phone</td>
									<td>Email</td>
									<td>Action</td>
								</tr>
							</thead>
							<tbody className="text-center table-success">
								{
									users.filter((item)=>{
										let name = item?.name?.toLocaleLowerCase()
										let lastname = item?.lastname?.toLocaleLowerCase()
										let age = item?.age?.toLocaleLowerCase()
										let phone = item?.phone?.toLocaleLowerCase()
										let email = item?.email?.toLocaleLowerCase()
										let find = search.toLocaleLowerCase()
										if (name.includes(find) || lastname.includes(find) || age.includes(find) || phone.includes(find) || email.includes(find)) {
											return item
										}
									}) ?.map((item, index) => {
										return (
											<tr key={index}>
												<td>{index + 1}</td>
												<td>{item.id}</td>
												<td>{item.name}</td>
												<td>{item.lastname}</td>
												<td>{item.age}</td>
												<td>{item.phone}</td>
												<td>{item.email}</td>
												<td>
													<button className="btn btn-danger" onClick={()=>deleteUser(item.id)}><i className="fa-solid fa-trash-can"></i></button>
												</td>
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
									<input type="text" name="name" required onChange={handleChange} placeholder="Name" className="form-control my-2"/>
									<input type="text" name="lastname" required onChange={handleChange} placeholder="Lastname" className="form-control my-2"/>
									<input type="number" name="age" required onChange={handleChange} placeholder="Age" className="form-control my-2"/>
									<input type="phone" name="phone" required onChange={handleChange} placeholder="Phone number" className="form-control my-2"/>
									<input type="email" name="email" required onChange={handleChange} placeholder="Email" className="form-control my-2"/>
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
