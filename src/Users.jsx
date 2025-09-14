import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/users")
  //     .then(res => res.json())
  //     .then(data => setUsers(data))
  //     .catch(err => console.error(err));
  // }, []);

  return (
    <div>
      {/* <h2>Users List</h2> */}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <img src={user.image} alt={user.name} width="50" height="50" style={{ borderRadius: "50%" }} />
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
