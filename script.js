console.log('It is working')
let search = document.querySelector('#search');
let sportList = document.querySelectorAll('#programmeGrid div')
let displayDiv = document.querySelector('#programmeGrid')

let createSportGrid =(array)=>{
    for(x=0; x < array.length; x++){
        displayDiv.appendChild(array[x]);
    }
}


let displaySport=()=>{
    displayDiv.innerText = "";
    let filteredArray = [];
    let input = search.value;

    [...sportList].map(element=>{
        
        if (element.textContent.toLowerCase().includes(input.toLowerCase())){
            filteredArray.push(element);
        }
    })
    createSportGrid(filteredArray);
}


search.addEventListener('input' , displaySport)
