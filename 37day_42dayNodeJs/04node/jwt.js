console.log("jwt")
var jwt = require('jsonwebtoken');
// sign method jwt.sign()
// >object
// >string > random series of charcters
// >{expiresIn}
const token=jwt.sign({_id:"fsd123456"},'nodejs',{expiresIn:"7days"})
console.log(token)
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJmc2QxMjM0NTYiLCJpYXQiOjE3MTI2NDQyMjAsImV4cCI6MTcxMzI0OTAyMH0.Z_1Bo2Fpq_sMW06NxIANOMkVGLL_ukLSm4455UT86kg

//verifying the token
const data=jwt.verify(token,'nodejs')
console.log(data)