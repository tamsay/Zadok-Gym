let search = document.querySelector('#search');
let sportList = document.querySelectorAll('#programmeGrid div');
let displayDiv = document.querySelector('#programmeGrid');
let dance = document.querySelector('#dance');
let badminton = document.querySelector('#badminton');
let tableTennis = document.querySelector('#tableTennis');
let gym = document.querySelector('#gym');
let lawnTennis = document.querySelector('#lawnTennis');
let karate = document.querySelector('#karate');
let boxing = document.querySelector('#boxing');
let basketball = document.querySelector('#basketball');
let cycling = document.querySelector('#cycling') ;

// let detailsDiv = document.createElement('div')
//     // detailsDiv.className = 'detailsDiv'
//     detailsDiv.style.display = 'none'

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

let danceCount = 0;
dance.addEventListener('click', ()=>{
    let details = document.createElement('div')
    details.id = 'danceDetailsDiv'
    let detailsDiv = document.querySelector('#danceDetailsDiv')
    // detailsDiv.className = 'detailsDiv'
    // detailsDiv.style.display = 'none'
    detailsDiv.innerText = 'dance is an aerobic exercise good for your body'

    if(danceCount%2 === 0){
        detailsDiv.style.display = 'block'
        dance.appendChild(detailsDiv)
        danceCount++;
    }
    else{
       // detailsDiv.style.display = 'none'
         detailsDiv.innerText = ''
        danceCount++;
    }
})

let badmintonCount = 0;
badminton.addEventListener('click', ()=>{
    if(badmintonCount%2 === 0){
        detailsDiv.innerText = 'badminton is an aerobic exercise good for your body'
        detailsDiv.style.display = 'block'
        badminton.appendChild(detailsDiv)
        badmintonCount++;
    }
    else{
        detailsDiv.style.display = 'none'
        detailsDiv.innerText = ''
        badminton.appendChild(detailsDiv)
        badmintonCount++;
    }
})