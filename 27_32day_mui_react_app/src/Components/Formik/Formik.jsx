import React from 'react'
import BasicForm from './BasicForm'
import AddMovie_Formik from './AddMovie_Formik'

const Formik = () => {
  return (
   <>
    <h5>Formik</h5>
    <BasicForm/>
    <hr/>
    <AddMovie_Formik/>
   </>
  )
}

export default Formik

// 2 libraries
  //>Formik > managing data +form validation +form submission+errors
  //>Yup > formik supports yup > advance validation
  // https://formik.org/docs
  // npm install formik --save
