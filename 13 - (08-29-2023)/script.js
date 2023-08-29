let monthDict = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let daysDict = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let date = new Date()

function init() {
    document.getElementById("month").innerText = monthDict[new Date().getMonth()]
    console.log(new Date().getDay())
    console.log(new Date().getDate())
    console.log(daysDict[new Date().getDay()])

    let datesArr = []

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 7; j++) {
            let index = (i * 7) + j
            if (index - getStartDate() < 0 || index - getStartDate() >= getDaysInMonth()) {
                datesArr.push("<div></div>")
            } else {
                datesArr.push(`
                    ${index - 1 < new Date().getDate() ? `
                        <div class="text-center opacity-50">
                    ` : index - 1 === new Date().getDate() ? `
                        <div class="text-center bg-blue-400">
                    ` : `
                        <div class="text-center text-bold">
                    `}
                        ${index - 1}
                    </div>
                `)
            }
        }
    }

    // document.getElementById("dates").innerHTML = datesArr
    document.getElementById("dates").innerHTML = datesArr.join("")
}

function getDaysInMonth() {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()
}

function getStartDate() {
    return new Date().getDay() - new Date().getDate() % 7 + 1
}

init()