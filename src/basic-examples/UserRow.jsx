function UserRow({id, first_name, last_name, email, avatar, deleteUser}){

    
    return (
        <tr>
            <td>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
            <td>
                <img src={avatar} />
            </td>
            <td>
                <button onClick={()=>deleteUser(id)}>DELETE</button>
            </td>
        </tr>
    )
}

export default UserRow;