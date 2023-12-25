planets = ['Sun', 'Mercure', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturne', 'Uranus', 'Neptune']

let div0, div1, div2, div3, div4, div5, div6, div7, div8

div0 = document.createElement('div')
div1 = document.createElement('div')
div2 = document.createElement('div')
div3 = document.createElement('div')
div4 = document.createElement('div')
div5 = document.createElement('div')
div6 = document.createElement('div')
div7 = document.createElement('div')
div8 = document.createElement('div')

div0.classList.add('planet', 'sun')
div1.classList.add('planet', 'mercure')
div2.classList.add('planet', 'venus')
div3.classList.add('planet', 'earth')
div4.classList.add('planet', 'mars')
div5.classList.add('planet', 'jupiter')
div6.classList.add('planet', 'saturne')
div7.classList.add('planet', 'uranus')
div8.classList.add('planet', 'neptune')

let section = document.querySelector('section')
console.log(section)


section.appendChild(div0)
section.appendChild(div1)
section.appendChild(div2)
section.appendChild(div3)
section.appendChild(div4)
section.appendChild(div5)
section.appendChild(div6)
section.appendChild(div7)
section.appendChild(div8)