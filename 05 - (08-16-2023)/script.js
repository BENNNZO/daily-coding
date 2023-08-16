// list of random names
const nameList = [
    "Demi Wilkinson",
    "Leonard Wallace",
    "Arianna Galindo",
    "Salvatore Ferguson",
    "Juliana Goodman",
    "Philip Best",
    "Lexie Gill",
    "Matthias Duffy",
    "Addisyn Berger",
    "Byron Spears",
    "Isabela Glenn",
    "Zaid Pitts",
    "Nala Case",
    "Bentlee Glenn",
    "Blaire Shepard",
    "Damari Crawford",
    "Aubree Cantu",
    "Anakin Moss",
    "Bianca Figueroa",
    "Spencer Keller",
    "Logan Suarez",
    "Soren Greene",
    "Selena Wilkerson",
    "Carmelo Guevara",
    "Teresa Orozco",
    "Keanu Sanders",
    "Everleigh Wolf",
    "Jase Payne",
    "London Hampton",
    "Hank Cochran",
    "Alma Ho",
    "Morgan Massey",
    "Clementine Williamson",
    "Emerson Walter",
    "Penny Dudley",
    "Colter Gentry",
    "Amelie Moreno",
    "Myles McCullough",
    "Hana Curry",
    "Briggs Evans",
    "Eliana Case",
    "Bentlee Avery",
    "Meghan Ortiz",
    "Landon Callahan",
    "Kimber Gonzalez",
    "Ethan Correa",
    "Valery Duarte",
    "Abdullah Neal",
    "Talia Rush",
    "Kaiser Hawkins",
    "Ariel Robinson",
    "Matthew Donovan",
    "Azariah McGee",
    "Conner Lloyd",
    "Emely Watkins",
    "Nash Sloan",
    "Selene Kane",
    "Brock Patterson",
    "Kaylee Ford",
    "Luis Pratt",
    "Ailani Schultz",
    "Cody Johns",
    "Giovanna Crosby",
    "Tristen Stark",
    "Kamilah Wade",
    "Jake Zimmerman",
    "Ariyah Riley",
    "Amari Nash",
    "Novah Mosley",
    "Rayden Benton",
    "Anais Pratt",
    "Rowen Estrada",
    "Sawyer White",
    "Aiden Murray",
    "Faith Baxter",
    "Tomas Baxter",
    "Lara Marin",
    "Aldo Nelson",
    "Everly Chan",
    "Frank Garcia",
    "Amelia Pacheco",
    "Erik Weaver",
    "Teagan Odom",
    "Kylian Reyes",
    "Audrey Frye",
    "Franco Alvarez",
    "Leilani Wilcox",
    "Jerry Short",
    "Cheyenne Greene",
    "Griffin Thornton",
    "Haisley Davila",
    "Grey Hancock",
    "Katelyn Leblanc",
    "Braden Townsend",
    "Azalea Brennan",
    "Curtis Moss",
    "Bianca Jennings",
    "Corbin Hudson",
    "Kamila Grimes",
    "Harlan Hess"
]

// get elements
let profileEl1 = document.getElementById("profile-picture-1")
let profileEl2 = document.getElementById("profile-picture-2")
let profileEl3 = document.getElementById("profile-picture-3")

let nameEl1 = document.getElementById("name-1")
let nameEl2 = document.getElementById("name-2")
let nameEl3 = document.getElementById("name-3")


// i get this is weird and i could do a for loop with a query selector but this is just easier and simpler
profileEl1.setAttribute("src", `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${Math.round(Math.random() * 99)}.jpg`)
profileEl2.setAttribute("src", `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${Math.round(Math.random() * 99)}.jpg`)
profileEl3.setAttribute("src", `https://randomuser.me/api/portraits/${Math.random() > 0.5 ? "men" : "women"}/${Math.round(Math.random() * 99)}.jpg`)

nameEl1.innerText = `${nameList[Math.round(Math.random() * 99)]}`
nameEl2.innerText = `${nameList[Math.round(Math.random() * 99)]}`
nameEl3.innerText = `${nameList[Math.round(Math.random() * 99)]}`