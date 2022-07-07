// Write your helper functions here!
//require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let output = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
                
      `;
      document.getElementById("missionTarget").innerHTML= output;
   
}

function validateInput(testInput) {
   if (testInput ==""){
    return "Empty";
   }
   else if (isNaN(testInput)){
    return "Not a Number";
   }
   else{
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) ==="Empty" ||validateInput(copilot)==="Empty"||
            validateInput(fuelLevel)==="Empty" ||validateInput(cargoLevel)==="Empty"){
                alert('all fields are required');
   }
   if (validateInput(pilot) ==="Is a Number" ||validateInput(copilot)==="Is a Number"||
            validateInput(fuelLevel)==="Not a Number" ||validateInput(cargoLevel)==="Not a Number"){
                alert('please enter valid information for each field');
   }
   document.getElementById('pilotStatus').innerHTML=`Pilot ${pilot} is ready for launch`;
   document.getElementById('copilotStatus').innerHTML=`Copilot ${copilot} is ready for launch`;
    if (fuelLevel<10000){
        list.style.visibility="visible";
        document.getElementById('fuelStatus').innerHTML="fuel level is too low for launch";
        document.getElementById('launchStatus').innerHTML="shuttle not ready for launch";
        document.getElementById('launchStatus').style.color="red";

    }
    else{
        document.getElementById('fuelStatus').innerHTML="fuel level is high enough for launch";

    }
    if (cargoLevel>10000){
        list.style.visibility="visible";
        document.getElementById('cargoStatus').innerHTML="cargo mass is too high for launch";
        document.getElementById('launchStatus').innerHTML="shuttle not ready for launch";
        document.getElementById('launchStatus').style.color="red";

    }
    else{
        document.getElementById('cargoStatus').innerHTML="cargo mass is low enough for launch";

    }
    if (fuelLevel>=10000 && cargoLevel<=10000){
        list.style.visibility="hidden";
        document.getElementById('launchStatus').innerHTML="shuttle is ready for launch";
        document.getElementById('launchStatus').style.color="green";

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index= Math.floor(Math.random() *planets.length);
    return planets[index];
}

/*module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;*/
