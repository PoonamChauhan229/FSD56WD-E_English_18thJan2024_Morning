let username=document.getElementById('username')
let email=document.getElementById('email')
let url = `https://652e7b520b8d8ddac0b1761f.mockapi.io/users`;
let itemlist=document.getElementById('itemlist')

function submitBtn(){
    console.log(1)
    console.log(username.value,email.value)
    createUser(username.value,email.value)
}

async function createUser(value1,value2) {
    let newUser = {
      name: value1,
      email: value2,
    };
    let res = await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      let data=await res.json()
      console.log(data)
      const {id}=data

    getUserSpecificData(id);
}

//   Part2 : FETCHING THE DATA AND DISPLAY IN TABLE

// table
function createTableRow(value1,value2,id){
    let tr =document.createElement('tr')
    let td1=document.createElement('td')
    td1.setAttribute('id',`name${id}`)
    td1.innerHTML=value1

    let td2=document.createElement('td')
    td2.setAttribute('id',`email${id}`)
    td2.innerHTML=value2

    let td3=document.createElement('td')
    td3.innerHTML=`
                    <button class="btn btn-danger" type="button"><i class="bi bi-archive-fill"></i></button>
                    <button class="btn btn-warning" type="button"><i class="bi bi-pencil-square"></i></button>
                `;  

    // <th scope="row">1</th>
    let th=document.createElement('th')
    th.setAttribute('scope','row')
    th.innerHTML=id

    tr.append(th,td1,td2,td3)
    itemlist.append(tr)

}

async function getUserData() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    
    //map method
    data.map((element)=>{
        console.log(element)
        const {name,email,id}=element
        createTableRow(name,email,id)
    })
  }
  getUserData();

async function getUserSpecificData(userId) {
        let res = await fetch(`${url}/${userId}`);
        let data = await res.json();
        console.log(data);
        const {name,email,id}=data
        createTableRow(name,email,id)
}
