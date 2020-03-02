let search = document.querySelector('#search');
let sportList = document.querySelectorAll('#programmeGrid div p');
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
let heading = document.querySelector('#home');

let createSportGrid =(array)=>{
    for(x=0; x < array.length; x++){
        displayDiv.appendChild(array[x]);
    }
}

let randomColor =()=>{
    let color = `#${(Math.ceil(Math.random()*16777215)).toString(16)}`
    return color;
}

setInterval(() => {
    heading.style.color = randomColor();
}, 5000);

let displaySport=()=>{
    displayDiv.innerText = "";
    let filteredArray = [];
    let input = search.value;

    [...sportList].map(element=>{
        
        if (element.textContent.toLowerCase().includes(input.toLowerCase())){
            filteredArray.push(element.parentElement);
        }
    })
    createSportGrid(filteredArray);
}
search.addEventListener('input' , displaySport)

let danceDetails = document.createElement('div')
    danceDetails.className = 'detailsDiv'
    danceDetails.style.display = 'none'

let danceFunction =()=>{
        danceDetails.innerText = 'Dance is an aerobic exercise good for your body'
        danceDetails.style.textAlign = 'center'
    
        if(danceDetails.style.display === 'none'){
            danceDetails.style.display = 'block'
            dance.appendChild(danceDetails)
        }
        else{
            danceDetails.style.display = 'none'
        } 
};

dance.addEventListener('click', ()=>{
    danceFunction()
});

let danceLink = document.querySelector("a[href='#dance']")
danceLink.addEventListener('click',()=>{
    danceFunction();
})

let badmintonDetails = document.createElement('div')
    badmintonDetails.className = 'detailsDiv'
    badmintonDetails.style.display = 'none'

let badmintonFunction =()=>{
    badmintonDetails.innerText = 'Badminton is an aerobic exercise good for your body'
    badmintonDetails.style.textAlign = 'center'

    if(badmintonDetails.style.display === 'none'){
        badmintonDetails.style.display = 'block'
        badminton.appendChild(badmintonDetails)
    }
    else{
        badmintonDetails.style.display = 'none'
    }
}
badminton.addEventListener('click', ()=>{
    badmintonFunction();
})

let badmintonLink = document.querySelector("a[href='#badminton']")
badmintonLink.addEventListener('click',()=>{
    badmintonFunction();
})

let tableTennisDetails = document.createElement('div')
    tableTennisDetails.className = 'detailsDiv'
    tableTennisDetails.style.display = 'none'

let tableTennisFunction=()=>{
    tableTennisDetails.innerText = 'Table-tennis is an aerobic exercise good for your body'
    tableTennisDetails.style.textAlign = 'center'

    if(tableTennisDetails.style.display === 'none'){
        tableTennisDetails.style.display = 'block'
        tableTennis.appendChild(tableTennisDetails)
    }
    else{
        tableTennisDetails.style.display = 'none'
    }
}
tableTennis.addEventListener('click', ()=>{
    tableTennisFunction();
})

let tableTennisLink = document.querySelector("a[href='#tableTennis']")
tableTennisLink.addEventListener('click',()=>{
    tableTennisFunction();
})



