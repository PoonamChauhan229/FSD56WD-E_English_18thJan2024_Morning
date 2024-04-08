const path=require('path')
console.log(1,__dirname) //D:\NodeJs\02node  > current directory
console.log(2,__filename)//2 D:\NodeJs\02node\01app.js > current filename

console.log(3,path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))

console.log(4,path.join(__dirname,".."))

console.log(5,path.join(__dirname,"../.."))

console.log(6,path.join(__dirname,"./node_modules"))

console.log(7,path.join(__dirname,__filename))

console.log(8,path.join(__dirname,"./app.js"))

console.log(9,path.join(__dirname,"app.js"))

//https://nodejs.org/api/path.html

// 1 D:\NodeJs\02node
// 2 D:\NodeJs\02node\01app.js
// 3 \foo\bar\baz\asdf
// 4 D:\NodeJs
// 5 D:\
// 6 D:\NodeJs\02node\node_modules
// 7 D:\NodeJs\02node\D:\NodeJs\02node\01app.js
// 8 D:\NodeJs\02node\app.js
// 9 D:\NodeJs\02node\app.js