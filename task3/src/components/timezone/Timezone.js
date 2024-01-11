import React,{Component} from "react";

//class TimeZoneAPI extends React.Component
class TimeZoneAPI extends Component{

    constructor(props){
        super(props)
        this.state = {sunrise: "", sunset: ""}
    }

    shouldComponentUpdate(updatedProps, updatedState){
        console.log("shouldComponentUpdate")
        return true
    }
    render(){
        console.log("render")
       let html = <div>
        <p>SunRise: {this.state.sunrise} : SunSet: {this.state.sunset}</p>
        <p>Lat: {this.props.lat} : Lng: {this.props.lng}</p>
        {skill.data.map(val =>{})}
        </div>;
        return html;
    }

    componentDidMount = () =>{
        console.log("componentDidMount")
        this.setState({"sunrise":"7.20am"});
        this.setState({"sunset":"5:40pm"});

        this.timer = setInterval(() =>{
            this.setState({"sunrise":"6.20am"});
            this.setState({"sunset":"6:40pm"});  
        }, 10000)

    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }
}

export default TimeZoneAPI;