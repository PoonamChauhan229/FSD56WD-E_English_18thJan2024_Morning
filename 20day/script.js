let username=document.getElementById('username')
let email=document.getElementById('email')
let url = `https://652e7b520b8d8ddac0b1761f.mockapi.io/users`;
let itemlist=document.getElementById('itemlist')

//Part1 : POSTING THE DATA TO THE SERVER
function submitBtn(){
    console.log(1)
    console.log(username.value,email.value)
    createUser(username.value,email.value)
}

async function createUser(value1,value2) {
  console.log(value1,value2)
  if(value1 !='' && value2 !=''){
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
    // BUG2
    username.value='';
    email.value='';

  }else{
    // BUG1
    alertbootstrap("Enter the Username and Email","danger")
  }
}

//Part2 : FETCHING THE DATA FROM THE SERVER AND DISPLAYING IN THE TABLE

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
                    <button type="button" class="btn btn-primary" id='edit${id}' onclick="editUser('${id}','${value1}','${value2}')"data-bs-toggle="modal" data-bs-target='#exampleModal${id}'>
                    <i class="bi bi-pencil-square"></i>
                    </button>

                    <button class="btn btn-danger" id='delete${id}' onclick='deleteUser(${id})' type="button"><i class="bi bi-archive-fill"></i></button>
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

//Part 3 : DELETE THE DATA  

async function deleteUser(deleteUserId) {
  console.log(deleteUserId)
 alert("Are You Sure?")
  let res = await fetch(`${url}/${deleteUserId}`, {
    method: "DELETE",
  });
  itemlist.innerHTML="";
  getUserData()
}


//Part 4: EDIT BUTTON > DESIGN THE FORM > SHOULD HAVE THE SPECIFIC DATA 
const editUser=(id,value1,value2)=>{
  console.log(id,value1)
  const modal=document.createElement('span')
  modal.innerHTML=`
                    <div class="modal fade" id="exampleModal${id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                          <div class="input-group mb-3">
                          <span class="input-group-text" id="basic-addon1">UserName</span>
                          <input type="text" id="modalusername${id}" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value="${value1}">
                        </div>
            
                      <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1">Email</span>
                        <input id='modalemail${id}' type="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" value="${value2}">
                      </div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" onclick='updateUser(${id})'>Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>  
                  `
// append
document.body.append(modal)
}


//Part 4: UPDATE THE DATA

async function updateUser(updateUserId) {
      console.log(updateUserId)
    
      let updatedUserName=document.getElementById('modalusername'+updateUserId).value
      let updatedEmail=document.getElementById('modalemail'+updateUserId).value
      console.log(updatedUserName,updatedEmail)
        try {
          let updateDetail = {
            name: updatedUserName,
            email: updatedEmail
          };
          let res = await fetch(`${url}/${updateUserId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updateDetail),
          });

          let data = await res.json();
          console.log(data);
          const {name,email}=data
          document.getElementById('name'+updateUserId).innerText=name
          document.getElementById('email'+updateUserId).innerText=email

        } catch (e) {
          console.log(e);
        }
       }

//PART 5: ALERT
var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alertbootstrap(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}
       
       