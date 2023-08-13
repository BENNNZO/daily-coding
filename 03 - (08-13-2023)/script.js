// get profile elements in dom
let profileEl = document.getElementById("profile-picture")

// sets random profile picture src
profileEl.setAttribute("src", `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${Math.round(Math.random() * 99)}.jpg`)