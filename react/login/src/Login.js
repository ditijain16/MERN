import { useState } from "react";
import "./login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validate = async () => {
        const response = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        console.log(data);

        if (email ===""){
            alert("please enter email");
        } else if(password ===""){
            alert("please enter password");
        }else if (response.ok) {
            alert("Login successful!");
        } else {
            alert("Login failed, user not found");
        }
    };

    return (
        <div>
            <div>Email: {email}</div>
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div>Password: {password}</div>
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={validate}>
                Submit
            </button>
        </div>
    );
}











// import { useState } from "react"


// export default function Login(){
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const validate = () => {
//         if (email === ""){
//           alert("email field is required")
//         }else if (password === ""){
//           alert("password is required")
//         }else {
//           alert("we are good to go")
//         }
//       }
      
//     return(
//         <div>
//             Email:{email}
//             <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}></input>
//             Password: {password}
//             <input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input>
//             <button onClick={validate}>Submit</button>
//         </div>
//     )
// }