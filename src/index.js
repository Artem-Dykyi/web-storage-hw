const nameContact = document.querySelector(".nameContact")
const nameUs = document.querySelector(".name")
const serName = document.querySelector(".sername")
const phone = document.querySelector(".phone")
const email = document.querySelector(".email")
const btn = document.querySelector(".btn")

const deleteBtn = document.querySelector(".btn-delete")
const textDelete = document.querySelector(".text-delete")

function addData(data, key){
    const arhiveData = JSON.stringify(data)
    localStorage.setItem(key, arhiveData)
}

const userData = {}

function updateUserData() {
    userData.userName = nameUs.value;
    userData.userSerName = serName.value;
    userData.userPhone = phone.value;
    userData.userEmail = email.value;
}

btn.addEventListener("click", () => {
    updateUserData(); 
    addData(userData, nameContact.value); 
});


deleteBtn.addEventListener("click", () => {
        localStorage.removeItem(textDelete.value)
})

function getData(key){
    const data = localStorage.getItem(key)
    const parseData = JSON.parse(data)
    return parseData
}

console.log(getData(""))





