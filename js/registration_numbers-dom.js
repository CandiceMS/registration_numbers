var regInput = document.querySelector('input[name="RegInput"]');
var locationInput = document.querySelector('input[name="LocationInput"]');
var addBtn = document.querySelector('button[name="AddBtn"]');
var clearBtn = document.querySelector('button[name="clearBtn"]');
var locateBtn = document.querySelector('.locateBtn');
var selectFilter = document.querySelector('.locationsAdd');
var moreReg = document.querySelector('div[class="row divDisplay"]');

console.log(moreReg);
  //moreReg[moreReg.length - 1];

function add() {
  // locationList.value = map.key
  // regInput.value = map.key-value

  regInput.value = "";
  locationInput.value = "";

//  var createUL = document.createElement('ul');
  //selectFilter.appendChild(createUL);
//   var createLI = document.createElement('li');
//   searchFilter.appendChild(createLI);
//   var createItem = createLI.createElement('input');
//   createLI.appendChild(createItem);
//   //createAttribute
//   createItem.createAttribute("type"),("name");
//   createItem.setAttribute("type", "button"), ("name", "location");
// //  createItem.value = ; // map.key
}

function displayOutput() {
  console.log(locationInput.value);
  console.log(regInput.value);
  addReg.mapReg(addReg.regUpper(regInput.value), addReg.capitalise(locationInput.value));
  regInput.value = "";
  locationInput.value = "";
  addReg.returnMap();
  var createOutput = document.createElement('output');
  moreReg.appendChild(createOutput);
  createOutput.classList.add("col-3", "center", "display_Reg");
  createOutput.innerHTML = addReg.regReturn();
    // And location font 10px

    var createLI = document.createElement('li');
    selectFilter.appendChild(createLI);
    var createItem = document.createElement('input');
    createLI.appendChild(createItem);
  //  createItem.createAttribute("type"),("name");
    createItem.setAttribute("type", "button"), ("name", "location");
    createItem.value = addReg.returnLocation(); // map.key




  var holdMap = addReg.returnMap();
  localStorage.setItem("localMap", JSON.stringify(holdMap));
}


var holdMap  = localStorage.getItem('localMap') ? JSON.parse(localStorage.getItem('localMap')):{};

var addReg = AddRegistrations(holdMap);
addReg.storeNewMap();




function reset() {
  localStorage.clear();
  location.reload();
}
addBtn.addEventListener('click', displayOutput);
clearBtn.addEventListener('click', reset);
//locateBtn.addEventListener('click', displayOutput);
// eventListener for location created to display reg
