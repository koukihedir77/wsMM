import { Navigate} from "react-router-dom"


const Privateroute=({children, auth})=>{
    return(
       <div>
        {
            auth ? children : <Navigate to='/'/>
        }
       </div>
    )
}

export default Privateroute