export const SecondCode=(props)=>{
    console.log(props)//object
    //const name="Salman"
    return(
        <>
        {/* <h1>Second Message</h1> */}
        <div className="border">
            <img src="https://www.pngfind.com/pngs/m/488-4887957_facebook-teerasej-profile-ball-circle-circular-profile-picture.png" alt="" className="profile-pic"/>
            <h2>Hi,{props.name} ...How are you?</h2>
            <h3>Nickname is {props.nickname}</h3>
            <img src={props.imgname} alt="" className="profile-pic" />
        </div>
        </>
    )
}