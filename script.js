 let result = document.createElement("div");
    result.id="result";
    // result.style.back..........
    document.getElementById("wrapper").appendChild(result);






const btn = document.querySelector("button");
//event listener refer google
btn.addEventListener('click', displaystats);
function displaystats(){
    // console.log("clicked");
    const inp = document.getElementById("input");
    let city = inp.options[inp.selectedIndex].value;
    console.log(city);
    let pop=0,litrate=0, lang="" ;
    switch(city){
        case "Bangalore" :
            pop=59876;
            lang="Kannadam";
            litrate=90;
            break;
        
        case "Chennai" :
            pop=65443;
            lang="Tamil";
            litrate=90;
            break;

        case "Delhi" :
            pop=64321;
            lang="Hindi";
            litrate=89;
            break;


            
    }
    let text = `${city} is a beautiful city its population rate is ${pop} % and then it has a literacy rate of ${litrate} % . The language spoken is ${lang}`;
    // console.log(text);
    

    
    document.getElementById("result").innerHTML = text ;
}