import { useNavigate } from "react-router-dom"

export const Errorpage =()=>{
    const navigate = useNavigate();
    return(
        <div>
            <p>404</p>
            <p>Oops page not found</p>
            <button onClick={()=>{navigate("/header")}}>Go to Homepage</button>
        </div>
    )
}