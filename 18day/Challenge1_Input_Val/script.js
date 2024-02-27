let cityName=document.getElementById('cityName').value
// console.log(cityName.value)

let weatherContainer=document.getElementById('weatherContainer')
// console.log(weatherContainer)


// let cityName="London"
let apiKey=`41575f34d7cb96cd9f250e887e1f7ef3`// Akhilesh API KEY
let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`    


async function getData(){
    let data= await fetch(url)//promise => return the response           
    let res = await data.json()//return the array 250 > convert into json > array value into it
    console.log(res)
    const {timezone,visibility, main}=res // object destructing
    weatherContainer.innerHTML=`
    <ul class="list-group list-group-flush">
                <li class="list-group-item">TimeZone: ${timezone}</li>
                <li class="list-group-item">Visibility: ${visibility}</li>
                <li class="list-group-item">Temperature: ${main.temp}</li>
    </ul>
    `
}
getData()