import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";

export default function About(){
    const counterVal = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const add = () => {
        dispatch({
            type:"add"
        })
    }

    const sub = () => {
        dispatch({
            type:"sub"
        })
    }
    return(
        <div>
            <Header/>
            This is the about page
            <h1>This is from Redux {counterVal}</h1>
            <button onClick={add}>Add</button><br/>
            <button onClick={sub}>Subtract</button>
        </div>
    )
}