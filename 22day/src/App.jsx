import './App.css'
import {FirstCode} from './Components/FirstCode'
import { SecondCode } from './Components/SecondCode'

function App() {
  return (
    <div className='App'>
      {/* <h1>App Component Loading on the Page</h1> */}
     {/* {FirstCode()} */}
     {/* HTML */}
     {/* <FirstCode></FirstCode> */}

     {/* Prefered One */}
     {/* <FirstCode/> */}
    {/* Pass the argumnets || Properties >Props */}
     <SecondCode name="Salman" nickname="Tiger" />
     <SecondCode name="Akhilesh" nickname="Akhi" imgname="data:image/png;base64,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"/>
   </div>
  )
}

export default App

//named export  > {componentname}
// export default 
