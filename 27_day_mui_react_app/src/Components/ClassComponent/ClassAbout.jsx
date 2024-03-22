// ClassAbout
import React
 from "react";
class ClassAbout extends React.Component{
    constructor(props){
        super(props)        
        this.state={
            userInfo:{
                name:"Dummy Name",
                login:"Login UserName"
            }
        }
        console.log("Child Constructor Called")
        
    }

    async componentDidMount(){
        console.log("Child componentDidMount Called")
        const data=await fetch('https://api.github.com/users/PoonamChauhan229')
        const res=await data.json()
        // console.log(res)
        //Best place to make an API Call
        // setstate
        this.setState({
            userInfo:res
        })

        this.timer=setInterval(()=>{
            console.log("1000")
        },1000)
    }

    componentDidUpdate(){
        console.log("Child componentDidUpdate Called")
    }

    componentWillUnmount(){
        console.log("Child componentWillUnmount Called")
        clearInterval(this.timer)
    }
    render(){
        console.log("Child Render Called")
        return<>
        <h5>Class New About Component</h5>
        <h3>Name is {this.props.name} and Age is {this.props.age}</h3>
        <hr/>
        <hr/>
        <h3>Github User Details</h3>
       <h3><img src={this.state.userInfo.avatar_url} alt="" /></h3>
       <h4>{this.state.userInfo.name}</h4>
       <h4>{this.state.userInfo.login}</h4>
        </>
    }

}
export default ClassAbout;