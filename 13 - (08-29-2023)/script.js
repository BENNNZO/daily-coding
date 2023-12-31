let monthDict = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let daysDict = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let date = new Date()

function init() {
    document.getElementById("month").innerText = monthDict[new Date().getMonth()]
    document.getElementById("card-date").innerText = new Date().getDate()
    document.getElementById("card-day").innerText = daysDict[new Date().getDay()]

    let datesArr = []

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 7; j++) {
            let index = (i * 7) + j
            if (index - getStartDate() < 0 || index - getStartDate() >= getDaysInMonth()) {
                datesArr.push("<div></div>")
            } else {
                datesArr.push(`
                    ${index - 1 < new Date().getDate() ? `
                        <div class="text-center font-medium w-8 h-8 grid place-items-center opacity-40">
                    ` : index - 1 === new Date().getDate() ? `
                        <div class="text-center font-medium w-8 h-8 grid place-items-center shadow-md text-white rounded-full bg-gradient-to-r from-sky-300 to-blue-400">
                    ` : `
                        <div class="text-center font-medium w-8 h-8 grid place-items-center">
                    `}
                        <p>${index - 1}</p>
                    </div>
                `)
            }
        }
    }

    document.getElementById("dates").innerHTML = datesArr.join("")
}

function getDaysInMonth() {
    return new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()
}

function getStartDate() {
    return new Date().getDay() - new Date().getDate() % 7 + 1
}

init()