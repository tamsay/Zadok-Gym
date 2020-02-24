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

let danceDetails = document.createElement('div')
    danceDetails.className = 'detailsDiv'
    danceDetails.style.display = 'none'

dance.addEventListener('click', ()=>{
    danceDetails.innerText = 'Dance is an aerobic exercise good for your body'

    if(danceDetails.style.display === 'none'){
        danceDetails.style.display = 'block'
        dance.appendChild(danceDetails)
    }
    else{
        danceDetails.style.display = 'none'
    }
})

let badmintonDetails = document.createElement('div')
    badmintonDetails.className = 'detailsDiv'
    badmintonDetails.style.display = 'none'

badminton.addEventListener('click', ()=>{
    badmintonDetails.innerText = 'Badminton is an aerobic exercise good for your body'

    if(badmintonDetails.style.display === 'none'){
        badmintonDetails.style.display = 'block'
        badminton.appendChild(badmintonDetails)
    }
    else{
        badmintonDetails.style.display = 'none'
    }
})

let tableTennisDetails = document.createElement('div')
    tableTennisDetails.className = 'detailsDiv'
    tableTennisDetails.style.display = 'none'

tableTennis.addEventListener('click', ()=>{
    tableTennisDetails.innerText = 'Table-tennis is an aerobic exercise good for your body'

    if(tableTennisDetails.style.display === 'none'){
        tableTennisDetails.style.display = 'block'
        tableTennis.appendChild(tableTennisDetails)
    }
    else{
        tableTennisDetails.style.display = 'none'
    }
})



