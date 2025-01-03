import { useParams } from "react-router-dom"

export const Params =()=>{
    let {id,item} = useParams()
    return(
        <div>
            <p>Params Page</p>
            <p>{id}{item}</p>
        </div>
    )
}