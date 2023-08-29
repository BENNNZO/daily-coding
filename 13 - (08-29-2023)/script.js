let monthDict = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let daysDict = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let date = new Date()

function init() {
    document.getElementById("month").innerText = monthDict[new Date().getMonth()]
    console.log(new Date().getDay())
    console.log(new Date().getDate() % 7)
    console.log(daysDict[new Date().getDay()])
}

function daysInMonth() {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()
}

init()