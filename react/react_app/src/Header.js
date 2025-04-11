import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div>
            <ul>
                {/* <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li> */}
                <NavLink to="/home">Home</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/about">About</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to="/contact">Contact</NavLink>
            </ul>
        </div>
    )
}