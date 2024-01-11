import { useRouteError } from "react-router-dom";

const Errorpage = () =>{
    const error = useRouteError();
    console.error(error)
    return(
        <div>Unknown Page</div>
    )
}

export default Errorpage;