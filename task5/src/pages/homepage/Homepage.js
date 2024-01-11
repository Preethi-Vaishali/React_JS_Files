import { useParams, useSearchParams } from "react-router-dom";
import react, {useState, useEffect} from "react";


const Homepage = () =>{
    let [name, setName] = useState();
    let [age, setAge] =  useState();
    let [searchparam, setSearchparam] = useSearchParams();
    const params =[];

    for (let entry of searchparam.entries()) {
        params.push(entry);
    }
  


    const {userID} = useParams();
    useEffect(() =>{
        setName("Vaishali");
        setAge("24");
    })



    return(
        <div>
            <h1>Welcome</h1>
            <div>Name : {name}</div>
            <div>Age : {age}</div>
            <div> Path params : Userid : {userID}</div>
            {params.map(([key,value]) => <div>URL params : {key} : {value}</div>)}
            </div>
    )
}

export default Homepage;