import React,{useEffect, useState} from 'react';
import Person from '../components/person/Person';
import Menu from '../components/menu/Menu';
import TimeZoneAPI from '../components/timezone/Timezone';


function Main() {
  let props = {first_name: "Karthik", age: 29, data:[{"skill":"java","rating":4}, {"skill":"DSA", "rating":4}, 
  {"skill":"HTML", "rating":4}, {"skill":"CSS", "rating":4}]}

    let [name, setName] = useState("Ranjith Kumar");
    let [lat, setLat] = useState("11.67");
    let [lng, setLng] = useState("76.89");
    
    useEffect(() =>{
    const timer = setInterval(() =>{
        setName("Karthik");
        setLat("9.087");
        setLng("67.67");
    }, 5000)
     return () => clearInterval(timer);
    }, []);

    localStorage.setItem("username","Karthik");
    localStorage.setItem("json" , JSON.stringify(props));
    
    let btnOnclick = (()=>{
      console.log ("Button click");
    })
    
    useEffect(() =>{

      const test = (() => {
        return "Nothing"
      })
      let innerHTML = `<p>${test()}</p>`
      document.getElementById("top").innerHTML = innerHTML;

    });

    return (
      <div className="Resume">
        <div className="Top" id='top'>
        <button onClick={btnOnclick()}>Login</button>
        </div>
        <div className='Bottom'>
          <div className='Left'>
            <p>Name {name}</p>
            <p>Geoname UserName {process.env.GEONAME_USERNAME}</p><Menu {...props}/></div>
            <div className='Right'><Person token={'Backend'} age={29}/>
            <TimeZoneAPI lat={lat} lng={lng}/></div>
        </div>
      </div>
    );
  }
  
  export default Main;