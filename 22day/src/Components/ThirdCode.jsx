export const ThirdCode=({pic,nickName})=>{
    console.log(pic,nickName)
    // console.log(props)//object
    //const name="Salman"
    return(
        <>
        {/* <h1>Second Message</h1> */}
        <div className="border">
            <img src={pic} alt="" className="profile-pic"/>
          
            <h3>My Name is {nickName}</h3>
        </div>
        </>
    )
}