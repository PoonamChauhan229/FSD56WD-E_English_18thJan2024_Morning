import Parent02 from './UseContext_Without_Provider/Parent02'
import MainApp from './UseContext_With_Provider/MainApp'

const UseContextMainParent01 = () => {
 
   return (
    <>
      <div>UseContextMainParent01-UseContext WIthout  Provider</div>
      <br/>
    <Parent02/>
    <br/><hr/>

    <div>UseContext With Provider</div>
     <MainApp/>
    
    </>
  )
}

export default UseContextMainParent01


//UseContextMainParent01 (data) have 
//  ||
//Parent02   
//  ||
//Child03    
//  ||
//NewBorn04  (data)   receive => use it


// useContext > Hook > React
// centrailised store > data > use 

//Steps:

// Just , You want to use the data

//1- createContext > provide the data
//2- useContext >  provide the context which is been created || store accessiblity 


// data, u want to modify
//1- createContext
//2- data +modify data > useState Hook
//3- provide the Context + pass the value
//4- useContext


//create it inside an utilis folder

