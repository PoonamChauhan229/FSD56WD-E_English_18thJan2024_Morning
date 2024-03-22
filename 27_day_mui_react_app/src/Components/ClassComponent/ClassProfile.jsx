//styling className instead of class
//class reseevred keyword > OOPS
//inform> extends React.Component
import React from "react";
import ClassAbout from "./ClassAbout";

class ClassProfile  extends React.Component{
    constructor(){
        super();
        //create a state
        this.state={
            count:0,
            count1:0,
            profileName:"Guvi Geek!!!"

        }
        console.log("Parent Constructor Called")
    }
    //  componentDidMount> API CAll

    componentDidMount(){
        console.log("Parent componentDidMount Called")
        //Best place to make an API Call
    }
    render(){
        console.log("Parent Render Called")
        return(
                <>
                    <h5>Class Profile Component</h5>
                    <h2>{this.state.profileName}</h2>
                    <h4>Count:{this.state.count}</h4>
                    <h4>NewCount:{this.state.count1}</h4>
                    {/* updating the state */}
                    <button
                    onClick={()=>this.setState({
                        count:this.state.count+1,
                        count1:this.state.count1+2
                    })}
                    >Incre-Count</button>

                    <ClassAbout name="First Child" age="35"/>
                </>
        )
    }
}

export default ClassProfile;