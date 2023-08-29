let monthDict = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

document.getElementById("month").innerText = monthDict[new Date().getMonth()]

console.log(monthDict[new Date().getMonth()])