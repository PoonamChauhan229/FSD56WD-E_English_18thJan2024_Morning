// h1 tag document.createElement('')
// React
// React.createElement('')
// 3 args > tag, attribute,text/content

const heading=React.createElement('h1',{id:"title"},"Hello World from React")
//React is not defined

const root=ReactDOM.createRoot(document.getElementById('root'))
//render
root.render(heading)

// Nested Structure
//div
     // div> Parent
                   // h1> child1
                   // h1 >child2

const parent=React.createElement('div',{id:"grandparent"},
React.createElement('div',{id:"parent"},
[
    React.createElement('h1',{id:"child1"},"Hi, i am first Child"),
    React.createElement('h1',{id:"child2"},"Hi i am second child")

]))


console.log(parent)
root.render(parent)

// Run The commnads
// ...>
//commands > node> node.org
// npm create vite@latest
// > project name >my-project
// > react + javacript
// cd my-project
// npm install
// npm run dev

// Pls come with this set up