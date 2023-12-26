// function insertRow(){
//     var x=document.getElementById('sampleTable').insertRow(0);
//     var y = x.insertCell(0);
//     var z = x.insertCell(1);
//     y.innerHTML="New Cell1";
//     z.innerHTML="New Cell2";
// }

// function insertRow(){
//     const table = document.querySelector('table');
//     const trs = document.querySelectorAll('tr').length;
//     const newRow = document.createElement("tr");
//     const td1 = document.createElement('td');
//     const td2 = document.createElement('td');
//     td1.innerText = `Row ${trs + 1} cell1`;
//     td2.innerText = `Row ${trs + 1} cell2`;
//     newRow.append(td1, td2)
//     table.appendChild(newRow)
// }

// let btn = document.getElementById('jsstyle')

// function clickStyling(){
//     btn.classList.add('color')
// }

// function mouseOverStyling(){
//     btn.classList.add('fonnt')
// }

// btn.addEventListener('click', clickStyling);
// btn.addEventListener('mouseover', mouseOverStyling)

// const div = document.querySelector("div");

// setInterval(function(){
//     for(let i = 10; i>=0; i--){
//          div.innerText = `The sales end in ${i}`
//     }
// },1000);
// let num=10
// setInterval(function () {
//   if (num>=0){
//     div.innerText=`sale ends in ${num}`;
//     num--
//   }
// }, 1000);
// animation

// const child = document.getElementById('child');

// pos = 0;
// let id = setInterval(function(){
//     if(pos != 400){
//         pos++
//         child.style.left = pos + 'px'
//         child.style.top = pos + 'px'
//     } else clearInterval(id)
// }, 10)