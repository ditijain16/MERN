import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"

export default function Home(){
    const counterVal = useSelector((state) => state.counter);
    const details = useSelector((state)=> state.myDetails);
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

    const storeDetails = () => {
        dispatch({
            type:"saveDetails",
            data : {"name":"diti","email":"ditivjain8@gmail.com"}
        })
    }

    return(
        <div>
            <Header/>
            <p>This is the home page</p><br/>
            <h1>This is from Redux {counterVal}</h1>
            <button onClick={add}>Add</button><br/>
            <button onClick={sub}>Subtract</button>

            <div>
                <p>
                    Storing my Details
                </p>
                <button onClick={storeDetails}>Store Details</button>
                <h1>Redux details are stored by: {details.name}</h1>
                <h2>Email: {details.email}</h2>
            </div>
        </div>
    )
}