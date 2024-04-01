import { useFormik } from 'formik';
import * as yup from 'yup';
const BasicForm = () => {

    const formValidationFormik=yup.object({
        name:yup.string().required().min(3,"Atleast 3 characters").max(8,"Maximum 8 Characters Allowed"),
        email:yup.string().min(8,"Atleast 8 charcters").required().max(20,"Max 15 characters"),
        password:yup.string().min(8,"Need a strong password").required().max(12,"Too Long")
    })

    const formik=useFormik({
        // it will take initial values
        initialValues:{
            name:"",
            email:"",
            password:""
        },
        
        validationSchema:formValidationFormik,

        onSubmit:(values)=>{
            console.log(values)
        }
    })
  return (
    <>        
     <h1> BasicForm</h1> 
     <form onSubmit={formik.handleSubmit}>
        <input type="text" name="name" id="" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleChange}/> 
        {formik.errors.name}
         <br/>
        <input type="email" name="email" value={formik.values.email} id="" onChange={formik.handleChange} onBlur={formik.handleChange}/>
        {formik.errors.email}
        <br/>
        {/* Password */}
        <input type="password" name="password" value={formik.values.password} id="" onChange={formik.handleChange} onBlur={formik.handleChange}/>
        {formik.errors.password}
        <br/>

        <button type='submit'>Submit</button>
     </form>

     {/* Just to see */}
    {JSON.stringify(formik.values)}
    {JSON.stringify(formik.errors)}
    <hr/>
    </>
  )
}
export default BasicForm

// formik
//useFormik()

//validation > yup work with formik
//npm install yup --save