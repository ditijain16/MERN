import { useState } from 'react';

export default function UsersList() {
  const [userList, setUserList] = useState([]);

  async function getData() {
    try {
      let res = await fetch("https://reqres.in/api/users?page=1"); 
      let json = await res.json();
      setUserList(json.data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
      <button onClick={getData}>Click</button>
      {userList.map((obj,index) => (
        <div>
            <div><ul><li style={{display:"flex",alignItems:"center",space:""}}><img src={obj.avatar} style={{height:"80px",width:"80px",borderRadius:"90%", marginRight:"20px",alignItems:"center",justifyContent:"center"}}/>{obj.first_name} {obj.last_name}</li></ul></div>
         
        </div>
      ))}
    </div>
  );
}









// import React, { useState } from 'react';

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   const handleChange = (event) => {
//     const page = event.target.value;
//     const url = `https://reqres.in/api/users?page=${page}`;

//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         setUsers(data.data); 
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   const userList = [];
//   for (let i = 0; i < users.length; i++) {
//     userList.push(
//       <li key={users[i].id}>
//         <img src={users[i].avatar} style={{ width: '50px', height: '50px',borderRadius: '70%' }} />
//         {users[i].first_name} {users[i].last_name} ({users[i].email})
//       </li>
//     );
//   }

//   return (
//     <div>
//       <h1>User List Page</h1>
//       <select onChange={handleChange} defaultValue="">
//         <option value="" disabled>Select a page</option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//       </select>

//       <ul>
//         {userList}
//       </ul>
//     </div>
//   );
// };

// export default UserList;
