import './App.css'
import {Main} from './Components/Main'
import { ThirdCode } from './Components/ThirdCode'
import { students } from './utils/constants'

function App() {
 
  return (
    <div className='App'>
      {/* <Main/> */}
      {/* <ThirdCode name="Nick" nickname="nancy"/> */}

      {/* <ThirdCode name="Poonam" nickname="olive"/> */}
      {/* map method */}

      {
        // students.map((element)=>(<ThirdCode nickName={element.nickName} pic={element.pic}/>))

        //   students.map((element)=>{
        //   return <ThirdCode nickName={element.nickName} pic={element.pic}/>
        // })
        
        // spread operator 
        students.map((element)=>(<ThirdCode {...element}/>))

      }
   </div>
  )
}

export default App

//named export  > {componentname}
// export default 
