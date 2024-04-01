import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';

const AddMovie_Formik = () => { 
    const navigate=useNavigate()   
    const formValidationFormik=yup.object({
      name:yup.string().required("Fill the correct detail"),
      poster:yup.string().required("Fill the correct detail"),
      rating:yup.number().required().min(1).max(10),
      summary:yup.string().required(),
      trailer:yup.string().required()
    })   
      const addmovies=async(movie)=>{
        const data=await fetch('https://65111d14829fa0248e3f850c.mockapi.io/movies/',{
          method:"POST",
          body:JSON.stringify(movie),
          headers:{
            "Content-Type":"application/json"
          }
        })
        const res=await data.json()
        console.log(res)
      }



      const formik=useFormik({
        // it will take initial values
        initialValues:{
            name:"",
            poster:"",
            rating:"",
            summary:"",
            trailer:""
        },
        validationSchema:formValidationFormik,
        onSubmit:(values)=>{
            console.log(values)
            addmovies(values)
        }
    })
  return (

    <>
       {/* MUI Form Add Movie */}
    <form onSubmit={formik.handleSubmit}>
    <Box sx={{width:"100%"}}>  
    <div style={{display:"flex"}}>    
      <TextField 
      sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
      id="filled-basic" label="MovieName" variant="filled" value={formik.values.name} name="name"
      onChange={formik.handleChange} onBlur={formik.handleChange} />
       {/* {formik.touched.name?formik.errors.name:""} */}
       <p>{formik.errors.name}</p>
       </div>
      <TextField  sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
      id="filled-basic" label="PosterURL" variant="filled" value={formik.values.poster} name="poster"
      onChange={formik.handleChange} onBlur={formik.handleChange}/>
       <p>{formik.errors.poster}</p>

      <TextField  sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
       id="filled-basic" label="Rating" variant="filled" value={formik.values.rating} name="rating" onChange={formik.handleChange} onBlur={formik.handleChange}/>
      <TextField  sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
      id="filled-basic" label="Summary" variant="filled" value={formik.values.summary} name="summary" onChange={formik.handleChange} onBlur={formik.handleChange}/>
       <p>{formik.errors.summary}</p>

      <TextField  sx={{
        width:"50%",
        margin:"1% 25% 1% 25%"
      }}
      id="filled-basic" label="Trailer" variant="filled" value={formik.values.trailer} name="trailer" onChange={formik.handleChange} onBlur={formik.handleChange}/>
       <p>{formik.errors.trailer}</p>

      <Button 
        sx={{
          width:"10%",
          margin:"1% 1% 1% 38%"
        }} 
      variant="contained" type="submit">Add Movie</Button>
        
        
        

    <Button 
    sx={{
      width:"10%",
    }} 
    
    variant="contained" onClick={()=>navigate(-1)}>Back</Button>
    
    </Box>
    </form>
    </>
  )
}

export default AddMovie_Formik