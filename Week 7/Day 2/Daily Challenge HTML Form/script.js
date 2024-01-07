let form = document.querySelector('form')
let button = document.querySelector('button')

form.addEventListener('submit', function(e){
  e.preventDefault()
  let name = document.getElementById('name').value
  let lastname = document.getElementById('lastname').value
  let result = `{"name":"${name}","lastname":"${lastname}"}`
  let p = document.createElement('p')
  p.innerHTML = result
  form.append(p)
})

