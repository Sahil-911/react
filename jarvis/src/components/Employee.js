function Employee(props){
    return (
        <>
        < input  type = 'text' onChange = {(q) => 
            console.log(q.target.value)        }></input>
        <h3> the employee is here...And {props.name} is also.</h3>
        {/* <p>{props.role ? 'role: ' + props.role : 'No role'}</p> */}
        {props.role ? <p>{props.role}</p> : <p>No role</p>}
        </>
    )
}

export default Employee;