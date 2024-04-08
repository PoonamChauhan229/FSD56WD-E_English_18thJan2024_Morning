// import our core node modules
// require()
const fs=require('fs')
// fs.writeFile() > Asynchronus Version
// fs.writeFileSync() > Synchronous Version

fs.writeFileSync('notes.txt',"Ths is the first file")

fs.writeFileSync('notes.txt',"Ths is the updated file")

//Challenge ||Task
//fs.appendFileSync(path, data)// 10 min
fs.appendFileSync('notes.txt',"Hello WOrld")

//imported the file
//require('./utilis')
// console.log(name)//name is not defined

// const name=require('./utilis')
// console.log(name)

const {name,add}=require('./utilis')
console.log(name)
console.log(add(4,2))
let total=add(4,2)
console.log(total)

const getText=require('./text')
console.log(getText())


const validator=require('validator')
console.log(validator.isEmail('poonam@gmail.com'))//true
console.log(validator.isEmail('poonamgmail.com'))//false @ is missing

console.log(validator.isURL('https://www.npmjs.com/package/validator'))//false
console.log(validator.isURL('ikkjkjkjk'))//false


// challenge > chalk pakage.
// chalk@2.4.1
const chalk=require('chalk')
console.log(chalk.blue("Hello"))
console.log(chalk.blue('Hello') + ' World' + chalk.red('!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));