const complimentBtn = document.getElementById("complimentButton")
const fortuneButton = document.querySelector('#fortuneButton')
const body = document.querySelector('body')
const fortuneContainer = document.querySelector('#fortuneContainer')
const list = document.querySelector('#listContainer')
const newFortuneBtn = document.querySelector('#newFortuneBtn')



const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () =>{
    axios.get('http://localhost:4000/api/fortune')
    .then(res =>{
        console.log(res.data)
        fortuneList(res.data)
    })
    .catch(err => console.log(err))
}

const fortuneList = (arr) => {
    for(let i=0; i<arr.length; i++){
        let listItem = document.createElement('li')
        listItem.innerHTML = `<div id="fortuneContainer">
        <p id='myFortune-${i}'>Fortune: ${arr[i]}</p>
        <button onclick="deleteFortune(${i}) "deleteBtn-${i}">Delete</button>
        <input id='inputSub-${i}' type='text' placeholder='Type your new fortune here...'>
        <button onclick='editFortune(${i})' "subButton-${i}">Submit</button>
        </div>`
        list.appendChild(listItem)
    }
}


const deleteFortune = (index) => {
    axios.delete(`http://localhost:4000/api/fortune/${index}`)
    .then(res =>{
        console.log(res)
        list.innerHTML= ''
        // fortuneContainer.innerHTML = ''
        fortuneList(res.data)
    })
    .catch(err => console.log(err))
}
const addFortune = () => {
    const newInput = document.querySelector('#newInput')
    

    let fortuneObj = {
        fortune: newInput.value
    }
    subFortune(fortuneObj)

    newInput.value = ''
}

const subFortune = obj =>{
    axios.post('http://localhost:4000/api/fortune', obj)
    .then(res => {
        console.log(res)
        list.innerHTML= ''
        fortuneList(res.data)
    })
    .catch(err=> console.log(err))
}
// const toggleEdit = i =>{
//     const myFortune = document.querySelector(`myFortune-${i}`)
//     myFortune.setAttribute('style','visibility: hidden')
// }

const editFortune = i => {
    const inputSub = document.querySelector(`#inputSub-${i}`)
    let fortObj = {
        fortune: inputSub.value
    }
    axios.put(`http://localhost:4000/api/fortune/${i}`, fortObj)
    .then(res =>{
        console.log(res)
        list.innerHTML= ''
        fortuneList(res.data)
    })
    .catch(err=> console.log(err))
}



newFortuneBtn.addEventListener('click', addFortune)
fortuneButton.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)