planets = [
  "Sun",
  "Mercure",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturne",
  "Uranus",
  "Neptune"
];

let section = document.getElementById("test")


for(i of planets){
  
    i = document.createElement(`${i}`);
    i.classList.add('planet',`${i}`);
    section.appendChild(`${i}`);
}




// div0.classList.add("planet", "sun");
// div1.classList.add("planet", "mercure");
// div2.classList.add("planet", "venus");
// div3.classList.add("planet", "earth");
// div4.classList.add("planet", "mars");
// div5.classList.add("planet", "jupiter");
// div6.classList.add("planet", "saturne");
// div7.classList.add("planet", "uranus");
// div8.classList.add("planet", "neptune");

// console.log(section);

// section.appendChild(div0);
// section.appendChild(div1);
// section.appendChild(div2);
// section.appendChild(div3);
// section.appendChild(div4);
// section.appendChild(div5);
// section.appendChild(div6);
// section.appendChild(div7);
// section.appendChild(div8);
